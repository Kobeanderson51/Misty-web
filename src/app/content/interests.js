import React from 'react';
import './interests.css';

export default function Interests() {
    return (
        <div className='int'>
            <h3>Interests & Hobbies</h3>
            <div className='imgs'>
                <div className='img-container'>
                    <img src='\images\Hiking-water.jpg' alt='Interest 1' className='interest-img' />
                    <p className='img-caption'>Running, Mountain Biking & Hiking</p>
                </div>
                <div className='img-container'>
                    <img src='\images\Boat-480x272.jpg' alt='Interest 2' className='interest-img' />
                    <p className='img-caption'>Boating</p>
                </div>
                <div className='img-container'>
                    <img src='\images\Paddleboard-480x320.jpg' alt='Interest 3' className='interest-img' />
                    <p className='img-caption'>Paddle Boarding</p>
                </div>
            </div>
        </div>
    );
}
