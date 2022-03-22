import React from 'react';
import "./BoxStyle.css"

const Box = (props) => {

    const style = {
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div
            onClick={() => props.handleClick(props.id)}
            style={style}
            className={"empty-box"}>
        </div>
    );
};

export default Box;
