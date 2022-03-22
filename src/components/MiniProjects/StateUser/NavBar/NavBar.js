import React from 'react';
import "./NavStyle.css"

const NavBar = (props) => {
    return (
        <div className={"nav-bar"}>
            <h4 className={"nav-title"}>Current User: {props.user}</h4>
        </div>
    );
};

export default NavBar;