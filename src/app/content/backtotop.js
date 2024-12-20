import React from 'react';
import './backtotop.css';

export default function Backtotop() {
    const scrollToTop = () => {
        const bioSection = document.getElementById('bio');
        bioSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button className="back-to-top" onClick={scrollToTop}>
            {/* Add an SVG arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V6m0 0L5 13m7-7l7 7"></path>
            </svg>
        </button>
    );
}
