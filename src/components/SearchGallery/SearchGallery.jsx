import React from "react";
import { Gallery } from "./SearchGallery.styled";
import { SearchGalleryCard } from "components/SearchGalleryCard/SearchGalleryCard";



export const SearchGallery = ({ movies, pageTitle}) => {
 
    return(
        <>
        <h1 className="page-title">{pageTitle}</h1>
        <Gallery>
            {movies.map(movie => (
                <SearchGalleryCard key={`${movie.id}`} movie={movie} />
            ) )}
        </Gallery>
        </>
    )
}