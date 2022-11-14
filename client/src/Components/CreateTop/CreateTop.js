import "./CreateTop.css";
import React, { useState } from 'react';

let tops = []

export default function CreateTop() {

    const [formData, setFormData] = useState("");

    // let tops =[]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (e) => {

        e.preventDefault();

        console.log("Top Submitted");
        console.log(formData);
        tops.push(formData.top);
        // console.log(tops)
        localStorage.setItem('tops', JSON.stringify(tops));

        //clears form
        setFormData("");
    };

    //insert auth middleware
    // if (AuthenticatorAssertionResponse.loggedIn()) {
        return (
            <div>
                <form className="tops-form" onSubmit={submitHandler}>
                    <input
                        className="tops-input"
                        type="text"
                        placeholder="Add Top"
                        value={formData.top ?? ""}
                        name="top"
                        onChange={handleInputChange}
                    ></input>

                    <div>
                        <input type="submit" value="Add Top" className="submitButton" />
                    </div>
                </form>
            </div>
        )
    // } else {
    //     return <Login />
    // }
};