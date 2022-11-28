import "./CreatePad.css"
import React, { useState, useEffect } from 'react';

// store input changes in local storage for ease of access. maybe hash it first

export default function CreatePad() {

    const [formData, setFormData] = useState("");

    useEffect(() => {
        const url = '/api/project';

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }


    // connect to back end
    const submitHandler = async (e) => {

        e.preventDefault();

        console.log ("Pad Submitted");
        console.log(formData);
        localStorage.setItem('Pad', formData.projectName);

        //clears Form
        setFormData("")
    }

    // insert auth middleware
    // if (Auth.loggedIn()) {
        return (
            <div>
                <form className="pad-form" onSubmit={submitHandler}>
                    <input 
                     className="pad-input"
                     type="text"
                     placeholder="Pad Name"
                     value={formData.padName ?? ""}
                     name="padName"
                     onChange={handleInputChange}
                     ></input>

                     {/* input county */}
                     <div>
                        <input type="submit" value="Add Pad" className="submitButton" />
                     </div>
                </form>
            </div>
        );
    // } else {
    //     return <Login />
    // }
}