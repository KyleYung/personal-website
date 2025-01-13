import React from "react";
import './styles.css';

const Project=()=>{

    const projects = [
        {
            id: 1,
            title: "Class Catcher",
            description: "blah blah blah",
            image: 'IMG_0375.jpeg',
            link: 'https://github.com/KyleYung/class-catcher'
        },

        {
            id: 2,
            title: "eCommerce Store Website",
            description: "blah blah blah",
            image: 'IMG_0375.jpeg',
            link: ''
        },

        {
            id: 3,
            title: "Tetris Neural Network",
            description: "blah blah blah",
            image: 'IMG_0375.jpeg',
            link: 'https://github.com/KyleYung/Tetris-Neural-Network'
        },

        {
            id: 4,
            title: "AI Chess Bot",
            description: "blah blah blah",
            image: 'IMG_0375.jpeg',
            link: 'https://github.com/KyleYung/AI-Chess-Bot'
        },

        {
            id: 5,
            title: "Travel Booking Site",
            description: "blah blah blah",
            image: 'IMG_0375.jpeg',
            link: 'https://github.com/KyleYung/JOURNEY'
        },
    ];

    return (
        <div className="projects">
            <div className="projects-header">
                <h1 className="projects-title">My Projects</h1>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" key={project.id}>
                        <div className="project-card" key={project.id}>
                            <div className="project-card-image-container">
                                <img src={project.image} alt={project.title} className="project-card-image"/>
                                <div className="project-card-overlay"></div>
                            </div>
                            <h2 className="project-card-title">{project.title}</h2>
                            <p className="project-card-description">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project;