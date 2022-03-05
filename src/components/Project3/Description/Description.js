import React from 'react';
import "./DescriptionStyle.css"

const title = "Online Experiences"
const description = "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."

const Description = () => {
    return (
        <div className={"description"}>
            <h1 className={"description-title"}>{title}</h1>
            <p className={"description-text"}>{description}</p>
        </div>
    );
};

export default Description;
