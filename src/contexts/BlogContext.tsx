import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileInfos{
    name: string;
    followers: string;
    company: string;
    avatar_url: string;
    bio: string;
    login: string;
    html_url: string;
}

interface BlogContextType{
    profile: ProfileInfos | undefined
    posts: PostsInfo[]
    fetchSearch: (query: string) => Promise<void>
}

interface BlogProviderProps{
    children: ReactNode;
}

export interface PostsInfo{
    number: number;
    title: string;
    created_at: string;
}

export const BlogContext = createContext({} as BlogContextType);


export function BlogProvider({children}: BlogProviderProps){
    const [profile, setProfile] = useState<ProfileInfos>()

    const [posts, setPosts] = useState<PostsInfo[]>([])


    async function fetchProfile(){
        const response = await api.get('users/gabrielpramalho')
    
        setProfile(response.data)

    }
    async function fetchPosts(){
        
        const response = await api.get('repos/gabrielpramalho/github-blog/issues')
        
    
        setPosts(response.data)

    }

    async function fetchSearch(query: string) {
        const response = await api.get('search/issues', {
            params:{
                q: `${query} repo:gabrielpramalho/github-blog`
            }
        })

        setPosts(response.data.items)        
    }

    useEffect(() => {
        fetchProfile()
        fetchPosts()
    }, [])

    return(
        <BlogContext.Provider
            value={{
                profile,
                posts,
                fetchSearch,
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}