import React from "react";
import './styles.css';

const About=()=>{
    return (
        <div class="about" id="about">
            <h1 className="about-header">About Me</h1>
            <div class="about-content">
                <img src="IMG_5405.JPG" class="about-img" alt="Image of Me"/>
                <p className="about-bio">I am currently a senior at Boston University and majoring in Computer Science.</p>
            </div>
        </div>
    )
}

export default About;