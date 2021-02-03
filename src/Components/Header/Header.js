import React from 'react'
import Rate from '../Rate/Rate'

function Header({setSearchInput,setRateValue,rateValue}) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
     
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
      onChange={e=>setSearchInput(e.target.value)}/>
       <Rate setRateValue={setRateValue} rating={rateValue}/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </form>
  
  </div>
</nav>
        </div>
    )
}

export default Header
