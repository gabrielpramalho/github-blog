import { useContext } from "react";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { BlogContainer, PostsContainer } from "./styles";
import { BlogContext } from "../../contexts/BlogContext";

export function Blog(){

    const { posts } = useContext(BlogContext)

    return (
        <BlogContainer>
            <Profile />

            <SearchForm />


            <PostsContainer>
                {
                    posts.map( post => <PostCard key={post.number}  post={post} /> )
                }
            </PostsContainer>

        </BlogContainer>
    )
}