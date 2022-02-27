import React from 'react';
import "./DisplayerStyle.css"
import Card from "../Card/Card";
import swimmer from "../Card/swimmer.png"
import wedding from "../Card/wedding.png"
import bike from "../Card/mountain-bike.png"

const CardDisplayer = () => {
    return (
        <div className={"card-displayer"}>
            <Card
                status = "Sold Out"
                cardImg= {swimmer}
                rating = "5.0"
                reviews = "6"
                country = "USA"
                description = "Life lessons with Katie Zaferes"
                price = "136"
            />
            <Card
                status = "Online"
                cardImg = {wedding}
                rating = "5.0"
                reviews = "30"
                country = "USA"
                description = "Learn wedding photography"
                price = "125"
            />
            <Card
                status = "none"
                cardImg = {bike}
                rating = "4.8"
                reviews = "2"
                country = "USA"
                description = "Group Mountain Biking"
                price = "50"
            />
        </div>
    );
};

export default CardDisplayer;
