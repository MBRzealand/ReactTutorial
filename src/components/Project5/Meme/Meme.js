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
        console.log(formData)
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
            <button className={"form-button"} onClick={generateImage}>Get a new meme image  🖼</button>
            <form onSubmit={handleSubmit} className={"meme-form"}>
                <div className={"inputs"}>
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
                        className={"form-input"}
                        onChange={handleChange}
                        value={formData.bottomText}
                        name={"bottomText"}
                    />
                </div>
                <button className={"form-button"}>Submit Meme</button>
            </form>

            <div className={"meme-container"}>
                <img
                    onChange={handleChange}
                    name={"img"}
                    src={formData.img}
                    className={"meme-display"}/>
                <p className={"top-text"}>{formData.topText}</p>
                <p className={"bottom-text"}>{formData.bottomText}</p>
            </div>
        </div>
    );
};

export default Meme;
