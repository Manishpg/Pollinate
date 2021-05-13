import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Navbar.css';
import Logo from './pollinate-logo.png';
import Dropdown from 'react-bootstrap/Dropdown'
import main from './main.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-header ">
  <div class="container-fluid">
  
    <Link class="navbar-brand" to="/"><img src={Logo} width="200px"/></Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-end"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <div class="navbar-collapse justify-content-center">
      <ul class="navbar-nav  mb-2 mb-lg-0 ">
      
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/program"  style={{color:"#f9f3f3"}}>Programs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/teams"  style={{color:"#f9f3f3"}}>Team</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about-us"  style={{color:"#f9f3f3"}}>About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact-us"  style={{color:"#f9f3f3"}}>Contact Us</Link>
        </li>
       
 </ul>
 </div>
 <form className="donate-btn-form ">
         <button class="donate-btn btn " type="submit">Donate now</button>
      </form>
    </div>
   
  </div>
</nav>

{/* <img class="img-fluid" src={main} />
<div className="main-content">
    <p>Creating a world where women are </p>
    <p>equipped to lead their communities </p>
    <p>out of poverty.</p>
<button className="btn donate-now-btn">Donate Now</button>
</div> */}
       </div>
    )
}

export default Navbar
