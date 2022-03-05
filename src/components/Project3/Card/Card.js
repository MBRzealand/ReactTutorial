import React from 'react';
import "./CardStyle.css"
import Rating from "./star.png"

const Card = (props) => {

    return (
        <div className={"event-card"}>
            {
                props.status === "none" ?
                <p style={{visibility:"hidden"}} className={"status"}>{props.status}</p>
                    :
                <p className={"status"}>{props.status}</p>
            }

            <img className={"event-card-image"} src={props.cardImg}/>
            <div className={"ratings"}>
                <img className={"star"} src={Rating}/>
                <p className={"rating"}>{props.rating}</p>
                <p className={"reviews"}>({props.reviews})</p>
                <p className={"country"}>• {props.country}</p>
            </div>
            <p className={"card-description"}>{props.description}</p>
            <p className={"price"}><span>From ${props.price}</span> / person</p>
        </div>
    );
};

export default Card;
