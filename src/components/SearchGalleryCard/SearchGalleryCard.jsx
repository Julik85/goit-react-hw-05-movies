import React from "react";
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom";

import { GalleryItem } from "./SearchGalleryCard.styled";

export const SearchGalleryCard = ({movie}) =>{
    const location = useLocation();

    const {title, id, poster_path} = movie;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <GalleryItem>
            <Link to={location.pathname === '/' ? `movies/${id}` : `${id}`} state ={{from: location}} >
            <img className=" movie-poster"
            src={poster}
            alt={title}
            width="300"
            height="450"/>
            <h3>
                {title}
            </h3>
            </Link>
        </GalleryItem>
    )
} 

SearchGalleryCard.propTypes = {movie: PropTypes.object.isRequired};
