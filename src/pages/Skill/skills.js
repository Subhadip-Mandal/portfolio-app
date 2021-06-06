import React from "react";
import Card from "./card/card.js"
import styled from "styled-components";
import Carousel from "./carousel.js";
import Navbar from "../../components/Navbar/Navbar";
import "./skill.css"


function Skill (){
    return(
      <div className="skills"> 
      <Navbar />
      
      <h1 className="header2"><span className="head2"> My Skills </span></h1>
      
      <Carousel/>
      
      </div>
       
    );
}
export default Skill;