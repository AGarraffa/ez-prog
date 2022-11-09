import "./createPad.css";
import React, { useState } from 'react';

// store input changes in local storage for ease of access. maybe hash it first

export default function createPad() {

    const [formData, setFormData] = useState();

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData( { ...formData, [name]: value});
    }


    // connect to back end
    const submitHandler = async (e) => {

        e.preventDefault();

        console.log("Pad Submitted");

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
                     value={formData.value}
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