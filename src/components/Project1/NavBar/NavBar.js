import React from 'react';
import ReactImage from "./logo192.png"
import "./NavStyle.css"

const NavBar = () => {
    return (
        <div className={"nav-bar"}>
            <div className={"logo"}>
                <img className={"image"} src={ReactImage} alt={"react icon"}/>
                <h3 className={"text"} > ReactFacts</h3>
            </div>
            <h4 className={"nav-title"}> React Course - Project 1</h4>
        </div>
    );
};

export default NavBar;