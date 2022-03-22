import React from 'react';
import "./SiteStyle.css"
import NavBar from "./NavBar/NavBar";
import Meme from "./Meme/Meme"


const Site = () => {
    return (
        <div className={"full-site"}>
            <NavBar/>
                <main>
                    <Meme/>
                </main>
        </div>
    );
};

export default Site;
