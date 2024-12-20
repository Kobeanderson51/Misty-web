import React, { useState } from 'react';
import './qa.css';

export default function QA() {
    const [openAnswers, setOpenAnswers] = useState([]);

    const toggleAnswer = (index) => {
        // Check if the clicked index is already in the array
        if (openAnswers.includes(index)) {
            // If yes, remove it (close the answer)
            setOpenAnswers(openAnswers.filter(i => i !== index));
        } else {
            // If no, add it (open the answer)
            setOpenAnswers([...openAnswers, index]);
        }
    };

    const qaData = [
        {
            question: "Why did you choose your profession?",
            answer: `After working in a couple of HR roles, I started attending school and studied business with an emphasis on human resources. At that time, I began a new role in HC, which included recruiting, onboarding, and employee relations. I had an amazing boss who mentored me, and I learned more from her than anyone.
            
            She allowed me to sit in meetings, listen in on counseling with employees, and work with EEOC claims, litigations, and anything she thought was good for me to learn. She was not afraid of teaching me everything she knew. When she retired, I was promoted to HR director. I have never regretted my choice to follow in her footsteps and am still very close to her. I feel she impacted my life more than anyone.`
        },
        {
            question: "Who are your main influences?",
            answer: `The first boss I had in HR was my biggest influence; she helped me grow personally, not only in the workplace but as an adult. She taught me what true leadership is.`
        },
        {
            question: "Describe your greatest accomplishment?",
            answer: `Completing an Iron Man was the toughest challenge I’ve faced, both mentally and physically. Despite rigorous training, I lacked the best tools for the race: I didn’t have a triathlon bike, taught myself to swim, and even wore nose plugs during the event. My mind often urged me to quit, making me doubt my strength to finish. However, I had to dig deep, reminding myself that I can overcome difficult challenges and never give up. This accomplishment significantly contributed to my personal and professional growth.

            Still, my greatest personal achievement is raising my two successful daughters, who have positively impacted those they serve.`
        },
        {
            question: "What are you working on right now?",
            answer: `I am a lifelong learner. I enjoy learning and reading. I am also in the middle of writing my family history/biography with my siblings for our family. We had an interesting childhood, and I know my children will appreciate knowing the challenges our family went through.`
        },
        {
            question: "Which recent projects are you proud of?",
            answer: `I wrote a playbook for leaders to help them understand and utilize the employee satisfaction survey. This playbook was used by over 400 leaders, which I trained in person and using MS Teams.`
        },
        {
            question: "Do you live by any piece of advice or motto?",
            answer: `Integrity. It is something that is done no matter if people are watching you or not. Integrity will define your thoughts, which define your actions, and then this defines your reputation.

            One of my favorite quotes is from Mother Teresa:
            "Let no one ever come to you without leaving better and happier. Be the living expression of God’s kindness; kindness in your face, kindness in your eyes, kindness in your smile, kindness in your warm greeting. Go out into the world today and love the people you meet."`
        },
        {
            question: "What are you passionate about?",
            answer: `I am passionate about family. I believe if you cannot take care of yourself mentally or physically, you cannot give 100% to anyone or any company.

            I am passionate about helping others, especially when it comes to substance abuse. I am not a provider, but I can have empathy and lead someone to help when they are ready for it.

            I also want mental health to be spoken about in every family, at the dinner table, in the car, or wherever it can be. Mental health is not spoken about enough; it is a disease, and we need to help our society become aware of its signs and symptoms.`
        },
        {
            question: "What behavior or personality trait do you most attribute to your success, and why?",
            answer: `Determination. Hard work, honesty, and never giving up on your dreams.`
        },
        {
            question: "Do you have a favorite season?",
            answer: `Spring. I love the renewal spring offers each year with the flowers and blossoms on the trees.`
        },
        {
            question: "What life circumstance has most shaped your worldview?",
            answer: `I was raised very poor, moved a lot as a child, and was even homeless at times when I was very young. Because I was raised very poor, with both of my parents being addicts (my mom is 30+ years clean and sober), I learned early to be responsible for myself. It made me determined to live my life completely differently.

            Neither of my parents had a college degree, and I assumed it wasn’t an option for me until I had a conversation with my history teacher during my senior year of high school. After asking if I would be attending college, he said to me, “You can be anything you want; you just have to believe in yourself. You can go to college; you just need to find a way; I believe in you.”

            Ten years ago, I called that history teacher and left a message on his voicemail to let him know how he impacted my life. I hope to be impactful on others’ lives the way he was for me. I want to leave that same type of legacy.`
        },
        {
            question: "If you were an action figure, what accessories would you be sold with?",
            answer: `I would be sold with a mountain bike.`
        }
    ];

    return (
        <div className="qa-container">
            <h3 className="qa-title">Q & A</h3>
            <div className="qa-content">
                {qaData.map((qa, index) => (
                    <div key={index} className="qa-item">
                        <div
                            className="question"
                            onClick={() => toggleAnswer(index)}
                        >
                            {qa.question}
                        </div>
                        {openAnswers.includes(index) && (
                            <div className="answer">{qa.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
