import React from 'react'
import './Circle.css';

function Circle(props) {
    return (
        <div className="circle">
            {/* <h1 className="icon"><i class={props.icon}></i></h1> */}
           
          <img src={props.icon} className="icon"/>
           
            
            <p className="title">{props.title}</p>
            <h1 className="number">{props.number}</h1>
        </div>
    )
}

export default Circle
