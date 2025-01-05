import React from 'react';
import {Link} from 'react-router-dom';

const data = [
    {
        label : 'HOME',
        to : '/'
    },

    {
        label : 'ABOUT',
        to : '/about'
    },

    {
        label : 'EXPERIENCE',
        to : '/experience'
    },

    {
        label : 'PROJECTS',
        to : '/projects'
    },

    {
        label : 'CONTACT',
        to : '/contact'
    },
]

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to = {'/'} class="navbar-container-logo">
                    KY
                    </Link>
                </div>
                <ul class="navbar-container-menu">
                    {
                        data.map((item, key)=> (
                            <li key={key} class="navbar-container-menu-item">
                                <Link to={item.to} class="navbar-container-menu-item-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;