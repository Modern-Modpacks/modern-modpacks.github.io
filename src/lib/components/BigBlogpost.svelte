<script lang="ts">
    import type { BlogPost } from "$lib/scripts/interfaces";
    import { blogPosts, lightMode, visitedBlog } from "$lib/scripts/stores";
    import { openBlogpost } from "$lib/scripts/utils";
    import removeMd from "remove-markdown";
    import BlogpostTag from "./BlogpostTag.svelte";
    import { _ } from "svelte-i18n";
    import consts from "$lib/scripts/consts";

    export let id : string | null
    export let delay : number = 0
    
    let blogpost : BlogPost | null
    $: blogpost = id ? $blogPosts![id] : null
</script>

<a href="{id ? `?id=${id}` : ""}" class="block {$visitedBlog ? "" : " motion-safe:opacity-0 motion-safe:animate-comeup "}h-fit {$lightMode ? "bg-header-light" : "bg-header-dark"} rounded-3xl {blogpost ? "cursor-pointer" : "cursor-not-allowed"}" style="animation-delay: {delay}ms;" on:click|preventDefault={() => {if (id) openBlogpost(id)}}>
    <!-- 8:3 ratio -->
    <span class="relative block pt-[37.5%]">
        <img src="{blogpost ? blogpost.thumbnail : consts.MISSING_BLOGPOST_THUMBNAIL}" alt="{blogpost ? '"'+blogpost.metadata.title+'"' : "Missing"} blogpost thumbnail" class="absolute w-full left-0 top-0 object-cover rounded-3xl shadow-[#00000077] shadow-2xl duration-300{blogpost ? " motion-safe:hover:scale-[102.5%]" : ""}">
    </span>
    <div class="flex flex-col p-4 mt-1">
        <h2 class="text-left mobile:pb-2">{blogpost ? blogpost.metadata.title : $_("ui.missingblogpost")} <span class="opacity-35">{blogpost ? blogpost.metadata.subtitle : $_("ui.missingblogpostsub")}</span></h2>
        {#if blogpost}
            <BlogpostTag tagIndex={blogpost.metadata.tag} />
        {/if}
        <p class="h-[2.25ch] max-w-full w-fit mt-1 text-lg overflow-hidden whitespace-nowrap text-ellipsis">{blogpost ? removeMd(blogpost.content) : $_("ui.missingblogpostdesc")}</p>
    </div>
</a>