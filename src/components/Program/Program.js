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

 

function Program() {
    return (
        <div style={{marginTop:"70px"}}>
   <Carousel fade controls={true} pause='hover' interval={1000}>
  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo1} alt=" "/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Hello From First Slide.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <img className="d-block w-100" width={900} height={500}  src={Logo2} alt=" "/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Hello From First Slide.</p>
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
    )
}

export default Program
