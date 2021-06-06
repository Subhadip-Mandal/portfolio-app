import React from "react";
import SlideExample from "./reveal";
import ParticleBackground from "./particleBackground";
import Navbar from "../../components/Navbar/Navbar";
import Typical from 'react-typical';
import Button from "./button";
import "./home.css"
import Icon from "./icon";
import Anup6 from "./Anup9.png";


function Home(){
      return(
        <div className="back1">
        <div className="background">
        <Navbar />
        <ParticleBackground />
        </div>
        <div className="type">
        <SlideExample />
        <Typical
        className="type1"
         loop={Infinity}
         wrapper="p"
         steps={[
           'Full Stack Web Developer',
           1000,
           'Competitive Coder',
           1000,
           'AI & ML Enthusiast',
           1000,
           'Cse Undergrad',
           1000,
         ]}
        />
        <div className="contactme">
        <Button />
        </div>
        <div className="icons">
         <Icon />
         </div>
        </div>
       
        <img className="type2" src={Anup6} />
      
        </div>
      );
}
export default Home;