import React from 'react';
import "./SiteStyle.css"

const SiteContent = (props) => {
    return (
        <div className={"site-content"}>
            <h4 className={"site-text"}>Welcome Back, {props.user} </h4>
        </div>
    );
};

export default SiteContent;
