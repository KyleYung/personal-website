import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Contact=()=> {

    const form = useRef();

    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
                console.log('SUCCESS!');
                navigate('/confirmation');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <h1 className="contact-header">Contact Me</h1>
                <div class="contact-form">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <div class="form-input">
                            <input type="text" name="user_name" id="name" required/>
                            <label for="name">Name</label>
                        </div>
                        <div class="form-input">
                            <input type="email" name="user_email" id="email" required/>
                            <label>Email</label>
                        </div>
                        <div class="form-input">
                            <textarea name="message" id="message" rows="8" required/>
                            <label>Message</label>
                        </div>
                        <input className="form-button" type="submit" id="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;