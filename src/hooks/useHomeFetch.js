import { useState, useEffect, useRef } from 'react';
import API from "../API";




//it's always good to have some initial state if we want to reset something and we can pass it to useState()
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};


//we are exporting this function 
export const useHomeFetch = () => {

    //isLoadingMore flag to know do we have to load more movies
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    //searchTerm inside the searchBar
    const [searchTerm, setSearchTerm] = useState("");
    //state for holding all the movies
    const [state, setState] = useState(initialState);
    //state for loading
    const [loading, setLoading] = useState(false);
    //state for error
    const [error, setError] = useState(false);




    //creating a function that will fetch all movies
    //since we are fetching movies from an API we need to use async function and pass in page number and user's searchTerm
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            //since we are catching it we need to setError and Loading to true
            setError(false);
            setLoading(true);
            //exported function from API file, it requires two params and we get those from this function's params
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);

            //setting the state of movies
            //...movies -> takes all the objects inside the movies array and puts them inside this object we are returning, and it will append new movies on a previous state
            setState(previousState => ({
                ...movies,
                results: page > 1 ? [...previousState.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    };



    //initial and search
    //we want to trigger the useEffect when the searchTerm changes that why it's depending on it
    //we have our fetching method now we have to call it inside useEffect, it requires a function as a param
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);



    //if we don't want to load more we are just gonna return, otherwise we are going to load more 
    //this will be triggered everytime isLoadingMore flag is changed
    useEffect(() => {
        if (!isLoadingMore) return false;
        fetchMovies(state.page + 1, searchTerm);

        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);


    //returning the object with these properties
    return { state: state, loading: loading, error: error, searchTerm: searchTerm, setSearchTerm: setSearchTerm, setIsLoadingMore: setIsLoadingMore };
};