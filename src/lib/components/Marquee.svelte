<script lang="ts">
    import { mobile, reducedMotion } from "$lib/scripts/stores";
    import { onMount } from "svelte"
    import { time } from "svelte-i18n";
    import { linear, sineOut } from "svelte/easing";
    import { tweened, type Tweened } from "svelte/motion"
    import { get, writable, type Writable } from "svelte/store"

    // Options
    export let backwards : boolean = false // By default animation plays right to left, Whether to reverse that
    export let vertical : boolean = false // Whether to play the animation vertically instead of horizontally
    export let baseAnimDur : number
    export let firstAnimLength : number = 0
    export let animMin : number
    export let animMax : number
    export let stopDur : number = 0
    export let stopDist : number = 2
    export let shouldPlay : Writable<boolean> = writable(true) // Whether the animation should play
    export let inView : Writable<boolean> = writable(false) // Whether the element is in view
    
    // Shenanigans
    let mouseOver : boolean = false
    let translate : Tweened<number> = tweened(firstAnimLength ? ((backwards ? animMax : animMin) + (firstAnimLength * (backwards ? 1.5 : -1))) : 0, {duration: baseAnimDur})
    let animCount : number = firstAnimLength ? 0 : 2
    let animPlaying : boolean = false
    let timeout : number | null
    let doAnim = (resetAnim: boolean) => {
        if ($reducedMotion || !$shouldPlay) return
        animPlaying = true

        let animDur = resetAnim ? (!animCount ? 1500 : baseAnimDur) : baseAnimDur - ((baseAnimDur * (backwards ? 1 - (get(translate) / animMax) : get(translate) / animMax)))

        if (resetAnim) translate.set(backwards ? animMax : animMin, {duration: !animCount ? animDur : 0, easing: !animCount ? sineOut : linear})
        if (animCount) translate.set(backwards ? animMin : animMax, {duration: animDur})

        animCount++
        timeout = setTimeout(() => {doAnim(true)}, animDur)
    }
    let stopAnim = (immediate: boolean) => {
        if (!animPlaying) return

        animPlaying = false
        clearTimeout(timeout ?? 0)
        
        translate.set(get(translate) + (stopDist * (backwards ? -1 : 1) * (+!immediate)), {duration: stopDur, easing: sineOut})
    }

    onMount(() => {
        setTimeout(() => {
            if ($mobile) animCount = 2

            if (!firstAnimLength || $mobile) doAnim(true)
            else {inView.subscribe(v => {
                if (v) doAnim(true)
            })}

            shouldPlay.subscribe(v => {
                if (!v) stopAnim(true)
                else if (!mouseOver && !animPlaying) doAnim(false)
            })
        }, 1)
    })
</script>


<span
    role="list" class="w-fit{$reducedMotion ? " overflow-x-scroll" : ""}"
    style="transform: translate{vertical ? "Y" : "X"}({-$translate}rem);"
    on:mouseenter={() => {if ($reducedMotion || $mobile || animCount<2 || !stopDur) return; mouseOver = true; stopAnim(false)}} on:mouseleave={() => {mouseOver = false; if (!animPlaying) doAnim(false)}}
>
    <slot />
</span>