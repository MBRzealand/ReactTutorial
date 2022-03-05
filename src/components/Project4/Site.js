import React from 'react';
import "./SiteStyle.css"
import NavBar from "./NavBar/NavBar";
import CardDisplayer from "./CardDisplayer/CardDisplayer";


const Site = () => {
    return (
        <div className={"full-site"}>
            <NavBar/>
            <CardDisplayer/>
        </div>
    );
};

export default Site;
