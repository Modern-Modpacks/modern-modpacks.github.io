import type { BlogPost, Contributor, Coordinates, Comment } from "./interfaces"
import consts from "./consts"
import { contextMenuOpenedBy, ghApiKey, githubRateLimited, openedBlogPost, popupOpenedBy } from "./stores"
import { get } from "svelte/store"
import { nameToEmoji } from "gemoji"
import { parse as parseYaml } from "yaml"

export const randomChoice = (elements: any[]) => elements[Math.floor(Math.random()*elements.length)] // Randomly select an element from the array, probably the most redefined function on planet earth
export const getDistance = (point1: Coordinates, point2: Coordinates): number => { // Get distance between two pixels on screen, used for the mouse follow effect in the modpacks section
    let distX = point1.x - point2.x
    let distY = point1.y - point2.y

    return Math.sqrt((distX ** 2) + (distY ** 2))
}
export const calculateElementCenter = (el : HTMLElement | undefined): Coordinates => { // Get the center of the element on the page
    if (!el) return {x: 0, y: 0}
    return {
        x: window.scrollX + el.getBoundingClientRect().left + (el.getBoundingClientRect().width / 2),
        y: window.scrollY + el.getBoundingClientRect().top + (el.getBoundingClientRect().height / 2)
    }
}

export const getWebsiteIcon = (url : string): (string | null)[] => { // Get an icon of a website based on its url
    if (!url) return [null, null]
    for (let [k, icon] of Object.entries(consts.WEBSITE_ICONS)) {
        if (url.includes(k.toLowerCase())) return [k, icon]
    }
    return [null, null]
}
export const getContributorAvatar = (c : Contributor): string => c.avatar_url ?? `https://avatars.githubusercontent.com/u/${c.github.id}?v=4` // Get the avatar of a contributor
export const sendGithubApiRequestWithSetKey = async (endpoint: string, forceAuth: boolean, apiKey: string | null): Promise<Response | null> => { // Send a request to the gh api, using a set key
    let req : Response | null = null
    if (!forceAuth) req = await fetch("https://api.github.com/"+endpoint)
    
    if (req && req.status==200) return req
    if (forceAuth || req!.status==403) {
        if (req && req.status==403 && !apiKey) {
            githubRateLimited.set(true)
            return null
        }

        return await fetch("https://api.github.com/" + endpoint, {
            headers: {
                Authorization: "Bearer " + apiKey
            }
        })
    }

    if (req) console.error(await req.text())
    return null
}
export const sendGithubApiRequest = async (endpoint: string, forceAuth: boolean): Promise<Response | null> => sendGithubApiRequestWithSetKey(endpoint, forceAuth, get(ghApiKey)) // Call sendGithubApiRequestWithSetKey, but get key from store

export const removeHash = () => history.replaceState("", document.title, window.location.pathname + window.location.search) // Removes the hash from the url without refresh
export const removeParams = () => history.replaceState("", document.title, window.location.pathname + window.location.hash) // Removes the params from the url without refresh

// Get info about a blogpost
export const getBlogPost = async (path: string) : Promise<BlogPost | null> => {
    // Get the basic data
    let rawUrl = `https://raw.githubusercontent.com/${consts.REPO}/${consts.BLOG_BRANCH}/${path}` // Get the url of the raw files
    let content = await (await fetch(rawUrl+".md")).text() // Get the content of the raw markdown file

    // If the markdown file doesn't have metadata, return null
    if (!content.startsWith("```")) return null

    // Get metadata from the yaml embed at the top of the md file
    let contentAndMetadata = content.split(/^```$/m)
    let metadataLines = contentAndMetadata.splice(0, 1)[0].split("\n")
    metadataLines.splice(0, 1)
    content = contentAndMetadata.join("```")

    // Render emojis in content
    let emoteMatches = [...new Set(content.match(/:\w+:/g))]
    emoteMatches?.forEach(m => {
        let name = m.replaceAll(":", "")
        if (Object.keys(nameToEmoji).includes(name)) content = content.replaceAll(m, nameToEmoji[name])
    })

    // Compile all of the data (except ghdata, which is fetched when a blogpost is clicked), and return
    let blogpost : BlogPost = {
        content: content,
        sourcelink: `https://github.com/${consts.REPO}/blob/${consts.BLOG_BRANCH}/${path}.md`,
        thumbnail: rawUrl+".png",

        metadata: parseYaml(metadataLines.join("\n"))
    }
    return blogpost
}

export const toggleScroll = (enable : boolean) => { // Toggle the ability to scroll the page vertically
    let container : HTMLElement | null = document.querySelector("#container")
    if (!container) return

    if (enable) {
        document.body.classList.remove("overflow-y-hidden", "touch-none")
        container.classList.remove("overflow-y-hidden", "touch-none")
        return
    }
    
    document.body.classList.toggle("overflow-y-hidden")
    document.body.classList.toggle("touch-none")
    container.classList.toggle("overflow-y-hidden")
    container.classList.toggle("touch-none")
}
export const navigateCleanup = () => { // Cleanup stores and unlock page after navigation
    popupOpenedBy.set(null)
    contextMenuOpenedBy.set(null)
    closeBlogpost(false)

    toggleScroll(true)
}

export const openBlogpost = (id: string) => { // Open a blogpost on the blog page
    openedBlogPost.set(id)
    history.pushState("", document.title, window.location.pathname + "?id="+id)
}
export const closeBlogpost = (scrollToTop: boolean) => { // Close a blogpost
    openedBlogPost.set(null)
    removeParams()
    document.title = "Modern Modpacks"

    if (scrollToTop) setTimeout(() => {scrollTo(0, 0)}, 300)
}
export const canDeleteComment = (user: string, author: string) : boolean => {
    return consts.BLOG_ADMINS.includes(user) || author==user
}