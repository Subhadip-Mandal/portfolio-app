import React from "react";
import "./button.css";
import {Link} from "react-router-dom";
export default function Button(){
return(

    <div class="btn-bg Ocean">
        <div class="btn Coral">
        <Link to="/contact">
        <button type="button" >Contact Me<span class="Coralwave1"></span><span class="Coralwave2"></span><span class="Coralwave3"></span></button>
        </Link>
        </div>
    
   </div>
);
}