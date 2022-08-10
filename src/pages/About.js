import React from 'react';
import MultiSweets from "../assets/sweets.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"
      style={{ backgroundImage: `url(${MultiSweets})`}}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
        The most basic definition is that sweet food has the flavor or taste of sugar or honey, 
        while savory food is not sweet, 
        but rather full-flavored and sometimes spicy.
         Sweet and savory foods often complement each other at a dinner.
        </p>
      </div>
    </div>
  )
}

export default About;
