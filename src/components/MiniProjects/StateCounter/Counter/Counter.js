import React from 'react';
import "./CounterStyle.css"


const Counter = (props) => {
    return (
        <div>
            <p className={"result"}>{props.number}</p>
        </div>
    );
};

export default Counter;
