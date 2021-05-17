import React from 'react'
import Footer from './Footer'
import {dummy} from '../dummy';
import Card from './Card';


function About() {

    return (
    <div>
   
        <div style={{marginTop:"70px",minHeight:"303px"}}>
           <h1 className="text-center"> This is About Section.</h1>

    <div>

{
    dummy.map((item,key)=> (
<Card key={key} heading={item.heading}  description={item.description} body ={item.body} />

))

}
 
   

    </div>
        </div>
        </div>
    )
}

export default About
