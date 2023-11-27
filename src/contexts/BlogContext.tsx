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
}

interface BlogProviderProps{
    children: ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);


export function BlogProvider({children}: BlogProviderProps){
    const [profile, setProfile] = useState<ProfileInfos>()

    async function fetchProfile(){
        const response = await api.get('users/gabrielpramalho')
    
        setProfile(response.data)

    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return(
        <BlogContext.Provider
            value={{
                profile,
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}