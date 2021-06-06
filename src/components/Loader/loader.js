import React, {Component, useState} from "react";
import "./loader.css";
import Anup from "./Anup.png";

  function Loader(){
       return(
          <div className="loader">
              <div className="wrapperload">
              <div className="elem">
                 <img src={Anup}/>
              </div>
              <div class="elem">
               <h3>Full Stack web Developer</h3>
              </div>
            <div class="elem">
            <h3>loves to code.</h3>
           </div>
           <div className="elem">
            <img src={Anup}/>
            </div>
              </div>
          </div>
       );
       }
export default Loader;