import React from "react";
import Head from "next/head";
import "./styles/main.scss";
import emailjs from "emailjs-com";
import Navbar from "../../components/Navbar/Navbar";
import Pulse from 'react-reveal/Pulse';

function sendEmail(e) {
     e.preventDefault();
 
     emailjs.sendForm('service_2eoqo38', 'template_3j77wil', e.target, 'user_UWg61dqXCz0UDFgers3HY')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       e.target.reset()
   }

export default function Contact() {
    return(
         <div className="back2">
         <Navbar />
          <div className="Container">
            <h1 className="title">Contact Me</h1>
            <p className="sub-title">Be well, do good work, and keep in touch.</p>
            <Pulse>
         <div id="contact-container">
            <div className="contact-info">
             <h4>Contact Information</h4>
               <p>fill up the form then click send</p>
               <div className="icon-text">
               <i class="fas fa-phone-alt"></i>

                   <span>+91 7908380780</span>
                </div>
                <div className="icon-text">
                <i class="far fa-envelope"></i>
                   <span>choudhuryanup8@gmail.com</span>
                </div>
                <div className="icon-text">
                <i class="fa fa-map-marker-alt"></i>
                   <span>444 shashadhar ganguly road, Radhakrishna More, Purulia, West Bengal - 723101</span>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/anup.choudhury.779" className="icon-circle">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/ANUPCHO56320607" className="icon-circle">
                    <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/invites/contact/?i=1y0w7pfjsumcb&utm_content=1t6dp6t" className="icon-circle">
                    <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/anup-choudhury-bb4182191/" className="icon-circle">
                    <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/NCLYAnup" className="icon-circle">
                    <i class="fab fa-github"></i>
                    </a>
                </div>
             </div>
             <form onSubmit={sendEmail}>
               <div className="col">
               <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="fname" />
               </div>
               <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lname" />
               </div>
               </div>
               <div className="col">
               <div className="form-group">
                    <label>E-Mail</label>
                    <input type="email" name="email" />
               </div>
               <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" />
               </div>
               </div>
               <div className="col">
               <div className="form-group solo">
                    <label>Message</label>
                    <textarea name="message" ></textarea>
               </div>
               </div>
               <div className="col">
               <div className="form-group solo right">
                    <button type="submit" className="primary">Send</button>
               </div>
               </div>
             </form>
         </div>
         </Pulse>
         </div>
         </div>
    );
}