import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div style={{ fontFamily: "cursive", fontWeight: "400", textUnderlineOffset: "true" }} className="text-center h4 mt-5">
        Our Team
      </div>
      <hr />



      <div className="container mt-5">
        <div className="row">
          <div className='col m-auto d-flex justify-content-center'>
            <figure className="snip1515">

              <div className="profile-image">
                <img height="220px" src="https://media-exp1.licdn.com/dms/image/C4D03AQEI3LyzCoKB_g/profile-displayphoto-shrink_800_800/0/1658121711115?e=1671062400&v=beta&t=D8uxYnxs1ZPJNgmFcDhFkhLe0K1djLpNFp45eoPd31A" alt="Nitin Gupta" />
              </div>
              <figcaption>
                <h3>Nitin Gupta</h3>
                <h4>Founder</h4>

                <p>Coding enthusiast | WEB developer</p>
                <div className="icons">
                  <a href="/">
                    <i className="ion-social-linkedin"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="ion-social-github"></i>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='col m-auto d-flex justify-content-center'>
            <figure className="snip1515">
              <div className="profile-image">
                <img height="220px" src="goyalBabu.jpeg" alt="Tanmay Goyal" />
              </div>
              <figcaption>
                <h3>Tanmay Goyal</h3>
                <h4>Founder</h4>

                <p>Full Stack developer | React native Android developer | CC</p>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/tanmay-goyal-070b481a6/">
                    <i className="ion-social-linkedin"></i>
                  </a>
                  <a href="https://github.com/tanmay12-sud0">
                    {" "}
                    <i className="ion-social-github"></i>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;