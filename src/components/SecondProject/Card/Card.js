import React from 'react';
import Buttons from "../Buttons/Buttons";
import ProfilePicture from "./profile.png"
import Name from "../Name/Name";
import "./CardStyle.css"
import SocialMediaFooter from "../Footer/SocialMediaFooter";
import About from "../About/About";


const Card = () => {
    return (
        <div className={"profile-card"}>
            <img className={"profile-picture"} src={ProfilePicture}/>
            <Name/>
            <Buttons/>
            <About/>
            <SocialMediaFooter/>
        </div>
    );
};

export default Card;
