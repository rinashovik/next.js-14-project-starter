
import { posts } from "./data"

export async function GET() {
    return Response.json (posts);
    
}

export async function POST(request: Request) {

    const post = await request.json();
    const newPost = {
        id: posts.length +1,
        text: post.text,
    };
    posts.push(newPost);
    return new Response(JSON.stringify(newPost), {
        headers: {
            "content-Type": "application/json",
        },
        status: 201,
    });
    }