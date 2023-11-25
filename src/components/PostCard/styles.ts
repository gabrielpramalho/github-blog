import styled from "styled-components";

export const CardContainer = styled.article`
    padding: 2rem;

    background-color: ${props => props.theme["blue-600"]};
    border: 2px solid transparent;


    border-radius: 10px;

    &:hover{
        border: 2px solid ${props => props.theme["blue-200"]}
    }




    header{
        display: flex;

        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;

        h3{
            font-size: 1.25rem;
            line-height: 1.6;
            font-weight: bold;

            color: ${props => props.theme["gray-100"]};
        }

        time{
            font-size: 0.875rem;
            line-height: 1.6;

            white-space: nowrap;

            color: ${props => props.theme["blue-100"]};

        }
    }


    div{

        margin-top: 1.25rem;

        p {
            overflow: hidden; 
            text-overflow: ellipsis; 
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical; 

            color: ${props => props.theme["gray-300"]};

        }
    }
`