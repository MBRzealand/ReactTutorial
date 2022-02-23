import React from 'react';
import MailIcon from "./Mail.png"
import "./ButtonsStyle.css"
import LinkedInIcon from "./LinkedIn.png"

const Buttons = () => {
    return (
        <div className={"buttons"}>
            <button className={"left-button"}>
                <img className={"mail-icon"} src={MailIcon}/>
                <p>Email</p>
            </button>
            <button className={"right-button"}>
                <img className={"linkedin-icon"} src={LinkedInIcon}/>
                <p>LinkedIn</p>
            </button>
        </div>
    );
};
export default Buttons;
