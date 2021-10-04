import React from "react";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import Button from "./Button";
//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";



//image
import NoImage from "../images/no_image.jpg";



const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();

    //we want to check if we have some results in order to show home
    return (
        <>
            {state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> : null}

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? "Search results: " : "Popular movies"}>
                {state.results.map((movie) => {
                    //so for each movie we are rendering a thumbnail
                    //we check if there's a poster_path then we grab that picture, otherwise we dont send picture
                    return <Thumbnail key={movie.id}
                        clickable={true}
                        image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                        movieId={movie.id} />
                })}
            </Grid>

            {/*If we are loading something we will show the spinner otherwise no*/}
            {loading && <Spinner />}

            {/*Checking if we are on the last page of the list of movies and that we aren't loading anything then we want to show the button */}
            {state.page < state.total_pages && !loading ? <Button text="Load more" /> : null}

        </>
    );
};



export default Home;
