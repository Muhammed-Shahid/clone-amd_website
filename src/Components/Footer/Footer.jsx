import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footerContainer container">
        <div className="footerTop">
          <div className="leftBox">VVFSVVSFV</div>

          <div className="rightBox">GSFGFFSGFGFS</div>
        </div>
        <div className="footerBottom">
        <div className="footerBottomFlexWrap">
      

          <div className="footerCol">
            {" "}
            <h3>Company</h3>

            <ul>
                <li><p>About AMD</p></li>
                <li><p>Management Team</p></li>
                <li><p>Corporate Responsibility</p></li>
                <li><p>Careers</p></li>
                <li><p>Contact Us</p></li>

              </ul>
          </div>

          <div className="footerCol">
            {" "}
            <h3>News & Events</h3>

            <ul>
                <li><p>News Room</p></li>
                <li><p>Events</p></li>
                <li><p>Blogs</p></li>
                <li><p>MEdia Library</p></li>
              

              </ul>
          </div>

          <div className="footerCol">
            {" "}
            <h3>Community</h3>

            <ul>
                <li><p>Support</p></li>
                <li><p>Developer</p></li>
                <li><p>Red Team</p></li>
               

              </ul>
          </div>

          <div className="footerCol">
            <h3>Partners</h3>

            <ul>
                <li><p>AMD Parten Hub</p></li>
                <li><p>Partner Resource Library</p></li>
                <li><p>Authorized Distributors</p></li>
             

              </ul>
          </div>


          <div className="footerCol">
            <h3>Investors</h3>
          
              <ul>
                <li><p>Investor Relations </p></li>
                <li><p>Financial Information</p></li>
                <li><p>Board of Directors</p></li>
                <li><p>Governance Documents</p></li>
                <li><p>SEC Fillings</p></li>

              </ul>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
