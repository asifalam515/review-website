import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="right-container text-start">
                <h1>Sohan's Language School</h1>
                <div className="icons-container d-flex text-center ">
                 
                </div>
               
                <p className="mt-5">
                  <small>Sohan's All rights reserved.</small>
                </p>
              </div>
            </div>
           
            <div className="col-md-1">
              <div className="right-footer-container">
                <h3>Sign up for the promotional Email</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                 
                  <div>
                    <h5>+8801722222222</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                     234 road
                      <br /> 102 1st Avenue, Dhaka,Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;