import React from 'react';
import { Wrapper, Content } from './Grid.styles';




//in this component we are going to destructurize two props, header and children
//children prop are the elements that are nested inside this component where we use it
const Grid = ({ header, children }) => {

    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
};



export default Grid;