//the useState is going to be used for controlled component, this means the we are gonna have an input field but it's going to be controlled with React
//the input field is going to be based on the value inside state
//useEffect is going to be used to trigger when this local state changes and then we are going to update the search term

import React, { useState, useEffect, useRef } from 'react';
//styles
import { Wrapper, Content } from './HeroImage.styles';
//image
import searchIcon from "../images/search-icon.svg";



//this component is taking one prop and that is the method for setting up the searchTerm that has to be used inside of Home screen
const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState("");

    const initial = useRef(true);

    //initial.current is holding the true value now
    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }

        //this will trigger after 500ms
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        //this one doesn't trigger until this render has finished
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);



    //input has an onChange method that triggers an event when the content inside of an input changed
    //so then we need to call setState and take the value from inside that event we received inside the prop
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder="Search for a movie"
                    onChange={(event) => setState(event.currentTarget.value)}
                />
            </Content>
        </Wrapper>
    );
};


export default SearchBar;