import React from 'react';
import "./AboutStyle.css"

const About = () => {
    return (
        <div className={"about"}>
            <div>
                <h5>About</h5>
                <p className={"about-me"}>I'm a person who enjoys learning complex concepts, i have studied math at university before delving into the programming world</p>
            </div>
            <div>
                <h5>Interests</h5>
                <p className={"interests"}>I'm interested in a ton of different subjects, ranging from machine learning to music, and programming to petting cats</p>
            </div>
        </div>
    );
};

export default About;
