import React from 'react';
import "./SiteStyle.css"
import JokeData from "./JokeData";
import Joke from "./Joke/Joke";

const Site = () => {

    const [jokeArray,setJokeArray] = React.useState(JokeData)

    const jokes = jokeArray.map(joke =>
        <Joke
            key = {joke.id}
            id = {joke.id}
            setup = {joke.setup}
            punchline = {joke.punchline}
        />
    )

    return (
        <div className={"full-site"}>
            {jokes}
        </div>
    );

};

export default Site;