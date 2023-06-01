import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="bannerContainer">
        <div className="bannerTop">

        
        <div className="bannerTxt">
          <h1 className="heading">The Ultimate Processor for Gaming</h1>
          <br />
          <h4>
            Experience ultimate gaming performance with AMD Ryzen™ 7000X3D
            Series processors featuring AMD 3D V-Cache technology.
          </h4>

          <br />
        </div>

        <br />
        <div className="bannerButtonDiv">
          <button className="bannerButton">Learn More</button>
        </div>
        </div>

      <div className="bannerBottom">

        
        <div className="bannerSwitches">
          <div className="bar"></div>
          <div className="switchTxt">LUMI</div>
        </div>

        <div className="bannerSwitches">
          <div className="bar"></div>
          <div className="switchTxt">Alveo MA35D Media Accelerator</div>
        </div>

        <div className="bannerSwitches">
          <div className="bar"></div>
          <div className="switchTxt">Google Cloud Security</div>
        </div>

        <div className="bannerSwitches">
          <div className="bar"></div>
          <div className="switchTxt">Ryzen™ X3D Gaming Processors</div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Banner;
