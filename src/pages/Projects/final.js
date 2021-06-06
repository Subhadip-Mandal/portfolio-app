import React from "react";
import ParticleBackground2 from "./project.js";
import Navbar from "../../components/Navbar/Navbar";
import "./project.css";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import Button1 from "./button1";

function Final(){
    return(
      <div className="background2">
        <div className="back3">
        <Navbar />
          <ParticleBackground2 />
        </div>
        <div className="type6">
        
          <h1 className="head6">My Projects</h1>
      
        </div>
        <div className="type5">
        <Bounce left>
          <h1 className="head7">1) Menu-App</h1>
        </Bounce>
        </div>
        
        <Bounce right>
        <a href="https://nclyanup.github.io/menu-app/" className="visit">
        <button className="probtn" >Visit</button>
        </a>
        </Bounce>
        <Bounce bottom>
         <div className="resume">
           <Button1 />
         </div>
         </Bounce>
        </div>
    );
}
export default Final;