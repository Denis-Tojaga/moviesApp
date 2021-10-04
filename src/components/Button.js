import React from 'react';
import { Wrapper } from './Button.styles';



const Button = ({ text, callbackFunction }) => {
    return (
        <Wrapper type="button" onClick={callbackFunction}>
            {text}
        </Wrapper>


    );
};



export default Button;