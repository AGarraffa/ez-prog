import "./createWell.css";
import React, { useState } from "react";
// import the tops component
// figure out how to import the the CRUD from Sequelize rather than apollo (as is the case in the project);

// store input changes in local storage for ease of access. maybe hash it first

// well name
// API #
// field
// county
// project (pull from db and/or localstorage)
// pad name (pull from db and/or localstorage)
// SHL section, twnshp, rng, lat/long
// BHL section, twnshp, rng, lat/long
// SHL and BHL footage (dropdown for FEL/FWL and FNL/FSL)
// target formation
// tops (separate component for tops)
// estimated TD

export default function createWell() {

    const [formData, setFormData] = useState();

    const handleInputChange= (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("Well Submitted");

    }

    //inster auth middleware
    // if (Auth.loggedIn()) {
        return (
            <div>
                {/* insert form */}
            </div>
        )
    // } else {
    //     return <Login />
    // }
};