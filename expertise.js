import React from 'react';
import './expertise.css';

export default function Expertise() {
    return (
        <div className="expertise">
            <h2>Expertise</h2>

            <div className="expertise-boxes">
                {/* First Expertise Box */}
                <div className="expertise-box">
                    <ul>
                        <li>Strategic Human Resource Planning</li>
                        <li>Employee Engagement</li>
                        <li>Organizational Development</li>
                        <li>Talent Management</li>
                        <li>Succession Planning</li>
                        <li>Performance Management</li>
                        <li>HRIS Implementation</li>
                        <li>Data Analysis</li>
                        <li>Employee Relations</li>
                    </ul>
                </div>
                
                {/* Second Expertise Box */}
                <div className="expertise-box">
                    <ul>
                        <li>Labor Relations</li>
                        <li>Union Negotiations</li>
                        <li>Regulatory Compliance</li>
                        <li>Benefits Administration</li>
                        <li>Compensation Strategy</li>
                        <li>Leadership Development</li>
                        <li>Change Management</li>
                        <li>Diversity and Inclusion</li>
                        <li>Workforce Planning</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
