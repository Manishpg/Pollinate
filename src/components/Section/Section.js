import React from 'react'
import Footer from '../Footer';
import './Section.css';
function Section() {


    return (
        <div className="hello">
            <div className="row">
            <div class="col-12 col-md-3">
            <h3>Leadership Impact</h3>
<p>The Leadership Impact Program immerses participants in our unpredictable and disruptive landscape, confronting some of the world’s biggest problems every day. Become a confident leader with self awareness built working through thought-provoking situations. Join us in Bangalore for an idea exchange like no other.</p>

    </div>
    <div class="col-12 col-md-3">
<h3>Social Innovation</h3>
<p>
Our Social Innovation Program will see you create, test and evaluate strategically aligned initiatives that have a direct impact on people living in neglected communities. Enter a multidisciplinary team and develop your benefit mindset, while learning how to drive meaningful change in your organisation or startup.
</p>
    </div>
    <div class="col-12 col-md-3">
    <h3>Student Fellowship</h3>
<p>
The Student Fellowship enables students from around the world to learn to co-manage economic, social and environmental performance through practical experiences. Differentiate yourself, and be better prepared to work with game-changing ideas in your studies and future career.
</p>
    </div>
    <div class="col-12 col-md-3">
<h3>Local Fellowship</h3>
<p>Our Local Fellowship sees Indian or Nepali nationals join one of our fast-paced programs. Participants will apply cultural and linguistic knowledge, while being exposed to new ways of working. Gain new connections and collaborate in a global team, learning how to manage social impact.</p>
    </div>
            </div>

            <div className="form">
               <h2>Love what we do?</h2>
               <p>Join in and we’ll share what’s happening on the ground every couple of months.</p>
           <div style={{display:"flex"}}>
           <input type="text" class="form-control name-input" placeholder="Name" /> 
           <input type="text" class="form-control country-input" placeholder="Country" />
           </div>
           <input type="email" class="form-control email-input" placeholder="Email" /> 
           
           <button class="form-btn">I'm In!</button>
           
            </div>
            <div className="footer">
               <div style={{backgroundColor:"#f6efeb"}}>
                   <div className="row">
                   <div className="col-12 col-md-2 " style={{marginTop:"50px"}}>
                       <ul className="list">
                       <li class="list-item">Why do exist</li>
  <li class="list-item">Poverty</li>
  <li class="list-item">Gender Inequality</li>
  <li class="list-item">Energy Access</li>
                       </ul>
                   </div>
                   <div className="col-12 col-md-2 " style={{marginTop:"50px"}}>
                   <ul className="list">
                       <li class="list-item">What we do</li>
  <li class="list-item">Impact</li>
  <li class="list-item">Impact models</li>
  <li class="list-item">Product</li>
  <li class="list-item">Report</li>
                       </ul>
                   </div>
                   <div className="col-12 col-md-2" style={{marginTop:"50px"}}>
                   <ul className="list">
                       <li class="list-item">About</li>
  <li class="list-item">Team</li>
  <li class="list-item">Blog</li>
  <li class="list-item">Careers</li>
  <li class="list-item">Asha Kiran</li>
  <li class="list-item">Kalpavriksha</li>
  <li class="list-item">Pollinate Group Partners</li>
                       </ul>
                   </div>
                   <div className="col-12 col-md-2" style={{marginTop:"50px"}}>
                   <ul className="list">
                       <li class="list-item">Pollinate Group Programs</li>
  <li class="list-item">Leadership Impact Programs</li>
  <li class="list-item">Social Innovation Program</li>
  <li class="list-item">Student Fellowship Program</li>
  <li class="list-item">Local Fellowship Program</li>
                       </ul>
                   </div>
                   <div className="col-12 col-md-2" style={{marginTop:"50px"}}>
                   <ul className="list">
                       <li class="list-item">Get Involved</li>
  <li class="list-item">Give</li>
  <li class="list-item">FundRaise</li>
  <li class="list-item">Partnership</li>
  <li class="list-item">Volunteer</li>
                       </ul>
                   </div>
                   <div className="col-12 col-md-2" style={{marginTop:"50px"}}>
                   <ul className="list">
                       <li class="list-item" style={{color:"#B44399", cursor:"auto"}}><h2>Contact</h2></li>
  <li class="list-item">Australian team </li>
  <li class="list-item">+61 468 764 056</li>
  <li class="list-item">info@pollinategroup.org</li>
 </ul>
                   </div>

                   </div>
                   
                   <section id="lab_social_icon_footer">
                   <div class="container" >
                  
                   <p class="follow-text">Follow us :)</p>
        <div class="text-center center-block">
                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
           <div>
               <button className="btn btn-warning" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})}>Go to Top</button>
           </div>
    </div>
</div>
</section>
                  <div class="text-center p-3" style={{backgroundColor: "#100906"}}>
                  <div class="footer-p">
                     <p>
                     <span class="p1"> Privacy Policy | </span>
                     <span class="p1">  Terms & Conditon | </span>
                       <span class="p2">
                       Copyright © 2020 Pollinate Group | 
                       All Rights Reserved</span></p>
                  </div>
                  
    
  </div>
               </div>
            </div>

        </div>
    )
}

export default Section
