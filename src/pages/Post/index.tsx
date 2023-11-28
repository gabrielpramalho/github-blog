import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { useCallback, useEffect, useState } from "react"
import { PostContainer } from "./styles";
import { DetailsPost } from "./components/DetailsPost";
import Markdown from "react-markdown";

interface Post{
    body: string;
    title: string;
    user: string;
    created_at: string;
    comments: number;
    html_url: string;
}


export function Post(){

    const [post, setPost] = useState<Post>()
    
    const { id } = useParams()

    const fetchPost = useCallback(async () => {
        const response = await api.get(`repos/gabrielpramalho/github-blog/issues/${id}`)

        setPost(response.data)
    }, [id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    
    console.log(post)
    return(
        <PostContainer>

            <DetailsPost 
                comments={post!.comments} 
                title={post!.title} 
                created_at={post!.created_at} 
                html_url={post!.html_url}
                user={post!.user}
            />

            <Markdown>
                {post?.body}
            </Markdown>
        </PostContainer>
    )
}