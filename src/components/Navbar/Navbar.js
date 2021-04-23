import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Navbar.css';
import Logo from './pollinate-logo.png';
import Dropdown from 'react-bootstrap/Dropdown'
import main from './main.png';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    return (
        <div>
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-header ">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#"><img src={Logo} width="200px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-end"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {/* Dropdown */}
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Team</a>
        </li>
       
        {/* bootstrap Dropdown */}
        {/* <li class="nav-item dropdown">
		   <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Team  </a>
		    <ul class="dropdown-menu">
			  <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
		    </ul>
		</li> */}
        

        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      
    </div>
    <form class="d-flex">
         <button class="donate-btn btn " type="submit">Donate now</button>
      </form>
  </div>
</nav>

<img class="img-fluid" src={main} />
<div className="main-content">
    <p>Creating a world where women are </p>
    <p>equipped to lead their communities </p>
    <p>out of poverty.</p>
<button className="btn donate-now-btn">Donate Now</button>
</div>
       </div>
    )
}

export default Navbar
