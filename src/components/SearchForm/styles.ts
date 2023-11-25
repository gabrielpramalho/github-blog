import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    margin-top: 4.5rem;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        span:first-child{
            font-size: 1.125rem;
            line-height: 1.6;
            font-weight: bold;

            color: ${props => props.theme["gray-200"]};
        }

        span:last-child{
            font-size: 0.875rem;
            line-height: 1.6;

            color: ${props => props.theme["blue-100"]};
        }
    }

    input{
            background: ${props => props.theme["blue-900"]};
            color: ${props => props.theme["gray-300"]};

            border: 1px solid ${props => props.theme["blue-500"]};
            padding: 0.75rem 1rem;

            border-radius: 6px;

            &::placeholder{
                color: ${props => props.theme["blue-200"]};
            }

            :focus{
                border-color: ${props => props.theme["blue-300"]};
            }

        }
`;