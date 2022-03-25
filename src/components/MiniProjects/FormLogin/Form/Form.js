import React from 'react';
import "./FormStyle.css"

const Form = () => {

    const [formData, setFormData] = React.useState({
        email:"",
        password:"",
        confirmation: "",
        newsletter: false
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData.password === formData.confirmation ? "Sucessfully signed up" : "passwords do not match")
        if (formData.newsletter){
            console.log("Thanks for signing up for our newsletter!")
        }
        console.log(formData)
    }

    const handleChange = (event) => {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className={"form-container"}>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                    name={"email"}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    onChange={handleChange}
                    name={"password"}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name={"confirmation"}
                    value={formData.confirmation}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        name={"newsletter"}

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Form;
