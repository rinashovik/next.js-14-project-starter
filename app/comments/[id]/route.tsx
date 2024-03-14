import { posts } from "../data"

export async function GET(_request: Request,
     {params}: {params: {id: string} }
    ) {

        const post = posts.find((post) =>
         post.id === parseInt(params.id))
    return Response.json(post);
    
}

export async function PATCH(request: Request,
    {params}: {params: {id: string} }
 
    ) {

        const body = await request.json();

        const {text} = body

        const index = posts.findIndex(post => 
            post.id === parseInt(params.id)
        );
        posts[index].text = text;
    return Response.json (posts[index]);
    
}


export async function DELETE(request: Request,
    {params}: {params: {id: string} }
    ) {

        const index = posts.findIndex(
            post =>  post.id === parseInt(params.id)
        );
const deletedPost = posts[index];
posts.splice(index, 1);

return Response.json(deletedPost);
        }