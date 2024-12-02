import { comments } from "../data";

export async function GET(_req,{ params }) {
    let commentId = parseInt(params.id, 10); // Parse the ID to an integer
    const comment = comments.find((comment) => comment.id === commentId);

    if (!comment) {
        return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
    }

    return Response.json(comment);
}

export async function PATCH(req,{params}){
    let body = await req.json()
    let bodyText = body.text
    console.log(bodyText +"***")
    let commentId = parseInt(await params.id,10)

    const index = comments.findIndex((comment) => comment.id === commentId)
   
    if(!index)
        return new Response(JSON.stringify({error:"Comment not found"},{status:400}))
    
    comments[index].text = bodyText;

    return Response.json(comments[index])
}


export async function DELETE(req,{params}){
    let commentId = parseInt(await params.id)
    let index = comments.findIndex((item)=> item.id == commentId);
 
    let deletedComment = comments[index]
    comments.splice(index,1)

    return Response.json(deletedComment)
}
