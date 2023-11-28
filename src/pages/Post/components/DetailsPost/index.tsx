import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Details, DetailsContainer } from "./styles";
import { Link } from "react-router-dom";


interface DetailsPostProps{
    title: string;
    user: string;
    created_at: string;
    comments: number;
    html_url: string;
}


export function DetailsPost({title,  user, created_at, comments, html_url}: DetailsPostProps){
    return(
        <DetailsContainer>

            <Details>
                <header>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </Link>
                    <a href={html_url} target="_blank">
                        Ver no Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>
                <div>
                    <strong>{title}</strong>
                </div>
                <footer>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>{user}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay}/>
                        <span>{created_at}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <span>{comments} comentários</span>
                    </div>
                </footer>
            </Details>
        </DetailsContainer>
    )
}