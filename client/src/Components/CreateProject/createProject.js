import "./CreateProject.css";
import React, { useState } from 'react';

import { get, post, update, erase } from '../../utils/fetch';

// store input changes in local storage for ease of access. maybe hash it first

export default function CreateProject() {

    const [formData, setFormData] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    // connect this to the back end
    const submitHandler = async (e) => {

        e.preventDefault();

        console.log ("Project Submitted")
        console.log(formData);
        localStorage.setItem('Project', formData.projectName);

        let data = {
            name: formData.projectName
        }

        post('company', data);

        //clears Form
        setFormData("")
    }

    // insert auth middleware
    // if (Auth.loggedIn()) {
        return (
            <div>
                <form className="project-form" onSubmit={submitHandler}>
                    <input
                        className="project-name-input"
                        type="text"
                        placeholder="Project Name"
                        value={formData.projectName ?? ""}
                        name="projectName"
                        onChange={handleInputChange}
                        ></input>
                    <div>
                        <input type="submit" value="Add Project" className="submitButton" />
                    </div>
                </form>
            </div>
        );
        // } else {
        //     return <Login />;
        // }
}