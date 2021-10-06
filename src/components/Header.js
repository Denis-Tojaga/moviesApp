//by importing this we are ensuring that the component is going to use react
import React from "react";

//importing images, make sure to write down the extension otherwise it won't work
import RMDBLogo from "../images/react-movie-logo.svg"
import TMDBLogo from "../images/tmdb_logo.svg";


//importing styles for components that are going to be inside header
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";



const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="rmdb-logo" />
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
);



//in this case we don't have a named export, we export it as a default
export default Header;








