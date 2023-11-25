import { ProfileContainer, ProfileInfos } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Profile(){


    return(
        <ProfileContainer>
            <img src='https://github.com/gabrielpramalho.png' alt="" />

            <ProfileInfos>
                <header>
                    <strong>Gabriel Ramalho</strong>

                    <a href="https://github.com/gabrielpramalho" target="_blank">
                        Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>
                <div>
                    <p>Passionate web developer seeking elegant solutions to complex problems. CS graduate | 2 years of web development experience Let's code the future together!</p>
                </div>
                <footer>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>gabrielpramlaho</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBuilding}/>
                        <span>MKX E-commerce</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        <span>22 seguidores</span>
                    </div>
                </footer>
            </ProfileInfos>
        </ProfileContainer>
    )
}