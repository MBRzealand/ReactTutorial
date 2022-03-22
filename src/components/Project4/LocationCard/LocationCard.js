import React from 'react';
import gps from "./gps.png"
import "./LocationStyle.css"

const LocationCard = (props) => {
    return (
        <div className={"location-card"}>
            <img className={"location-image"} src={props.image}/>
            <div className={"text-container"}>
                <div className={"location"}>
                    <img src={gps}/>
                    <p className={"country"}>{props.country}</p>
                    <a className={"google-maps"} href={props.google}>View on Google Maps</a>
                </div>
                <h1 className={"location-title"}>{props.location}</h1>
                <p className={"visit-date"}>{props.startDate} - {props.endDate}</p>
                <p className={"location-description"}>{props.description}</p>
            </div>
        </div>
    );
};

export default LocationCard;