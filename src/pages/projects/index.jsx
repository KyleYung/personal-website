import React from "react";
import './styles.css';

const Project=()=>{

    const projects = [
        {
            id: 1,
            title: "Class Catcher",
            description: "An application designed to assist Boston University students in finding and scheduling classes for future semesters, leverages a web scraper to extract information about 2,000+ courses in BU database, Google Calendar and Google Maps APIs. Utilized React, Node.js, Flask, and SQLAlchemy for a robust and user-friendly experience.",
            image: 'class-catcher.png',
            link: 'https://github.com/KyleYung/class-catcher'
        },

        {
            id: 2,
            title: "eCommerce Store Website",
            description: "An application where users are able to browse through various products, view details about them and add them to their cart where they'll be able to later purchase them. They may also sell products by listing them under their account. This app features user authentication, creation/update/deletion of data models, data sorting/searching as well as full checkout functionality.",
            image: 'ecommerce.png',
            link: ''
        },

        {
            id: 3,
            title: "Tetris Neural Network",
            description: "A reinforcement learning agent for Tetris implemented using key components such as state-action representation, reward engineering, and neural network-based Q-value prediction. Utilizes a training pipeline leveraging temporal difference (TD) learning with replay buffers to aggregate transitions and mitigate overfitting. Trained through iterative cycles of training, evaluation, and performance improvement.",
            image: 'tetris.png',
            link: 'https://github.com/KyleYung/Tetris-Neural-Network'
        },

        {
            id: 4,
            title: "AI Chess Bot",
            description: "An AI-powered chess bot that utilizing Sepia and Java. Integrates the fundamental mechanics of chess gameplay as well as heuristic algorithms to enhance the bot's decision-making capabilities, allowing the bot to analyze the board more strategically by weighing factors like pawn structures, king safety, and control of central squares",
            image: 'chess.jpeg',
            link: 'https://github.com/KyleYung/AI-Chess-Bot'
        },

        {
            id: 5,
            title: "Travel Booking Site",
            description: "blah blah blah",
            image: 'journey.png',
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
                                <div className="project-card-overlay">
                                    <p className="project-card-description">{project.description}</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="project-card-title">{project.title}</h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project;