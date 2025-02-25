<script lang="ts">
    import { navigating, page } from "$app/stores"
    import consts, { icons } from "$lib/scripts/consts"
    import { lightMode, mobile, popupOpenedBy, popupOpenedByPartner, previousRandomBanner, randomSplash, reducedMotion, scrollY, upsideDownLocale } from "$lib/scripts/stores"
    import { onMount } from "svelte"
    import { ChevronsDown } from "lucide-svelte"
    import { randomChoice, toggleScroll } from "$lib/scripts/utils"
    import { _, json } from "svelte-i18n"
    import Modpack from "$lib/components/Modpack.svelte"
    import { type Modpack as MPack, type Mod, type Project } from "$lib/scripts/interfaces"
    import { writable, type Writable } from "svelte/store"
    import modpacks from "$lib/json/modpacks.json5"
    import partneredModpacks from "$lib/json/partner_modpacks.json5"
    import projs from "$lib/json/projects.json5"
    import PartnerModpack from "$lib/components/PartnerModpack.svelte"
    import SocialsBar from "$lib/components/SocialsBar.svelte"
    import ModContextMenu from "$lib/components/ModContextMenu.svelte"
    import { inview } from "svelte-inview";
    import Marquee from "$lib/components/Marquee.svelte";
    import ModIcon from "$lib/components/ModIcon.svelte";
    import BreathingIcon from "$lib/components/BreathingIcon.svelte";

    // This function gets triggered on first page load, does the little appearance animation (if allowed of course)
    let removeOpacity = (children : HTMLCollection | undefined, withAnimation : boolean) => {
        for (let child of children!) {
            removeOpacity(child.children, withAnimation)
            if (!withAnimation && child.id!="animinheader") child.classList?.add("!duration-0", "!delay-0")
            child.classList?.remove("opacity-0", "translate-y-10", "-translate-y-10")
        }

        setTimeout(() => {animPlayed = true}, 1500)
    }
    let animPlayed : boolean = false // Whether the opacity anim has played

    // Scroll a page down if navigating from another page, hiding the header
    $: if ($navigating?.to?.url==$page.url) setTimeout(() => scrollTo(0, $mobile ? 1 : innerHeight), 1)

    // Modpacks, mods, and projects; chewed for typescript's enjoyment
    let packs : MPack[] = modpacks
    let mods : Mod[] | null
    let projects : Project[] = projs

    let banner : string | null // The banner's background
    let generateBanner = (pool : string[]) => { // A function to randomly generate said background
        banner = pool[Math.floor(Math.random() * pool.length)]
    }

    // Generate the banner for the first time, using custom banners and ones from modpack pages
    let possibleBanners : string[] = consts.ADDITIONAL_BANNERS
    packs.forEach(p => {
        if (p.banner) possibleBanners.push(p.banner)
    })
    generateBanner(possibleBanners)

    let modpacksHovered : boolean = false // Whether or not the left of the modpack section is hovered, activates the following mouse effect
    let shouldPartnerAnimPlay : Writable<boolean> = writable(true) // Whether a partner modpack popup is opened, stops the marquee anim
    popupOpenedByPartner.subscribe(v => {$shouldPartnerAnimPlay = !v})
    let shouldModsAnimPlay : Writable<boolean> = writable<boolean>(false) // Whether or not the spin animation for the mods section should play

    // Stuff needed for the mods anim
    const layerFirst = 8 // How many items are on the first circle layer
    const layerAdd = 2 // How many items to add per circle layer
    const layerCount = 2 // How many layers are visible

    let contextMenuAboutToBeClosed : boolean = true
    let spinAnimHovered : boolean = false

    let partnerQueueLen : number | null // The length of the partnered modpacks section
    let modContextMenu : ModContextMenu | null // The context menu element covering the left half of the HM section
    let sideProjectsInView : Writable<boolean> = writable(false) // Whether the side projects section is visible in viewport or not, used to start the marquee animation

    onMount(() => {
        let nav = $navigating // idk
        
        fetch(consts.MODRINTH_API_ENDPOINT).then(async res => {
            mods = await res.json() // Fetch mods and store
        })

        setTimeout(() => {
            partnerQueueLen = $reducedMotion ? partneredModpacks.length : Math.max(partneredModpacks.length+8, 8) // Calculate the length of partnered packs; if no anim then match the amount of partnered packs, if yes anim then either the amount of packs+8 or just 8, whichever is bigger
            if ($reducedMotion) generateBanner(possibleBanners.filter(b => !b.endsWith(".gif"))) // Generate the banner for the second time if reducedmotion is enabled, remove all gifs to not make the users dizzy

            let shouldShowOpacityAnim = !$scrollY && !nav && !$reducedMotion // If the previously mentioned appearance anim should play; stop if reducedmotion, navigating, or reload after already scrolled 

            // Different elements and classlists of elements in the header
            let title : HTMLElement | null = document.getElementById("title")
            let bg : HTMLElement | null = document.getElementById("bg")
            let arrowClasses : DOMTokenList | undefined = document.getElementById("arrow")?.classList

            // Keep the banner and the splash text if navigating, otherwise generate new ones
            if ($scrollY || nav) {
                banner = $previousRandomBanner
                arrowClasses?.add("hidden")
            }
            else {
                setTimeout(() => {
                    $randomSplash = randomChoice($json("splashes") as any[])
                    $previousRandomBanner = banner!

                    // If appearance anim is playing, make the user wait a bit and enjoy the beauty
                    if (!$reducedMotion && !$mobile) {
                        toggleScroll(false)
                        setTimeout(() => {toggleScroll(true)}, 2500)
                    }
                }, 1)
            }

            setTimeout(() => {removeOpacity(title?.children, shouldShowOpacityAnim)}, !shouldShowOpacityAnim ? 0 : 500) // Play the actual appearance anim

            // Remove banner down arrows on first scroll, and apply parallax effect to the bg if reducedmotion isn't enabled
            document.addEventListener("scroll", () => {
                arrowClasses?.remove("duration-[1s]", "delay-[2s]")
                arrowClasses?.add(`duration-[${$reducedMotion ? '0s' : '.25s'}]`, "opacity-0", "scale-0")

                if ($reducedMotion) return

                bg!.style.backgroundPositionY = `${Math.max($scrollY*.5-10, 0)}px`
            })
        }, 1)
    })
