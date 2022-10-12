import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12">
          <footer class="footer">
            <div class="container">
              <div class="row">
                <div class="col-md-4 m-b-20">
                  <div class="footer-title m-t-5 m-b-30 p-b-8">About us</div>
                  <p class="white-text">
                    <span>
                      Here students of our college can get all the branch
                      related books, technical equipments and other college
                      exams related study material.
                    </span>
                  </p>
                </div>

               
                  <div class="col-md-4 m-b-20 ">
                    <div class="footer-title m-t-5 m-b-30 p-b-8">
                      <a>Nitin Gupta</a>
                    </div>
                    Coding enthusiast | WEB developer | CC
                  </div>
                
                
                <div class="col-md-4 m-b-20">
                  <div class="footer-title m-t-5 m-b-30 p-b-8">
                    <a href="https://github.com/tanmay12-sud0">Tanmay Goyal</a>
                  </div>
                  Full Stack developer | React native Android developer | CC
                </div>
              </div>
            </div>
          </footer>
          <div class="footer-bottom">Copyright © 2021, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
