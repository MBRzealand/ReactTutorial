import React from 'react';
import "./DisplayerStyle.css"
import fuji from "../LocationCard/fuji.png"
import sydney from "../LocationCard/sydney.png"
import geirangerfjord from "../LocationCard/geirangerfjord.png"

import LocationCard from "../LocationCard/LocationCard";

const CardDisplayer = () => {
    return (
        <div className={"card-displayer"}>

            <LocationCard
                image = {fuji}
                country = "JAPAN"
                location = "Mount Fuji"
                startDate = "12 Jan, 2021"
                endDate = "24 Jan, 2021"
                description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />

            <hr/>

            <LocationCard
                image = {sydney}
                country = "AUSTRALIA"
                location = "Sydney Opera House"
                startDate = "27 May 2021"
                endDate = "8 Jun, 2021"
                description = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />

            <hr/>

            <LocationCard
                image = {geirangerfjord}
                country = "NORWAY"
                location = "Geirangerfjord"
                startDate = "1 Oct, 2021"
                endDate = "18 Nov, 2021"
                description = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            />
        </div>
    );
};

export default CardDisplayer;
