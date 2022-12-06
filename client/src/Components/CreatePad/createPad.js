import "./CreatePad.css"
import React, { useState, useEffect } from 'react';

import { get, post, update, erase } from "../../utils/fetch"

// store input changes in local storage for ease of access. maybe hash it first

export default function CreatePad() {

    const [formData, setFormData] = useState("");


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }


    // connect to back end
    const submitHandler = async (e) => {

        e.preventDefault();

        console.log ("Pad Submitted");
        console.log(formData);
        localStorage.setItem('Pad', formData.padName);

        let data = {
            name: formData.padName,
            // make sure to pull all the up-model data (company name, project, etc);
            company_id: 1,
            state: 'ND',
            county: 'Williston',
            field: 'Fort Berthold',
            project_id: 1,
        }

        post('pad', data);

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

                     {/* input state, county, etc */}
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