import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <section className="page">
        <section className="featuredSec">
          <h2 style={{ fontSize: "32px" }}>Featured Products</h2>

          <br />
          <div className="featuredCards">
            <div className="card">
              <img
                className="featuredCardImg"
                src={process.env.PUBLIC_URL + "/featuredA.avif"}
                alt="Avatar"
              />
              <div className="container">
                <h4>
                  <b>Change How You Game</b>
                </h4>
                <a
                  href="http://"
                  className="featuredLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p>AMD Ryzen™ 7000 Series Desktop Processors</p>
                </a>
                <br />
                <div className="featuredButtonDiv">
                  <button className="featuredButton">Find Retailers</button>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                className="featuredCardImg"
                src={process.env.PUBLIC_URL + "/featuredB.avif"}
                alt="Avatar"
              />

              <div className="container">
                <h4>
                  <b>Play It All with Ryzen™ and Radeon™</b>
                </h4>
                <a
                  href="http://"
                  className="featuredLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p>Browse preconfigured systems from our partners.</p>
                </a>
                <br />
                <div className="featuredButtonDiv">
                  <button className="featuredButton">Learn More</button>
                </div>
              </div>
            </div>

            <div className="card">
              <img
                className="featuredCardImg"
                src={process.env.PUBLIC_URL + "/featuredC.avif"}
                alt="Avatar"
              />

              <div className="container">
                <h4>
                  <b>Breakthrough Performance</b>
                </h4>
                <a
                  href="http://"
                  className="featuredLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <p>AMD Radeon™ RX 7000 Series graphics cards</p>
                </a>

                <br />
                <div className="featuredButtonDiv">
                  <button className="featuredButton">Find Retailers</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions">
          <h2 style={{ fontSize: "32px" }}>Featured Solutions</h2>

          <div className="bannerContainer">
            <div className="solutionsBannerTop">
              <div
                style={{ maxWidth: "40%", marginTop: "10vh" }}
                className="bannerTxt"
              >
                <h1 className="heading">Automotive</h1>
                <br />
                <p>
                  Powering next-generation automotive systems for automated
                  driving, electrification, networking, and in-vehicle
                  experience.
                </p>

                <br />

                <p>Learn More &gt;</p>
              </div>
            </div>
          </div>

          <div className="boxWrapper">
            <div className="box">
              <h3>Automotive</h3>
            </div>

            <div className="box">
              <h3>Supercomputing and HPC</h3>
            </div>

            <div className="box">
              <h3>Networking & Telco</h3>
            </div>

            <div className="box">
              {" "}
              <h3>Adaptive Computing in Robotics</h3>
            </div>
          </div>
        </section>
      </section>
      <section className="bannerThirdSec">
        <div className="bannerThird">
          <div className="thirdBannerTxt">
            <h2 style={{ fontSize: "42px" }}>together we advance_</h2>

            <p style={{ fontSize: "18px" }}>
              AMD is pushing the limits of innovation to tackle some of the
              world’s toughest <br /> challenges with our partners.
            </p>
          </div>
          <div className="featuredButtonDiv">
            <button className="thirdBannerButton">Learn More</button>
          </div>
        </div>
      </section>

      <section className="caseStudies">
        <h2 style={{ fontSize: "32px" }}>Case Studies</h2>

        <div className="flexContainer a">
          <div className="grid-box gBox1">
            <div className="caseStudiesBoxTxt">
              <h2>Automotive</h2>
              <p>
                {" "}
                TrueCar deployed Amazon EC2 instances powered by AMD EPYC™
                processors to reduce costs and increase new service development
                speed for its automotive marketplace.
              </p>
            </div>
          </div>
          <div className="grid-box gBox2">
            {" "}
            <div className="caseStudiesBoxTxt">

            <h2>Media & Entertainment</h2>
            <p>
              {" "}
              TPixomondo elevates virtual production with AMD, Lenovo, and Epic Games.
            </p>
            </div>

          </div>
        </div>
        <div className="flexContainer b">
          <div className="grid-box gBox3">
            {" "}
            <div className="caseStudiesBoxTxt">

            <h2>Supercomputing and HPC</h2>
            <p>
              {" "}
              Newly observed particle movements could change our understanding of the universe.
            </p>
            </div>

          </div>
          <div className="grid-box gBox4">
            {" "}
            <div className="caseStudiesBoxTxt">
            
            <h2>Healthcare</h2>
            <p>
              {" "}
              Adaptive computing and AI enable HD ultrasound scanning in a handheld design.
            </p>
          </div>
          </div>

        </div>
      </section>


<section className="newsSec">
  <div className="newsFlexWrap">
    <div className="newsBox">
    <div className="boxImgDiv boxImg1">
  
  </div>

  <div  className="newsBoxTxt">
<h3 style={{textAlign:'justify'}} > AMD to Participate in Bank of America Global Technology Conference</h3>
    
  </div>
    </div>

    <div className="newsBox">
<div className="boxImgDiv boxImg2">

</div>
<div  className="newsBoxTxt">
<h3 style={{textAlign:'justify'}} >AMD Introduces AMD Radeon RX 7600 Graphics Card for Superb, Next-Gen 1080p Gaming</h3>
    
  </div>
</div>

<div className="newsBox ">
<div className="boxImgDiv boxImg3">
  
</div>
  <div  className="newsBoxTxt">
<h3 style={{textAlign:'justify'}} >New AMD Ryzen™ 7020 C-Series Processors Bring Fast Performance, Longer Battery Life, and Advanced RDNA™ 2 Graphics to Chromebook Users</h3>
    
  </div>
</div>

<div className="newsBox">
<div className="boxImgDiv boxImg4">
 
</div>
<div  className="newsBoxTxt">
<h3 style={{textAlign:'justify'}} >Latest Top500 List Highlights World's Fastest and Most Energy Efficient Supercomputers Powered by AMD</h3>
    
  </div>
</div>
  </div>
</section>

      <Footer/>
    </div>
  );
}

export default App;
