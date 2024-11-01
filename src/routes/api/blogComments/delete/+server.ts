import type { Comment } from "$lib/scripts/interfaces";
import { canDeleteComment, sendGithubApiRequestWithSetKey } from "$lib/scripts/utils";
import serverConsts from "$lib/server/serverConsts";
import moment from "moment";
import type { RequestHandler } from "./$types";
import consts from "$lib/scripts/consts";
import { addBlogpostToDB, getBlogpostComments } from "$lib/server/serverUtils";

// Remove comments from blogposts using blogpost ids and comment contents/timestamps
export const POST: RequestHandler = async ({ url, request }) => {
    let id = url.searchParams.get("id")
    let token = url.searchParams.get("token")
    let comment : Comment = await request.json()

    if (!id || !token || !comment) return new Response("-1", {status: 400})

    let user = await (await sendGithubApiRequestWithSetKey("user", true, token))?.json()
    if (!canDeleteComment(user.login, comment.author.name)) return new Response("-1", {status: 403})

    let comments = await getBlogpostComments(id)
    comments = comments.filter(c => !(c.content==comment.content && c.author.name==comment.author.name && c.timestamp==comment.timestamp))

    await serverConsts.DB.from("blogs").update({"comments": comments}).eq("id", id)
    return new Response("OK")
}