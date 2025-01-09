import React from "react";
import './styles.css';

const Experience=()=>{
    return (
        <div className="timeline">

            <div className="timeline-container left">
                <img className = "timeline-img" src="beaver.png" alt=""/>
                <div className="timeline-item">
                    <h2>Beaver Country Day School</h2>
                    <h4>IT Technician Intern</h4>
                    <small>March 2021 - June 2021</small>
                    <p>blah blah blah</p>
                    <span className="left-arrow"></span>
                </div>
            </div>

            <div className="timeline-container right">
                <img className = "timeline-img" src="rf2.jpg" alt=""/>
                <div className="timeline-item">
                    <h2>Rodman Ford</h2>
                    <h4>Software Engineer Intern</h4>
                    <small>May 2022 - August 2022</small>
                    <p>blah blah blah</p>
                    <span className="right-arrow"></span>
                </div>
            </div>

            <div className="timeline-container left">
                <img className = "timeline-img" src="rf.jpg" alt=""/>
                <div className="timeline-item">
                    <h2>Rodman Ford</h2>
                    <h4>IT Technician Intern</h4>
                    <small>May 2024 - August 2024</small>
                    <p>blah blah blah</p>
                    <span className="left-arrow"></span>
                </div>
            </div>

            <div className="timeline-container right">
                <img className = "timeline-img" src="bu.png" alt=""/>
                <div className="timeline-item">
                    <h2>Boston University</h2>
                    <h4>Course Assistant</h4>
                    <small>September 2024 - December 2024</small>
                    <p>blah blah blah</p>
                    <span className="right-arrow"></span>
                </div>
            </div>

        </div>
    )
}

export default Experience;