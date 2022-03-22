import React from 'react';
import "./SiteStyle.css"
import user from "./user.png"
import Star from "./Star/Star";
import filledStar from "./star-filled.png"
import emptyStar from "./star-empty.png"

const Site = () => {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !contact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <Star
                        handleClick={toggleFavorite}
                        isFilled = {contact.isFavorite}
                        filled = {filledStar}
                        empty = {emptyStar}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    );

};

export default Site;
