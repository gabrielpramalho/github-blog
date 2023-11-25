import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;

    margin-top: -5rem;

    gap: 2rem;

    width: 100%;

    padding: 2rem;

    background-color: ${props => props.theme["blue-700"]};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    img{
        max-width: 9.25rem;
        border-radius: 8px;
    }

    svg{
        line-height: 0;
    }
`

export const ProfileInfos = styled.section`
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        padding-bottom: 0.5rem;

        strong{
            font-size: 1.5rem;
            line-height: 1.3;
            font-weight: bold;

            color: ${props => props.theme["gray-100"]};
        }

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

    > div{

        padding-bottom: 1.5rem;

        p{
            line-height: 1.6;
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
`