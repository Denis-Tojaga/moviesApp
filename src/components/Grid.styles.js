import styled from "styled-components";



export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin:0 auto;
    padding: 0 20px;

    h1{
        color: var(--medGray);
        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
        }
    }
`;




//with repeat we are repeating these columns and set them to auto-fill 
//minmax() stands for the minimum width each fragment can have, and when its bellow that value it removes one column from the grid
export const Content = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;



