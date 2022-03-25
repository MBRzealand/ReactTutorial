import React from 'react';
import "./SiteStyle.css"

const Site = () => {

    const [messages, setMessages] = React.useState([1,3])

    return (
        <div className={"full-site"}>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1>
            }
        </div>
    );

};

export default Site;