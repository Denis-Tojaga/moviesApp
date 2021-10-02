//if we want to use styles we need to import styled method from this library
import styled from "styled-components";


//exporting component Wrapper that going to be a div with this implemented styles
export const Wrapper = styled.div`
    background: var(--darkGray);
    padding: 0 20px;
`;


export const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;


export const LogoImg = styled.img`
    width:200px;

    @media screen and (max-width: 500px){
        width:150px;
    }
`;




export const TMDBLogoImg = styled.img`
    width:100px;

    @media screen and (max-width:500px){
        width:80px;
    }
`;