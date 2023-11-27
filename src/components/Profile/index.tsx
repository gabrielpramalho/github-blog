import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react'

import { ProfileContainer, ProfileInfos } from "./styles";
import { BlogContext } from "../../contexts/BlogContext";

export function Profile(){

    const { profile } = useContext(BlogContext)


    return(
        <ProfileContainer>
            <img src={profile?.avatar_url} alt="" />

            <ProfileInfos>
                <header>
                    <strong>{profile?.name}</strong>

                    <a href={profile?.html_url} target="_blank">
                        Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>
                <div>
                    <p>{profile?.bio}</p>
                </div>
                <footer>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>{profile?.login}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBuilding}/>
                        <span>{profile?.company}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        <span>{profile?.followers} seguidores</span>
                    </div>
                </footer>
            </ProfileInfos>
        </ProfileContainer>
    )
}