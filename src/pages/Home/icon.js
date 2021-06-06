import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import "./icon.css";

const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(1),
    },
    absolute: {
      
      bottom: theme.spacing(2),
      right: theme.spacing(0),
    },
  }));

function Icon(){
    const classes = useStyles();
    return(
        <div>
           <a href="https://www.facebook.com/anup.choudhury.779" className="material">
           <FacebookIcon style={{color: '#0278ae', fontSize: 50, marginRight: '15px'  }} />
           </a>
            <a href="https://twitter.com/ANUPCHO56320607" className="material"> 
            <TwitterIcon style={{color: '#00adb5', fontSize: 50, marginRight: '15px'}} />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1y0w7pfjsumcb&utm_content=1t6dp6t" className="material"> 
            <InstagramIcon style={{color: '#E1306C', fontSize: 50, marginRight: '15px'}} />
            </a>
            <a href="https://www.linkedin.com/in/anup-choudhury-bb4182191/" className="material">
            <LinkedInIcon style={{color: '#005792', fontSize: 50, marginRight: '15px'}} />
            </a>
            <a href="https://github.com/NCLYAnup" className="material">
            <GitHubIcon style={{color: '#000', fontSize: 48}} />
            </a>
    
        </div>
    )
}
export default Icon;