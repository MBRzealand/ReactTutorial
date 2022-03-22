import React from 'react';
import troll from "./troll.png"
import "./NavStyle.css"

const NavBar = () => {
    return (
        <div className={"nav-bar"}>
            <div className={"title-div"}>
                <img className={"image"} src={troll} alt={"troll face"}/>
                <h3 className={"nav-title"}>Meme Generator</h3>
            </div>
            <h4 className={"sub-title"}>React Course - Project 5</h4>
        </div>
    );
};

export default NavBar;