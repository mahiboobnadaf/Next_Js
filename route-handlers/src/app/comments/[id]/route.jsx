import { comments } from "../data"
export async function GET(_req,{params}){

    const comment = comments.find( (comment) => comment.id === parseInt(params.id))
    console.log(comment)
    return Response.json(comment)
}