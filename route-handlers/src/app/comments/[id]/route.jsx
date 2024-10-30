import { comments } from "../data"
export async function GET(_req,{params}){

    const comment =comments.find(async (comment) => comment.id === parseInt(await params.id))
    return Response.json(comment)
}