import type { Comment } from "$lib/scripts/interfaces"
import serverConsts from "./serverConsts"

export const addBlogpostToDB = async (id: string) => {
    await serverConsts.DB.from("blogs").insert({id: id, views: 0, lastip: "", comments: []})
}
export const getBlogpostComments = async (id: string) : Promise<Comment[]> => {
    let comments = (await serverConsts.DB.from("blogs").select("comments").eq("id", id)).data

    if (!comments?.length) return []
    return comments[0].comments
}