import React from 'react';
import "./JokeStyle.css"

const Joke = (props) => {

    const [display,setDisplay] = React.useState(false)

    const showPunchline = () => {
      setDisplay(prevDisplay => !prevDisplay)
    }

    return (
        <div>
            <p className={"joke-setup"}>{props.setup}</p>
            {display && <p className={"joke-punchline"}>{props.punchline}</p>}
            <button onClick={showPunchline}>{display ? "Hide" : "Show"} Punchline</button>
        </div>
    );
};

export default Joke;
