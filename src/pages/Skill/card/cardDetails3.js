import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import styled from "styled-components";



const percentage = 50;
export default function CardDetails3() {
  return (
    <AnimatedProgressProvider
    valueStart={0}
    valueEnd={50}
    duration={1.4}
    easingFunction={easeQuadInOut}
    
  >
    {value => {
      const roundedValue = Math.round(value);
      return (
        <CircularProgressbar
          
          value={value}
          text={`${roundedValue}%`}
          /* This is important to include, because if you're fully managing the
    animation yourself, you'll want to disable the CSS animation. */
          styles={buildStyles({ 
            pathTransitionDuration: 0.15,
            
            textColor: "#00adb5",
          pathColor: "#00adb5",
            })}
        />
      );
    }}
  </AnimatedProgressProvider>
  );
}
