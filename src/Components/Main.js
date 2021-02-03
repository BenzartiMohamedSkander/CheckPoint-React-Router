import React from 'react'
import AddMovie from './AddMovie/AddMovie'
import MoviesList from './MoviesList/MoviesList'

function Main({movies,addNewMovie}) {
    return (
        <div>
            <MoviesList  movies={movies}/>

            <AddMovie addNewMovie={addNewMovie}/>
        </div>
    )
}

export default Main
