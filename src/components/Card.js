import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            
            <div class="card m-3 shadow-lg p-3 mb-5 bg-white rounded" style={{maxWidth:"35em",maxHeight:"25em",borderRadius:"20px",}}>
  <h5 class="card-header text-center" style={{backgroundColor:"#ddc305"}}>{props.heading}</h5>
  <div class="card-body">
    <h5 class="card-title text-center">{props.description}</h5>
 
    <p class="card-text text-center">{props.body}</p>
   
  </div>
</div>
            
        </div>
    )
}

export default Card
