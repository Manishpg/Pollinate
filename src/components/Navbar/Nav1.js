import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './pollinate-logo.png';

import {Link} from 'react-router-dom';


function Nav1() {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor:"#b1a1a1"}}>
  <Navbar.Brand ><Link to="/"><img src={Logo} width="200px"/> </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="/program" className="nav-item"><Link className="nav-link" to="/program" style={{fontWeight:"bolder",color:"#01aeae",textAlign:"center"}}>Programs</Link></Nav.Link>
      <Nav.Link href="/teams" className="nav-item"><Link className="nav-link" to="/teams" style={{fontWeight:"bolder",color:"#01aeae",textAlign:"center"}}>Team</Link></Nav.Link>
      <Nav.Link href="/about-us" className="nav-item"><Link className="nav-link" to="/about-us" style={{fontWeight:"bolder",color:"#01aeae",textAlign:"center"}}>About Us</Link></Nav.Link>
      <Nav.Link href="/contact-us" className="nav-item"><Link className="nav-link" to="/contact-us" style={{fontWeight:"bolder",color:"#01aeae",textAlign:"center"}}>Contact Us</Link></Nav.Link>
    {/* <Nav.Link href="/program" className="nav-item"><p className="nav-link">Programs</p></Nav.Link>
      <Nav.Link href="/teams" className="nav-item"><p className="nav-link">Team</p></Nav.Link>
      <Nav.Link href="/about-us" className="nav-item"><p className="nav-link">About Us</p></Nav.Link>
      <Nav.Link href="/contact-us" className="nav-item"><p className="nav-link">Contact Us</p></Nav.Link>  */}
      <Nav.Link>
      <form className="donate-btn-form ">
         <button class="donate-btn btn " type="submit">Donate now</button>
      </form>
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Nav1
