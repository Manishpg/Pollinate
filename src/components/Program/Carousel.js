import React from 'react'
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
import {Link} from 'react-router-dom';

function CarouselCode() {
    return (
        <div>
            <div className="program-carousel">
   <Carousel fade controls={true} pause='hover' interval={1000}>
  <Carousel.Item onClick={() => window.location.replace("/#slide1")}>
  
  <img className="d-block w-100" width={900} height={500}  src={Logo1} alt=" "/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Hello From First Slide.</p>
    </Carousel.Caption>
    
  </Carousel.Item>

  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo2} alt=" "/>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Hello From Second Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo3} alt=" "/>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Hello From Third Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo4} alt=" "/>

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Hello From Fourth Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo5} alt=" "/>

    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Hello From Fifth Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo6} alt=" "/>

    <Carousel.Caption>
      <h3>Sixth slide label</h3>
      <p>Hello From Sixth Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo7} alt=" "/>

    <Carousel.Caption>
      <h3>Seventh slide label</h3>
      <p>Hello From Seventh Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo8} alt=" "/>

    <Carousel.Caption>
      <h3>Eigth slide label</h3>
      <p>Hello From Eigth Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div class="container">
          <div class="detail-section"  id="slide1">
<h1>Deatil 1</h1>
          </div>
          <div class="detail-section">
<h1>Deatil 2</h1>
          </div>
</div>

        </div>
    )
}

export default CarouselCode;
