import React from 'react';
import Airbnb from "./airbnb.png"
import "./NavStyle.css"

const NavBar = () => {
    return (
        <div className={"nav-bar"}>
                <img className={"image"} src={Airbnb} alt={"react icon"}/>
        </div>
    );
};

export default NavBar;