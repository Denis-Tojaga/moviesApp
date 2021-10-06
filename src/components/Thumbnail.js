import React from 'react';
import { Image } from './Thumbnail.styles';






const Thumbnail = ({ image, movieId, clickable }) => {
    return (
        <div>
            <Image src={image} alt="movie-thumbnail" />
        </div>
    );
};



export default Thumbnail;