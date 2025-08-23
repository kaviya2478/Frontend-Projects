import React from "react";

const MovieCard =({title,rating}) =>{
    return(
        <div className="">
            <h2>{title}</h2>
            <p>Rating:{rating}</p>
        </div>
    );
};

export default MovieCard;