</script>

<main>
    <div class="w-[100vw] h-[100vh] mobile:h-[87.5vh] relative bg-black bg-opacity-50 flex mobile:flex-col mobile:[&>*]:text-center gap-10 mobile:gap-6 items-center justify-center" id="title">
        <div class="absolute w-full h-full -z-10 object-cover bg-cover mobile:bg-center" style="background-image: url('{banner}');" id="bg" />

        <img src="{consts.LOGO_URL}" class="w-64 h-64 mobile:w-52 mobile:h-52 rounded-xl opacity-0 translate-y-10 duration-[.5s]" alt="Modern Modpacks logo">
        <span class="w-[60%] mobile:w-full flex flex-col mobile:items-center gap-3">
            <h1 class="w-fit !text-white{!animPlayed ? (($upsideDownLocale ? " -" : " ") + "translate-y-10 opacity-0") : ""}" style="transition: opacity .5s, transform .5s; transition-delay: .5s;">Modern Modpacks</h1>
            <h3 class="w-fit !text-white{!animPlayed ? (($upsideDownLocale ? " -" : " ") + "translate-y-10 opacity-0") : ""}" style="transition: opacity .5s, transform .5s;  transition-delay: .75s;">{$randomSplash}</h3>
            <SocialsBar header={true} />
        </span>
        <ChevronsDown class="mobile:hidden absolute bottom-7 w-10 h-auto opacity-0 duration-[1s] delay-[2s] animate-float animate-duration-[5s]" id="arrow" color="#ffffff"/>
    </div>

    <div class="pt-16 mobile:pt-8 pb-8 px-10 mobile:px-5 {$lightMode ? "bg-primary-light" : "bg-primary-dark"} flex mobile:flex-col mobile:gap-8 justify-between items-center [&>*]:text-center">
        <div 
            role="list" class="grid grid-cols-4 gap-[4vw] w-[40vw] h-[40vw] mobile:w-full mobile:h-full aspect-square group"
            on:mouseenter={() => {modpacksHovered = true}} on:mouseleave={() => {modpacksHovered = false}}
        >
            {#each [...Array(16).keys()] as i}
                <Modpack index={i} bind:parentHover={modpacksHovered} />
            {/each}
        </div>
        <div class="flex flex-col gap-5 items-center w-[50%] mobile:w-full">
            <h2>{$_("projects.modpacks.heading")}</h2>
            <p>{@html $_("projects.modpacks.desc")}</p>
        </div>
    </div>

    <div class="py-8 desktop:pl-10 motion-reduce:desktop:pr-10 {$lightMode ? "bg-secondary-light" : "bg-secondary-dark"} flex mobile:flex-col-reverse justify-between gap-10 mobile:relative mobile:z-30 mobile:[&>*]:text-center{$upsideDownLocale ? " desktop:[&>*]:text-right" : ""}">
        <div>
            <h2>{@html $_("projects.partner.heading")}</h2>
            <p class="mt-3 max-w-full">{@html $_("projects.partner.desc")}</p>
        </div>
        <div
            class="flex w-[50vw] mobile:w-full [&>span]:flex [&>span]:items-center [&>span]:gap-6" 
            style="{!$reducedMotion ? "mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent 100%);" : ""}"
        >
            <Marquee baseAnimDur={2500 * ((partnerQueueLen ?? 0) - 6)} animMin={0} animMax={11.5 * ((partnerQueueLen ?? 0) - 6)} stopDur={600} bind:shouldPlay={shouldPartnerAnimPlay}>
                {#each [...Array(partnerQueueLen).keys()] as i}
                    <PartnerModpack modpack={partneredModpacks[i % partneredModpacks.length]} firstOfType={i < partneredModpacks.length} />
                {/each}
            </Marquee>
        </div>
    </div>

    <div class="{$lightMode ? "bg-primary-light" : "bg-primary-dark"} desktop:pr-10 flex mobile:flex-col justify-between [&>*]:text-center">
        <div class="min-w-[50%] mobile:min-w-full mobile:h-[50vh] relative flex flex-col justify-center items-center">
            <div class="absolute desktop:w-[120vw] mobile:h-[100vh] mobile:w-full h-full {$lightMode ? "bg-[radial-gradient(circle,_#a1a1a1_0%,_transparent_55%)]" : "bg-[radial-gradient(circle,_#0c0c0c_0%,_transparent_55%)]"} flex justify-center items-center">
                <div
                    role="list" class="h-full mobile:w-full w-[50%] relative overflow-hidden [&>button]:h-24 [&>button]:w-24 [&>button]:absolute [&>button]:cursor-pointer [&>button]:left-0 [&>button]:right-0 [&>button]:top-0 [&>button]:bottom-0 [&>button]:mx-auto [&>button]:my-auto [&_img]:rounded-md motion-safe:desktop:[&_img:hover]:!scale-[1.15] [&_img]:duration-200"
                    on:mouseenter={() => {spinAnimHovered = true; if (!$mobile) $shouldModsAnimPlay = false}} on:mouseleave={() => {spinAnimHovered = false; if (contextMenuAboutToBeClosed) $shouldModsAnimPlay = true}}
                    use:inview={{unobserveOnEnter: true}} on:inview_enter={() => {$shouldModsAnimPlay = true}}
                >
                    <ModContextMenu bind:this={modContextMenu} bind:aboutToClose={contextMenuAboutToBeClosed} bind:spinAnimHovered={spinAnimHovered} bind:shouldSpinAnimPlay={shouldModsAnimPlay} />
                    {#each [...Array((layerFirst * layerCount) + (layerAdd * (layerCount - 1))).keys()] as i}
                        <ModIcon modNumber={i} layerFirst={layerFirst} layerAdd={layerAdd} modContextMenu={modContextMenu} mods={mods} bind:shouldAnimPlay={shouldModsAnimPlay} />
                    {/each}
                </div>
            </div>
            <div class="group z-10 mobile:flex mobile:flex-col mobile:items-center">
                <BreathingIcon duration={2000} minScale={95} maxScale={100} class="duration-100 motion-safe:desktop:group-hover:!scale-100">
                    <img src="{consts.HM_LOGO_URL}" alt="Hellish Mods logo" title="Hellish Mods" class="w-48 mobile:w-24 rendering-pixelated rounded-md">
                </BreathingIcon>
                <div class="mt-5 mobile:mt-3 flex justify-center gap-5 mobile:gap-4 [&>span]:block [&>span]:w-10 mobile:[&>span]:w-8 [&>span]:h-10 mobile:[&>span]:h-8 [&>span]:duration-200 motion-safe:desktop:[&>span:hover]:!scale-[1.15] motion-safe:desktop:[&>span:not(:hover)]:group-hover:!scale-100 [&_img]:brightness-0{!$lightMode ? " [&_img]:invert" : ""}">
                    {#each Object.entries([
                        {link: "https://curseforge.com/members/hellishmods", title: "CurseForge"},
                        {link: consts.SOCIALS.Modrinth.url, title: "Modrinth"},
                        {link: "https://github.com/Hellish-Mods", title: "GitHub"}
                    ]) as [i, social]}
                        <BreathingIcon duration={2000} minScale={80} maxScale={100} delay={500 * +i}>
                            <a href="{social.link}" target="_blank" rel="noopener noreferrer">
                                <img src="{icons[social.title]}" alt="{social.title} logo" title="{social.title}">
                            </a>
                        </BreathingIcon>
                    {/each}
                </div>
            </div>
        </div>
        <div class="py-8 mobile:px-5 z-30 flex flex-col gap-5 items-center w-[50%] mobile:w-full pointer-events-none [&>*]:pointer-events-auto bg-gradient-to-l mobile:bg-gradient-to-t {$lightMode ? "from-primary-light" : "from-primary-dark"} from-90%">
            <h2>{$_("projects.hellish.heading")}</h2>
            <p>{@html $_("projects.hellish.desc")}</p>
        </div>
    </div>

    <div class="h-[65vh] mobile:h-fit {$lightMode ? "bg-secondary-light" : "bg-secondary-dark"} relative flex mobile:flex-col justify-center items-center [&>*]:text-center">
        {#if !$reducedMotion}
            <div 
                class="
                    desktop:absolute w-full mobile:h-[40vh] h-full flex flex-col justify-evenly mobile:justify-between mobile:pt-8
                    [&>span]:flex [&>span]:gap-8
                    [&_a]:h-[8.5vh] [&_a]:min-w-96 [&_a]:flex [&_a]:justify-center [&_a]:items-center {$lightMode ? "[&_a]:bg-primary-light" : "[&_a]:bg-primary-dark"} [&_a]:rounded-xl
                    [&_a]:duration-200 desktop:[&_a:hover]:scale-110
                    [&_p]:font-bold [&_p]:text-2xl
                "
                use:inview={{unobserveOnEnter: true}} on:inview_enter={() => {$sideProjectsInView = true}}
            >
                {#each [...Array(3).keys()] as row}
                    <Marquee backwards={!!(row%2)} baseAnimDur={projects.length * 3500 * ($mobile ? 1.15 : 1)} animMin={0} animMax={26 * projects.length} firstAnimLength={26 * 5} stopDur={500} bind:inView={sideProjectsInView}>
                        {#each [...Array(projects.length * 2).keys()] as i}
                        {@const project = projects[(i + (row * 2)) % projects.length]}
                            <a href="{project.link}" target="_blank" rel="noopener noreferrer" title="{$_("sideprojects."+project.id)}">
                                <p>{project.name} {project.icon}</p>
                            </a>
                        {/each}
                    </Marquee>
                {/each}
            </div>
        {/if}
        <div class="h-full w-full px-16 mobile:py-8 z-10 pointer-events-none [&>*]:pointer-events-auto flex flex-col gap-5 items-center justify-center {$lightMode ? "desktop:bg-[radial-gradient(circle,_#a1a1a1_10%,_transparent_65%)]" : "desktop:bg-[radial-gradient(circle,_#0c0c0c_20%,_transparent_75%)]"}">
            <h2>{$_("projects.ecosystem.heading")}</h2>
            <p>{@html $_("projects.ecosystem.desc")}</p>
        </div>
    </div>
</main>