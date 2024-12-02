import {comments} from './data'
// import {NextRequest} from "next/server"

export async function GET(req){
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('query')
    console.log(typeof query)
    let filtered =query ? comments.filter((item)=> item.text.includes(query)) : comments;
    console.log(filtered + "***")
    return Response.json(filtered)
}

export async function POST(req) {
    const comment =await req.json();

    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };

    comments.push(newComment);

    return new Response(
        JSON.stringify(newComment),{ 
            headers: { 
                'Content-Type': 'application/json' 
            },
            status : 201 
        }
    );
}