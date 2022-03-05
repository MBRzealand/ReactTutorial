import React from 'react';
import globe from "./globe.png"
import "./NavStyle.css"

const NavBar = () => {
    return (
        <div className={"nav-bar"}>
                <img className={"image"} src={globe} alt={"globe icon"}/>
                <h3 className={"nav-title"}>my travel journal.</h3>
        </div>
    );
};

export default NavBar;