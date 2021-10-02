import React from 'react';
//here we import the styles for this component that we made in other file
import { Wrapper, Content, Text } from './HeroImage.styles';



//this component is taking arguments (NOTE! Arguments shall not be changed inside the component that is accepting them)
//instead of this destructurizing we can use props and then extract stuff we need from it
const HeroImage = ({ image, title, text }) => {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>

    );
};


export default HeroImage;