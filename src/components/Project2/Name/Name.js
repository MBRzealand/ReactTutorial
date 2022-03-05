import React from 'react';
import "./NameStyle.css"

const Name = () => {
    return (
        <div className={"name"}>
            <h2 className={"full-name"}>Mikkel Boye Rasmussen</h2>
            <h4 className={"job-title"}>Full-Stack developer (MERN)</h4>
            <h5><a className={"website-link"} href={"tallboye.com"}>My Website</a></h5>
        </div>
    );
};

export default Name;
