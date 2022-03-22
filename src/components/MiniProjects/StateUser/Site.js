import React from 'react';
import "./SiteStyle.css"
import NavBar from "./NavBar/NavBar";
import SiteContent from "./SiteContent/SiteContent";

const Site = () => {

    const [name,setName] = React.useState("___")


    return (
        <div className={"full-site"}>
            <NavBar
                user = {name}
            />
            <SiteContent
                user = {name}
            />
        </div>
    );

};

export default Site;