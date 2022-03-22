import React from 'react';
import "./SiteStyle.css"
import Counter from "./Counter/Counter";

const Site = () => {

    const [number,setNumber] = React.useState(0)

    const addFunction = () => {
      setNumber(prevCount => prevCount + 1)
    }

    const minusFunction = () => {
        setNumber(prevCount => prevCount - 1)
    }

    return (
        <div className={"full-site"}>
            <Counter
                number = {number}
            />
            <button onClick={minusFunction} className={"minus-button"}>-</button>
            <button onClick={addFunction} className={"plus-button"}>+</button>
        </div>
    );

};

export default Site;
