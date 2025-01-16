import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import './styles.css';

const data = [

    { label: 'ABOUT ME', to: '/about' },

    { label: 'MY EXPERIENCES', to: '/experience'},

    { label: 'MY PROJECTS', to: '/projects' },

    { label: 'LINKEDIN', to: 'https://linkedin.com/in/kyleyyung', isSocial: true, icon: <FaLinkedin size="20" /> },

    { label: 'GITHUB', to: 'https://github.com/KyleYung', isSocial: true, icon: <FaGithub size="20" /> },

    { label: 'CONNECT WITH ME', to: '/contact' },
]

const Navbar = () => {

    
    const [toggleIcon, setToggleIcon] = useState(false);

    // Get the current location
    const location = useLocation();

    // func that changes value of toggleIcon (true or false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon); //sets the new state to the opposite of its curr val
    };

    // Close the navbar when the route changes
    useEffect(() => {
        setToggleIcon(false); // Close the navbar
    }, [location]); // Re-run this effect when the location changes

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = {'/personal-website'} className="navbar-container-logo">
                        KY
                    </Link>
                </div>
                <ul className= {`navbar-container-menu ${toggleIcon ? 'active' : ''} `}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar-container-menu-item">
                            {item.isSocial ? (
                                /* if item is a social, render logo */
                                <a href={item.to} target="_blank" rel="noopener noreferrer" className="navbar-container-menu-item-link">
                                    {item.icon}
                                </a>
                            ) : (
                                /* else render the text */
                                <Link to={item.to} className="navbar-container-menu-item-link">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                        ))}
                    </ul>
                
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        // check if toggleIcon is true. If it is,render HiX, else render FaBars
                        toggleIcon ? <HiX size="30"/> : <FaBars size="30"/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;