import React from 'react';
import Image from 'next/image';
import './bio.css';
import image from '../../../public/images/headshot.png';

export default function Bio() {
    return (
        <div className='bg-image'>
            <div className="bio">
                <div className="left-content">
                    <h2>Misty Birch</h2>
                    <h3>Senior HR Leader</h3>
                    <p>
                        Accomplished HR leader driving strategic initiatives that transform culture, boost employee
                        engagement, and optimize operations on a large scale. Adept at overseeing HR functions for
                        thousands of employees, implementing strategies to minimize turnover, and leveraging HRIS to
                        streamline processes. Navigate complex labor relations, fostering regulatory compliance, and
                        collaborating with senior leadership to align HR strategies.
                    </p>
                    <p>Currently located in Hurricane, UT.</p>
                    <button>Resume</button>
                    <button>Bio</button>
                </div>
                <div className="right-content">
                    <Image src={image} alt="Profile" className="profile-image" />
                </div>
            </div>
        </div>
    );
}
