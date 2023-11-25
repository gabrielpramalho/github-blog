import styled from "styled-components";

export const BlogContainer = styled.div`
    max-width: 864px;
    margin: auto;
    padding: 0 1rem;
`

export const PostsContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    margin: 3rem 0;

    a{
        text-decoration: none;
    }
`