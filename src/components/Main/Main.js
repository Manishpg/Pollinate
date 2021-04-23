import React from 'react'
import Image from './card-Photo.png';
import './Main.css';
import Circle from './Circle';
import CashLogo from './money.png';
import womanLogo from './woman.png';
import leafLogo from './leaves.png';
import donationLogo from './donation.png';
import pollinateLogo from './pollinate-header.jpeg';
import Section from '../Section/Section';

function Main() {
    return (
        <div>
          <div className="header">
          We empower women as leaders of change to distribute products that improve health, save time and save money for the world’s most neglected communities.
          </div>
          <div class="contain">
          <div class="row">
    <div class="col-12 col-md-4">

    <div class="card">
  <h5 class="card-header">Why we exist</h5>
  <div class="card-body">
    <h5 class="card-title">Gender inequality</h5>
    <p class="card-text">Gender inequality exacerbates the impact of poverty on women and millions of women lack access to opportunities, financial independence and decision making.</p>
   
  </div>
</div>

<div class="sec-card card">
  <div class="card-body">
    <h5 class="card-title">Poverty</h5>
    <p class="card-text">When you spend your days surviving, how do you find the time to escape poverty? 256 million people
    <a className="link" href="#">  live on less than $US1.90 </a> a day in India and Nepal, trapped in intergenerational poverty cycles.</p>
   
  </div>
</div>

<div class="sec-card card">
  <div class="card-body">
    <h5 class="card-title">Energy Access</h5>
    <p class="card-text">Access to clean, reliable, affordable energy is key to improving quality of life, protecting the environment and driving economic development. Simply connecting to the grid does not solve energy poverty.</p>
   
  </div>
</div>
    </div>


    <div class="col-12 col-md-4">
    <div class="card">
  <h5 class="card-header">What we do</h5>
  <div class="card-body">
    <h5 class="card-title">Leave poverty behind</h5>
    <p class="card-text">We identify, train and develop local women entrepreneurs who serve hard to reach families living on less than US$1.90 a day.
    <a className="link" href="#">  Our reports </a> share details of our approach, projects and impact.</p>
   </div>
</div>

<div class="sec-card card" >
  <img src={Image} height="200px" class="card-img-top" alt="Pollinate Photo" />
  <div class="card-body">
    <h5 class="card-title">Join me in bridging the digital divide; a Message from Pollinate Group CEO Sujatha Ramani</h5>
    <h6 class="card-subtitle mb-2 text-muted">November 25, 2020</h6>
    <p class="card-text">A message from Pollinate Group CEO</p>
    <a className="link card-text" href="#">  Read More »</a>
  </div>
</div>

    </div>
    <div class="col-12 col-md-4">
    <div class="card">
  <h5 class="card-header">Who we are</h5>
  <div class="card-body">
    <h5 class="card-title">We’re no fan of the status quo</h5>
    <p class="card-text">It’s no longer okay to ignore the obstacles that stop millions of women and their families from living a better life. That’s why our team are relentlessly focused on serving the communities nobody else will. Get to know
    <a className="link" href="#"> our story.</a> </p>
  </div>

  <div class="card-body">
    <h5 class="card-title">Join Us</h5>
    <p class="card-text">The Pollinate Group family come from a range of backgrounds and continents and cultures Plus we’re a fun bunch! Our career opportunities span India, Nepal and Australia.</p>
  </div>

  
</div>
    </div>
  </div>
</div>
<div className="impact">

<h3 >Pollinate Group impact snapshot</h3>
<p>In addition to this snapshot we evaluate measures such as confidence level, income growth and the financial independence of women in our network.</p>

<div className="row">
    <div class="col-12 col-md-3 circle-1">
<Circle number="697,000" title="People reached" icon ={donationLogo} />
    </div>
    <div class="col-12 col-md-3 circle-2">
    <Circle number="905" title="Women trained" icon ={womanLogo} />
    </div>
    <div class="col-12 col-md-3 circle-3">
    <Circle number="US$23m" title="Money saved by customers" icon ={CashLogo} />
    </div>
    <div class="col-12 col-md-3 circle-4">
    <Circle number="90,000" title="Tonnes CO2 emissions saved" icon ={leafLogo} />
    </div>
    
</div>
<div className="impact-btn text-center">
  <button className=" btn btn-dark">Learn about our impact</button>
</div>
</div>

<img  className="img-header" src={pollinateLogo} />



<Section />
        </div>
    )
}

export default Main
