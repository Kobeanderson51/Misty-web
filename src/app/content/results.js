import React from 'react';
import './results.css';

export default function Results() {
    return (
        <div className='res-bg-img'>
            <div className='res-content'>
                <h1>Results</h1>
                <div className='res-grid'>
                    <div className='res-card'>
                        <img src="/images/blue-puzzle-piece-hi.png" />
                        <p>Reduced division turnover by 11% enhancing employee engagement and satisfaction.</p>
                    </div>
                    <div className='res-card'>
                         <img src="/images/—Pngtree—vector money saving icon_4184467.png" />
                        <p>Leveraged data-driven insights to drive retention, engagement, and performance strategies for 12K+ employees.</p>
                    </div>
                    <div className='res-card'>
                        <img src="/images/—Pngtree—gear icon_4422407.png" />
                        <p>Headed division-wide cultural training across 23 facilities, boosting collaboration and operational excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
