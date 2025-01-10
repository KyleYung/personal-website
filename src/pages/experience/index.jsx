import React from "react";
import './styles.css';

const Experience=()=>{
    return (
            <div className="timeline">
                <div className="timeline-container left">
                    <img className = "timeline-img" src="beaver.jpg" alt=""/>
                    <div className="timeline-item">
                        <h2>Beaver Country Day School</h2>
                        <h4>IT Technician Intern</h4>
                        <small>March 2021 - June 2021</small>
                        <p> Offered assistance to 700+ students and faculty with technology-related issues. Engaged in documentation projects to support the use of both basic and advanced tools, enhancing academic experience.</p>
                        <span className="left-arrow"></span>
                    </div>
                </div>

                <div className="timeline-container right">
                    <img className = "timeline-img" src="rf.jpg" alt=""/>
                    <div className="timeline-item">
                        <h2>Rodman Ford</h2>
                        <h4>Software Engineer Intern</h4>
                        <small>May 2022 - August 2022</small>
                        <p>Initiated creation and implementation of an intranet for 100+ employees to better share information and tools. Utilized a combination of HTML, CSS, JavaScript, and React to allow dynamic and interactive user experiences. Implemented Apache server hosting to deploy and manage web applications, ensuring reliable and efficient performance</p>
                        <span className="right-arrow"></span>
                    </div>
                </div>

                <div className="timeline-container left">
                    <img className = "timeline-img" src="rf.jpg" alt=""/>
                    <div className="timeline-item">
                        <h2>Rodman Ford</h2>
                        <h4>IT Technician Intern</h4>
                        <small>May 2024 - August 2024</small>
                        <p>Served as the only IT staff member and provided technical support to 100+ staff and employees. Handled server administration tasks such as monitoring, updating, troubleshooting, and installations of new server systems to
                        ensure optimal performance and security. Implemented and monitored IT policies and procedures to ensure smooth operations.</p>
                        <span className="left-arrow"></span>
                    </div>
                </div>

                <div className="timeline-container right">
                    <img className = "timeline-img" src="bu.png" alt=""/>
                    <div className="timeline-item">
                        <h2>Boston University</h2>
                        <h4>CS Course Assistant</h4>
                        <small>September 2024 - Present</small>
                        <p>Held weekly office hours to assist 200+ students on their course assignments and general course material. Helped course staff grade assignments and proctor exams.</p>
                        <span className="right-arrow"></span>
                    </div>
                </div>
            </div>
    )
}

export default Experience;