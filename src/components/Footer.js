import React from 'react'

function Footer() {
    return (
        <div >
            <section id="lab_social_icon_footer">
                   <div class="container" >
                  
                   <p class="follow-text">Follow us :)</p>
        <div class="text-center center-block">
                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                <div>
                    <button className="btn btn-warning" onClick={()=>window.scrollTo({top:0 , behavior:"smooth"})}>Scroll to Top</button>
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
    )
}

export default Footer
