import React from 'react'
import './Rate.css'

function Rate({rating,setRateValue}) {
let arr=[]

for (let i=0; i<5; i++){
    if(i <rating){
        arr.push(

<span key={i}
          className="rating"
          style={{ cursor: "pointer" }}
          
          onClick={()=>setRateValue(i+1)}
        >
          ★
        </span>
      );}
else  
arr.push(
    <span key={i}
      className="rating"
      style={{ cursor: "pointer" }}

      onClick={()=>setRateValue(i+1)}
      
    >
      ☆
    </span>
  );
        
    
}



    return (
        <div>
            {arr}
        </div>
    )
}

export default Rate
