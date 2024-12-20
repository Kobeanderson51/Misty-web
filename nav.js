import React, { useState } from 'react';
import './nav.css';

export default function Nav() {
    const [hovered, setHovered] = useState(null); // State to track which menu is hovered
    const [menuOpen, setMenuOpen] = useState(false);  // State to toggle the mobile menu

    const navContent = {
        Home: ['Experience', 'Results', 'Expertise', 'Education'],
        'Meet Misty': ['Testimonials', 'Q & A', 'Interests & Hobbies'],
    };

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to handle link id formatting
    const formatId = (text) => {
        return text.toLowerCase()
            .replace(/\s+/g, '') // Remove spaces
            .replace('&', 'qa');  // Replace '&' with 'qa'
    };

    return (
        <nav className="navbar">
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                {/* Home Menu Item */}
                <li 
                    className="nav-item" 
                    onMouseEnter={() => setHovered('Home')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <a href="#bio">Home</a> {/* Link to the Home section */}
                    {/* Dropdown for Home, shown when hovered or mobile menu is open */}
                    {(hovered === 'Home' || menuOpen) && (
                        <ul className="dropdown">
                            <li className="dropdown-item">
                                <a href="#experience">Experience</a> {/* Link to the experience section */}
                            </li>
                            {navContent.Home.slice(1).map((item, index) => (
                                <li key={index} className="dropdown-item">
                                    <a href={`#${formatId(item)}`}>{item}</a> {/* Dynamically create link ids */}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                {/* Meet Misty Menu Item */}
                <li 
                    className="nav-item" 
                    onMouseEnter={() => setHovered('Meet Misty')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <a href="#meet-misty">Meet Misty</a> {/* Link to the Meet Misty section */}
                    {/* Dropdown for Meet Misty, shown when hovered or mobile menu is open */}
                    {(hovered === 'Meet Misty' || menuOpen) && (
                        <ul className="dropdown">
                            {navContent['Meet Misty'].map((item, index) => (
                                <li key={index} className="dropdown-item">
                                    <a href={`#${formatId(item)}`}>{item}</a> {/* Dynamically create link ids */}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                {/* Contact Menu Item */}
                <li className="nav-item">
                    <a href="#contact">Contact</a> {/* Link to the Contact section */}
                </li>
            </ul>
        </nav>
    );
}
