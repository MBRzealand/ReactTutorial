import React from 'react';
import "./ContentStyle.css"

const listOfFacts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100K stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps"
]
const facts = listOfFacts.map((fact,index)=><li key={"fact_"+index}><span>{fact}</span></li>)

const MainContent = () => {
    return (
        <div className={"main-content"}>
            <h1 className={"content-title"}>Fun facts about React</h1>
            <ul className={"facts"}>{facts}</ul>
        </div>
    );
};

export default MainContent;
