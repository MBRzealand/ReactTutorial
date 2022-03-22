import React from 'react';
import "./SiteStyle.css"

const Site = () => {

    const [answer,setAnswer] = React.useState(true)

    const answerFunction = () => {
        setAnswer(prevAnswer => !prevAnswer)
    }


    return (
        <div className={"full-site"}>
            <p>Do you feel like<br/> going out<br/> tonight?</p>
            <p onClick={answerFunction} className={"result"}>{answer ? "Yes" : "No"}</p>
        </div>
    );

};

export default Site;
