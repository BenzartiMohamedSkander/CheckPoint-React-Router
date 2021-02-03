import './App.css';
import {moviesData} from './Components/MoviesData';
import { Route, Switch } from "react-router-dom";


import React, { useState } from "react";


import Main from './Components/Main'
import Header from './Components/Header/Header'
import TestComponent from './Components/TestComponent';
import Trailer from './Components/Trailer/Trailer';

function App() {
  const [movies, setMovies] = useState(moviesData);  

const [searchInput, setSearchInput] = useState("");
const [rateValue, setRateValue] = useState(0);

const addNewMovie=(newMovie)=>{setMovies([...movies,newMovie])}

  return (
    <div className="App">
      {/* <Header setSearchInput={setSearchInput} setRateValue={setRateValue} rateValue={rateValue}/>
  
 <Main movies={movies.filter((movie) =>
   (movie.name.toLowerCase().includes(searchInput.toLowerCase().trim()) && (movie.rating >= rateValue)) ) }    addNewMovie={addNewMovie}
 /> */}



<Route exact path="/" render={()=><Header setSearchInput={setSearchInput} setRateValue={setRateValue} rateValue={rateValue}/>}/>

        <Route exact path="/" render={ ({match}) => <Main movies= {movies.filter((movie) =>
   (movie.name.toLowerCase().includes(searchInput.toLowerCase().trim()) && (movie.rating >= rateValue)) ) } match={match}  />} />
     


      <Route path="/:movieId"
render={ (props) => <Trailer movies= {movies} {...props} />}/>


     
     {/* <Route path="/movies/:movieName"
 component={TestComponent}/>  */}
    </div>
  );
}

export default App;
