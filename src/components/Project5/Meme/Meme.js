import React from 'react';
import "./MemeStyle.css"
import memeData from "../MemeData"

const Meme = () => {

    const [meme, setMeme] = React.useState({
        img : "",
        bottomText : "",
        topText : "",
    })

    const [allImages, setAllImages] = React.useState(memeData)



    const getMeme = () => {

        const randNum = Math.floor(Math.random() * allImages.data.memes.length)


        const url = allImages.data.memes[randNum].url

            setMeme(prevMeme => ({
                img: url,
                bottomText: "",
                topText: ""
            }))
    }


    return (
        <div className={"meme"}>
            <div className={"meme-form"}>
                <input
                    type="text"
                    placeholder={"Top text"}
                    className={"form-input"}
                />
                <input
                    type="text"
                    placeholder={"Bottom text"}
                    className={"form-input"}/>
            </div>
            <button onClick={getMeme} className={"form-button"}>Get a new meme image  🖼</button>
            <img className={"meme-display"} src={meme.img}/>
        </div>
    );
};

export default Meme;
