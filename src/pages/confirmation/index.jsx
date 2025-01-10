import React from "react";
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Confirmation=()=>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div class="confirm" id="confirm">
            <h1 className="confirm-header">Thank You!</h1>
            <p className="confirm-text">Thanks for getting in touch! I'll get back to you as soon as I can!</p>
            <button class="confirm-button" onClick={handleClick}>
                <p>Send Another Email</p>
            </button>
        </div>
    )
}

export default Confirmation;