import React from 'react'

function Trailer({match,movies}) {

     var movie= movies.find(m => m.id == match.params.movieId);
    
    return (
    
     <div style={{width:"50%"}} className="card mb-3">
  <img src={movie.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <p className="card-text">{movie.description}</p>
    <p className="card-text"><small className="text-muted">{movie.date}</small></p>
  </div>
</div>
      
    )
}

export default Trailer
