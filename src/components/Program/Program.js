import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Logo1 from './1.jpeg';
import Logo2 from './2.jpeg';
import Logo3 from './3.jpeg';
import Logo4 from './4.jpeg';
import Logo5 from './5.jpeg';
import Logo6 from './6.jpeg';
import Logo7 from './7.jpeg';
import Logo8 from './8.jpeg';
import './Program.css';
import {Link} from 'react-scroll';
import Footer from '../Footer';

 

function Program() {
  
    return (
      <div className="program">
      <div className="container d-flex justify-content-center">
       
      <div className="program-carousel">
   <Carousel fade controls={true} pause='hover' interval={1000}>
  <Carousel.Item >
   <Link activeClass="active" to="detail-1" spy={true} smooth={true}>
  <img className="carousel-img d-block w-100"  src={Logo1} alt=" "/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Hello From First Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>

  <Carousel.Item>
  <Link activeClass="active" to="detail-2" spy={true} smooth={true}>
  <img className="carousel-img  d-block w-100" src={Logo2} alt=" "/>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Hello From Second Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item>
  <Link activeClass="active" to="detail-3" spy={true} smooth={true}>
  <img className="carousel-img  d-block w-100" src={Logo3} alt=" "/>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Hello From Third Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item>
  <Link activeClass="active" to="detail-4" spy={true} smooth={true}>
  <img className="carousel-img  d-block w-100" src={Logo4} alt=" "/>

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Hello From Fourth Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item>
  <Link activeClass="active" to="detail-5" spy={true} smooth={true}>
  <img className="carousel-img  d-block w-100" src={Logo5} alt=" "/>

    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Hello From Fifth Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
  <Carousel.Item>
  <Link activeClass="active" to="detail-6" spy={true} smooth={true}>
  <img className="carousel-img  d-block w-100" src={Logo6} alt=" "/>

    <Carousel.Caption>
      <h3>Sixth slide label</h3>
      <p>Hello From Sixth Slide.</p>
    </Carousel.Caption>
</Link>
  </Carousel.Item>
  <Carousel.Item>
  <Link activeClass="active" to="detail-7" spy={true} smooth={true}>
  <img className=" carousel-img d-block w-100" src={Logo7} alt=" "/>

    <Carousel.Caption>
    
      <h3>Seventh slide label</h3>
      <p>Hello From Seventh Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>

  <Carousel.Item>
  <Link activeClass="active" to="detail-8" spy={true} smooth={true}>
  <img className=" carousel-img  d-block w-100"   src={Logo8} alt=" "/>

    <Carousel.Caption>
      <h3>Eigth slide label</h3>
      <p>Hello From Eigth Slide.</p>
    </Carousel.Caption>
    </Link>
  </Carousel.Item>
</Carousel>
</div>



        </div>
        <div class="container">
          <div id="detail-1" class="detail-section">
<h1 >Detail 1</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
          </div>
          <div id="detail-2" class="detail-section">
<h1>Detail 2</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
          <div id="detail-3" class="detail-section">
<h1>Detail 3</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="detail-4" class="detail-section">
<h1>Detail 4</h1>
<p>llLorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="detail-5" class="detail-section">
<h1>Detail 5</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="detail-6" class="detail-section">
<h1>Detail 6</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="detail-7" class="detail-section">
<h1>Detail 7</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="detail-8" class="detail-section">
<h1>Detail 8</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i
  n culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
</div>
<Footer />
</div>
    )
}

export default Program
