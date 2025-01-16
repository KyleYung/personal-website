import React from "react";
import './styles.css';

const About=()=>{
    return (
        <div class="about">
            <div class="about-content">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                </div>
                <p>I'm an aspiring Software Engineer and IT Technician with a passion for technology and a desire to make a difference. I'm a lifelong learner who thrives on growth from new challenges and experiences. Whether it's assisting someone with a minor issue or developing software that improves lives, I'm committed to making a positive impact.</p>
                <a href={require("../../assets/Kyle_Yung_Resume.pdf")} class="download-button" download>Download Resume</a>
            </div>
            <div class="photo-gallery">
                <div class="gallery-item">
                    <img src={require("../../assets/2017.jpg")} alt="Gallery Image 1"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_2067.JPG")} alt="Gallery Image 2"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_0375.jpeg")} alt="Gallery Image 3"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_5090.jpeg")} alt="Gallery Image 4"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_0246.jpeg")} alt="Gallery Image 5"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_6984.JPG")} alt="Gallery Image 6"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_5543.jpeg")} alt="Gallery Image 7"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_8653.png")} alt="Gallery Image 8"/>
                    <div class="gallery-overlay"></div>
                </div>
                <div class="gallery-item">
                    <img src={require("../../assets/IMG_5405.png")} alt="Gallery Image 9"/>
                    <div class="gallery-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default About;