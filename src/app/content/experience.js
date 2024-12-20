import React from 'react';
import './experience.css';

export default function Experience() {
    return (
        <div id="experience">
            <h3 className="experience-ex">Experience</h3> {/* Updated title class name */}

            {/* First Job Experience */}
            <div className="experience-item">
                <div className="left-content-ex"> {/* Updated left-content class name */}
                    <img src="/images/Lifepoint-Health-new-logo.png" alt="LifePoint Health Logo" className="company-logo" />
                </div>
                <div className="right-content-ex"> {/* Updated right-content class name */}
                    <p className="duration-ex">Sep 2022 – Dec 2023</p>  {/* Updated class name */}
                    <p className="title-ex">Assistant Vice President, Human Resources, Western Division (Remote)</p>
                    <p className="description-ex">
                        Strategic partner to the Division President, assuming full ownership of the HR strategy, operations, and initiatives supporting 12k employees across 19 hospitals, with seven locations having multiple Unions.
                    </p>  {/* Updated class name */}
                </div>
            </div>
            <div className="experience-item">
                <div className="left-content-ex"> {/* Updated left-content class name */}
                </div>
                <div className="right-content-ex"> {/* Updated right-content class name */}
                    <p className="duration-ex">Mar 2019 – Sep 2022</p>  {/* Updated class name */}
                    <p className="title-ex">Division HR Director, Mountain Division (Remote)</p>  {/* Updated class name */}
                    <p className="description-ex">
                        Promoted to lead succession planning, talent strategies, change initiatives, organizational performance, training programs, compensation structures, diversity, legal matters, and compliance. Teamed with Talent Operator, CEO/Market President, and leaders to execute business plans and HR strategies. Oversaw 24 indirect reports.
                    </p>  {/* Updated class name */}
                </div>
            </div>
            <div className="experience-item">
                <div className="left-content-ex"> {/* Updated left-content class name */}
                </div>
                <div className="right-content-ex"> {/* Updated right-content class name */}
                    <p className="duration-ex">Jan 2013 – Mar 2019</p>  {/* Updated class name */}
                    <p className="title-ex">Human Resources Director</p>  {/* Updated class name */}
                    <p className="description-ex">
                        Led HR activities, guiding benefits, compensation, employee relations, policies, workers’ compensation, and compliance efforts. Upheld The Joint Commission compliance and operational standards.
                    </p>  {/* Updated class name */}
                </div>
            </div>
            <div className="experience-item">
                <div className="left-content-ex"> {/* Updated left-content class name */}
                </div>
                <div className="right-content-ex"> {/* Updated right-content class name */}
                    <p className="duration-ex">Jan 2014 – Mar 2019</p>  {/* Updated class name */}
                    <p className="title-ex">Business Development Director</p>  {/* Updated class name */}
                    <p className="description-ex">
                        Managed marketing, growth, and outreach programs emphasizing new services to fuel hospital growth. Developed marketing campaigns, overseeing strategic plans and up to $200K budgets to drive revenue and market share.
                    </p>  {/* Updated class name */}
                </div>
            </div>
                <div className="experience-item">
                <div className="left-content-ex"> {/* Updated left-content class name */}
                    <img src="/images/logo.png" alt="Jordan Valley Community Health Center" className="company-logo" />
                </div>
                <div className="right-content-ex"> {/* Updated right-content class name */}
                    <p className="duration-ex">Jan 2006 – Dec 2012</p>  {/* Updated class name */}
                    <p className="title-ex">Human Resources Director</p>
                    <p className="description-ex">
                        Oversaw HR functions, led daily operations and collaborated with administration, management, and staff. Upheld The Joint Commission and Det Norske Veritas (DNV) standards. Optimized performance and employee growth in the Customer Service and Education departments.
                    </p>  {/* Updated class name */}
                </div>
            </div>
        </div>
    );
}
