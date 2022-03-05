import React from 'react';
import NavBar from "./NavBar/NavBar";
import ImageGroup from "./ImageGroup/ImageGroup";
import Description from "./Description/Description";
import CardDisplayer from "./CardDisplayer/CardDisplayer";
import "./SiteStyle.css"


const Site = () => {
    return (
        <div className={"full-site"}>
            <NavBar/>
            <ImageGroup/>
            <Description/>
            <CardDisplayer/>
        </div>
    );
};

export default Site;
