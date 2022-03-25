import React from 'react';
import "./FormStyle.css"

const Form = () => {

    const [formData, setFormData] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comments:"",
            checkbox:false,
            employment:"",
            color: ""
        }
    )

    const handleChange = (event) => {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={"name-form"}>

                <label htmlFor={"first-name-input"}>First Name:</label>
                <input
                    onChange={handleChange}
                    className={"name-input"}
                    id={"first-name-input"}
                    type={"text"}
                    name="firstName"
                    value={formData.firstName}
                />

                <label htmlFor={"last-name-input"}>Last Name:</label>
                <input
                    onChange={handleChange}
                    className={"name-input"}
                    id={"last-name-input"}
                    type={"text"}
                    name="lastName"
                    value={formData.lastName}
                />

                <label htmlFor={"email-input"}>Email:</label>
                <input
                    onChange={handleChange}
                    className={"name-input"}
                    id={"email-input"}
                    type={"email"}
                    name="email"
                    value={formData.email}
                />

                <label htmlFor={"comment-input"}>Comments:</label>
                <textarea
                    className={"comment-input"}
                    onChange={handleChange}
                    id={"comment-input"}
                    name="comments"
                    value={formData.comments}
                />

                <label htmlFor={"checkbox-input"}>Friendly?</label>
                <input
                    type={"checkbox"}
                    className={"checkbox-input"}
                    onChange={handleChange}
                    id={"checkbox-input"}
                    name="checkbox"
                    checked={formData.checkbox}
                />


                <fieldset className={"radios"}>

                    <legend>Current employment status</legend>

                    <div className={"radio-button"}>
                        <input
                            className={"radio-button"}
                            type={"radio"}
                            id={"unemployed"}
                            name="employment"
                            value={"unemployed"}
                            checked={formData.employment === "unemployed"}
                            onChange={handleChange}
                        />

                        <label htmlFor={"unemployed"}>Unemployed</label>
                    </div>
                    <div className={"radio-button"}>
                        <input
                            className={"radio-button"}
                            type={"radio"}
                            id={"part-time"}
                            name="employment"
                            value={"part-time"}
                            checked={formData.employment === "part-time"}
                            onChange={handleChange}
                        />

                        <label htmlFor={"part-time"}>Part-time</label>
                    </div>
                    <div className={"radio-button"}>
                        <input
                            className={"radio-button"}
                            type={"radio"}
                            id={"full-time"}
                            name="employment"
                            value={"full-time"}
                            checked={formData.employment === "full-time"}
                            onChange={handleChange}
                        />

                        <label htmlFor={"full-time"}>Full-time</label>
                    </div>

                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select
                    id="favColor"
                    value={formData.color}
                    onChange={handleChange}
                    name={"color"}
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button>Submit</button>

            </form>
        </div>
    );
};

export default Form;
