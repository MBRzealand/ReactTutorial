import React from 'react';
import Images from './ImageGroup.png'
import "./GroupStyle.css"

const ImageGroup = () => {
    return (
        <div className={"Group"}>
           <img className={"GroupImage"} src={Images}/>
        </div>
    );
};

export default ImageGroup;
