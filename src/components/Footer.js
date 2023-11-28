import "./Footerstyles.css"

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>B27/25A JawaharNagar Varanasi.</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
             8840737689</h4>

            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
             akrai1234@gmail.com</h4>
             
            </div>
           
        </div>

        <div className="right">
            <h4>About the company</h4>
            <p>This is Aman Kumar Rai. CEO & Founder of Amantech. I enjoy discussing new projects and design challenges.</p>
            <div className="social">
            <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
