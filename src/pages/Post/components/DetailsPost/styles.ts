import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;

    margin-top: -5rem;
    margin-bottom: 2.5rem;

    gap: 2rem;

    width: 100%;

    padding: 2rem;

    background-color: ${props => props.theme["blue-700"]};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 1.25rem;

        a{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            font-size: 0.75rem;
            font-weight: bold;
            line-height: 1.6;
            text-transform: uppercase;

            color: ${props => props.theme["blue-300"]};

            text-decoration: none;

            &:hover{
                text-decoration: underline;
            }

        }
    }

    >div{
        margin-bottom: 0.5rem;

        strong{
            font-size: 1.5rem;
            line-height: 1.3;
            color: ${props => props.theme["gray-100"]};
        }
    }

    footer{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 1.5rem;

        > div{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            span{
                color: ${props => props.theme["gray-200"]};
                line-height: 1.6;
            }

            svg{
                color: ${props => props.theme["blue-200"]};
                font-size: 1.125rem;
            }
        }
    }
`;