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

        //set's object to local storage for easier reference
        for( const property in formData) {
            localStorage.setItem(`${property}`, `${formData[property]}`);
        }
        // localStorage.setItem('Pad', formData.padName);
        // localStorage.setItem('State', formData.state);
        // localStorage.setItem('County', formData.county);
        // localStorage.setItem('')

        let data = {
            name: formData.padName,
            // pull project and company id's from the server upon login.
            company_id: 1,
            state: formData.state,
            county: formData.county,
            field: formData.field,
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
                     <input 
                     className="pad-input"
                     type="text"
                     placeholder="State"
                     value={formData.state ?? ""}
                     name="state"
                     onChange={handleInputChange}
                     ></input>
                    
                    <input 
                     className="pad-input"
                     type="text"
                     placeholder="County"
                     value={formData.county ?? ""}
                     name="county"
                     onChange={handleInputChange}
                     ></input>
                     
                     <input 
                     className="pad-input"
                     type="text"
                     placeholder="Field"
                     value={formData.field ?? ""}
                     name="field"
                     onChange={handleInputChange}
                     ></input>                  

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