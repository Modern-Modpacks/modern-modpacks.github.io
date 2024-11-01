<script lang="ts">
    import type { BlogPost } from "$lib/scripts/interfaces";
    import { blogPosts, lightMode } from "$lib/scripts/stores";
    import { openBlogpost } from "$lib/scripts/utils";
    import removeMd from "remove-markdown";
    import BlogpostTag from "./BlogpostTag.svelte";
    import { _ } from "svelte-i18n";
    
    export let id : string
    
    let blogpost : BlogPost
    $: blogpost = $blogPosts![id]
</script>

<a href="?id={id}" class="grid desktop:grid-cols-[1fr_1.2fr] desktop:gap-5 w-full h-[9rem] mobile:h-fit {$lightMode ? "bg-header-light" : "bg-header-dark"} rounded-3xl cursor-pointer" title="{blogpost.metadata.title} {blogpost.metadata.subtitle}" on:click={id ? e => {e.preventDefault(); openBlogpost(id)} : null}>
    <img src="{blogpost.thumbnail}" alt='"{blogpost.metadata.title}" blogpost thumbnail' class="mobile:w-full mobile:h-[28vw] object-cover rounded-3xl shadow-[#00000077] shadow-2xl duration-300 motion-safe:hover:scale-105">
    <div class="flex flex-col justify-center h-full py-4 mobile:p-4">
        <b class="text-xl text-left block mobile:pb-2">{blogpost.metadata.title} <span class="opacity-35">{blogpost.metadata.subtitle}</span></b>
        <BlogpostTag tagIndex={blogpost.metadata.tag} />
        <p class="
            relative w-72 mobile:w-60 mt-1 text-lg mobile:text-base overflow-hidden mobile:line-clamp-2
            desktop:after:content-['...'] desktop:after:inline-block desktop:after:absolute desktop:after:-bottom-1 desktop:after:right-7
        ">{removeMd(blogpost.content)}</p>
    </div>
</a>