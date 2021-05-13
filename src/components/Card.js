import React from 'react'

function Card(props) {
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            
            <div class="card m-3 shadow-lg p-3 mb-5 bg-white rounded" style={{maxWidth:"20em",borderRadius:"20px",}}>
  <h5 class="card-header text-center">{props.heading}</h5>
  <div class="card-body">
    <h5 class="card-title text-center">{props.description}</h5>
 
    <p class="card-text text-center">{props.body}</p>
   
  </div>
</div>
            
        </div>
    )
}

export default Card
