import React from "react";
import "../global.css";


function Header () {
    return (
      <div id="Home" className="header">
        <header className="head">
        <div className="logo">Muzamil's<span>Portfolio</span></div>
          <nav>
              <a href="#Home">Home</a>
              <a href="#Bio">Bio</a>
              <a href="#Skills">Skills</a>
              <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
           
          </nav>
        </header> 
      </div>
      );
    }
export default Header