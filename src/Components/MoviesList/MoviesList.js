import React from 'react'

import Trailer from '../Trailer/Trailer'
import './MoviesList.css'

import { Route, Switch } from "react-router-dom";
import MovieCard from '../MovieCard/MovieCard';
import TestComponent from '../TestComponent';

function MoviesList({movies}) {
 
    return (
        <div className="moviesList">
            {
                movies.map((movie,i) =>(
                <MovieCard movie={movie}  key={i}/>) )
            }









        </div>



    )
}

export default MoviesList
