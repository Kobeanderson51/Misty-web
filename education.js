import React from 'react';
import './education.css';

export default function Education() {
    return (
        <>
            <h2 className="eduh2">Education</h2>
            <div className="edu-bg-img">
                <div className="edu-content">
                    <h3 className="edu-degree">Master of Business Administration</h3>
                    <h3 className="edu-degree">Bachelor of Science (BS) in Business Management</h3>
                    <img 
                        src="/images/uopx-sig-print-stack-red-300x127.png" 
                        alt="University of Phoenix" 
                        className="company-logo"
                    />
                </div>
            </div>
        </>
    );
}
