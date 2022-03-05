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
                    <a className={"google-maps"} href={"https://www.google.dk/maps/place/Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,+Japan/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=2ahUKEwjqqKHQu6T2AhUxpIsKHbhBA3EQ8gF6BAgaEAE"}>View on Google Maps</a>
                </div>
                <h1 className={"location-title"}>{props.location}</h1>
                <p className={"visit-date"}>{props.startDate} - {props.endDate}</p>
                <p className={"location-description"}>{props.description}</p>
            </div>
        </div>
    );
};

export default LocationCard;
