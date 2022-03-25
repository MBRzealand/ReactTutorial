import React from 'react';
import "./MemeStyle.css"
import memeData from "../MemeData"

const Meme = () => {

    const [formData, setFormData] = React.useState({
        img : "",
        bottomText : "",
        topText : "",
    })

    const [allImages, setAllImages] = React.useState(memeData)


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const generateImage = () => {

        const randNum = Math.floor(Math.random() * allImages.data.memes.length)
        const url = allImages.data.memes[randNum].url

      setFormData(prevFormData => {
          return {
              ...prevFormData,
              img: url
          }
      })
    }

    return (
        <div className={"meme"}>
            <form onSubmit={handleSubmit} className={"meme-form"}>
                <input
                    type="text"
                    placeholder={"Top text"}
                    className={"form-input"}
                    onChange={handleChange}
                    value={formData.topText}
                    name={"topText"}
                />
                <input
                    type="text"
                    placeholder={"Bottom text"}
                    className={"form-input"}/>
                    onChange={handleChange}
                    value={formData.bottomText}
                    name={"topText"}
                <button onClick={handleSubmit} className={"form-button"}>Get a new meme image  🖼</button>
            </form>

            <img
                onChange={handleChange}
                src={formData.img}
                name={"img"}
                className={"meme-display"}/>

            <button onClick={generateImage}>generate image</button>

        </div>
    );
};

export default Meme;
