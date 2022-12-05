import "./CreatePad.css"
import React, { useState, useEffect } from 'react';

import { get } from "../../utils/fetch"

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
        localStorage.setItem('Pad', formData.projectName);


        // const data = async () => {
        //     try { 
        //         const response = await fetch('/api/pad');
        //         const json = await response.json();
        //         console.log('fetch request:');
        //         console.log(json);
        //     } catch (err) {
        //         console.log('error');
        //         console.log(err);
        //     }
        // }

        // api/pad returns the component, not the api (it's looking for localhost:3000/api/pad, not localhost:3001 which is the api address)
        // const data = await fetch('http://localhost:3001/api/pad');
        // const json = await data.json();
        // console.log(json);

        let data = get('pad', 1);

        console.log('Data:');
        console.log(data)

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