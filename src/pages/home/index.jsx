import React from "react";
import './styles.css';

const Home=()=>{
    return (
        <section className="home" id="home">
            <div className="home-container">
                <h1 className="home-heading">Hey, I'm<span> Kyle</span></h1>
                <p className="home-description">Nice to <span>meet you</span></p>
            </div>
        </section>
    )
}

export default Home;