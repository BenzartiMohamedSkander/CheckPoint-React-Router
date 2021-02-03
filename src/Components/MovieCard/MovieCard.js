import React from 'react'
import './MovieCard.css'
import Rate from '../Rate/Rate'
import {Link } from "react-router-dom";



function MovieCard({movie : {id,name, image, date, description, rating }},key) {
 

    return (
        <div>
            

            <Link to={`/${id}`}>

            <div className="container" >
            

               <div className="card" style={{width:"275px", height:"680px"}}>
                   <Rate rating={rating}/>
                 <img className="card-img-top" src={image} alt="Card" style={{width:"100%", height:"55%"}}/>
                 <div className="card-body">
                   <h4 className="card-title">{name}</h4>
                   <h6 className="card-title">{date}</h6>
                   <p className="card-text">{description}</p>
                   <a href="#" className="btn btn-primary bottom" >Watch Movie</a>
                   <br/>      <br/>
                 </div>
               </div>
               <br/>

                <p> </p>
             </div>





</Link>












        </div>
    )
}

export default MovieCard
