import React from 'react';
import "./DisplayerStyle.css"

import LocationCard from "../LocationCard/LocationCard";

import data from "../data";

const CardDisplayer = () => {
    const cards = data.map(card =>{
        return(
            <LocationCard
                key={card.id}
                {...card}
            />
        )
    })

    return (
        <div className={"card-displayer"}>
            {cards}
        </div>
    );
};

export default CardDisplayer;
