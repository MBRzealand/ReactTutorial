import React from 'react';
import "./SiteStyle.css"
import boxData from "./BoxData";
import Box from "./Box/Box";

const Site = () => {

    const [boxArray,setBoxArray] = React.useState(boxData)


    const toggleColor = (boxID) => {
        setBoxArray(prevList => {
            return prevList.map((box) => {
                return box.id === boxID ? {...box, on: !box.on} : box
            })
        })
    }

    const boxes = boxArray.map(box =>
        <Box
            key = {box.id}
            id = {box.id}
            on = {box.on}
            handleClick={toggleColor}
        />
    )

    return (
        <div className={"full-site"}>

            <h1>Boxes will go here</h1>
            {boxes}

        </div>
    );

};

export default Site;