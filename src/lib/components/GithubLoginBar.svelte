<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_GITHUB_CLIENT_ID } from "$env/static/public";
    import { ghApiKey, lightMode } from "$lib/scripts/stores";
    import { sendGithubApiRequest } from "$lib/scripts/utils";
    import { LogIn, UserCircle } from "lucide-svelte";
    import { _ } from "svelte-i18n";
</script>

<span class="group relative w-full h-20 rounded-full [&>*]:w-full [&>*]:h-full [&>*]:rounded-full [&>*]:duration-300">
    <span class="flex px-3 gap-2 items-center {$lightMode ? "bg-header-light" : "bg-header-dark"} bg-opacity-30 backdrop-blur-xl motion-safe:group-hover:-translate-y-1">
        {#if $ghApiKey}
            {#await sendGithubApiRequest("user", true) then req}
                {#await req?.json() then info}
                    <img src="{info.avatar_url}" alt="{info.login}'s avatar" class="h-16 w-16 rounded-full">
                    <p>{@html $_("ui.profile", {values: {name: info.login}})}</p>

                    <button class="group/button flex items-center gap-2 h-16 px-4 {$lightMode ? "bg-text-light" : "bg-text-dark"} rounded-full ml-auto" on:click={() => {$ghApiKey = null}}>
                        <b class="{$lightMode ? "!text-selected-text-light" : "!text-selected-text-dark"} mobile:hidden">{$_("ui.logout")}</b>
                        <LogIn color="{$lightMode ? "#ffffff" : "#000000"}" class="h-10 w-10 mobile:h-8 mobile:w-8 translate-x-0.5 rotate-180 duration-200 motion-safe:group-hover/button:-translate-x-0.5" />
                    </button>
                {/await}
            {/await}
        {:else}
            <UserCircle class="h-16 w-16" />
            <p>{@html $_("ui.no_profile")}</p>
            
            <a href="https://github.com/login/oauth/authorize?client_id={PUBLIC_GITHUB_CLIENT_ID}&redirect_uri={window.location}" class="group/button flex items-center gap-2 h-16 px-4 {$lightMode ? "bg-text-light" : "bg-text-dark"} rounded-full ml-auto">
                <b class="{$lightMode ? "!text-selected-text-light" : "!text-selected-text-dark"} mobile:hidden">{$_("ui.login")}</b>
                <LogIn color="{$lightMode ? "#ffffff" : "#000000"}" class="h-10 w-10 mobile:h-8 mobile:w-8 motion-safe:-translate-x-0.5 duration-200 motion-safe:group-hover/button:translate-x-0.5" />
            </a>
        {/if}
    </span>
    <div class="block absolute top-0 -z-10 scale-[99%] shadow-[#00000088] bg-black shadow-[0px_20px_25px_var(--tw-shadow-color)] duration-300 motion-safe:group-hover:shadow-[#000000aa] motion-safe:group-hover:-translate-y-1" />
</span>