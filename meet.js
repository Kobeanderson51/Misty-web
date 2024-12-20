import React from 'react';
import './meet.css';

export default function Meet() {
    return (
        <div className="meet">
            <h3>Meet Misty</h3>
            <div className="video-container">
                <video className="meet-video" controls>
                    <source src="\images\Misty-Birch-Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
