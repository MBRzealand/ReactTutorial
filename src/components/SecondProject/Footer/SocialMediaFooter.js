import React from 'react';
import "./FooterStyle.css"
import Facebook from "./Facebook.png"
import Instagram from "./Instagram.png"
import GitHub from "./GitHub.png"
import LinkedIn from "./LinkedIn.png"

const SocialMediaFooter = () => {
    return (
        <div className={"social-media-footer"}>
            <a href={"https://www.facebook.com/mikkel.rasmussen.102/"}><img className={"facebook"} src={Facebook}/></a>
            <a href={"go"}><img className={"instagram"} src={Instagram}/></a>
            <a href={"gmm"}><img className={"linkedin"} src={LinkedIn}/></a>
            <a href={"https://github.com/MBRzealand"}><img className={"github"} src={GitHub}/></a>
        </div>
    );
};

export default SocialMediaFooter;
