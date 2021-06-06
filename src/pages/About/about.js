import React from 'react';
import Fade from 'react-reveal/Fade';
import img1 from "./img1.png"
import "./About.css"
import Bounce from 'react-reveal/Bounce';
import Tooltip from '@material-ui/core/Tooltip';

import Roll from 'react-reveal/Roll';
import Navbar from "../../components/Navbar/Navbar";

import Zoom from 'react-reveal/Zoom';
class About extends React.Component {
  render() {
    return (
      <div className="back">
      <Navbar/>
      <div className="about">
      <div className="chobi">
        <Roll left>
          <img className="profile" src={img1} />
        </Roll>
        </div>
        <div className="desc">
        <Fade right>
          <h1 className="header1"><span className="head1">About Me</span></h1>
          <p className="para1">Hi, I’m Anup Choudhury. I am a B.Tech student in computer science and engineering and currently pursuing my second year. I’ve been coding since my first year of graduation, and have dabbled in languages such as C, C++ and Python. Just a B.Tech student who is eager to learn and explore the world of technology.
          <br/>
          <br />
          Also, I am a Full Stack Web developer. I like to work on web development and its technologies and I also have some experience in this field. I am an open source enthusiast as well as a technology lover.
          </p>
        </Fade>
        </div>
        </div>
        <Zoom >
        <div className="bottom1">
         <Tooltip title="HackerRank" aria-label="about-circle">
          <a href="https://www.hackerrank.com/choudhuryanup8" className="about-circle">
          <img className="hack" src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" />
          </a>
          </Tooltip>
          <Tooltip title="GeeksforGeeks" aria-label="geeksforgeeks">
          <a href="#" className="about-circle">
          <img className="hack1" src="https://img.icons8.com/color/452/GeeksforGeeks.png" />
          </a>
          </Tooltip>
          <Tooltip title="CodeChef" aria-label="codechef">
          <a href="https://www.codechef.com/users/codeking_anup" className="about-circle">
          <img className="hack2" src="https://avatars.githubusercontent.com/u/11960354?v=4" />
          </a>
          </Tooltip>
        </div>
        </Zoom>
      </div>
      
    );
  }
}
export default About;