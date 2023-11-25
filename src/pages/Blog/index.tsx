import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { BlogContainer, PostsContainer } from "./styles";

export function Blog(){
    return (
        <BlogContainer>
            <Profile />

            <SearchForm />


            <PostsContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PostsContainer>

        </BlogContainer>
    )
}