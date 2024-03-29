import "./CreateWell.css";
import React, { useState } from "react";

import { get, post, update, erase } from '../../utils/fetch';
// import the tops component
// import SHL/BHL component

// figure out how to import the the CRUD from Sequelize rather than apollo (as is the case in the project);

// store input changes in local storage for ease of access. maybe hash it first

// project (pull from db and/or localstorage)
// pad name (pull from db and/or localstorage)\

// SHL section, twnshp, rng, lat/long (from component)
// BHL section, twnshp, rng, lat/long (from component)
// SHL and BHL footage (dropdown for FEL/FWL and FNL/FSL include in component)

// create a section model in the DB so section dimensions can be saved (width/height to be used when rendering the plan view)
 
// tops (separate component for tops)

export default function CreateWell() {

    const [formData, setFormData] = useState("");

    const handleInputChange= (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log("Well Submitted");
        console.log(formData)
        // localStorage.setItem('wellMame', formData.wellName);
        // localStorage.setItem('api', formData.api);
        // localStorage.setItem('target', formData.tgtFormation);
        // localStorage.setItem('td', formData.td);

        
        for( const property in formData) {
            localStorage.setItem(`${property}`, `${formData[property]}`);
        }

        // typeLog should be a dropdown of existing wells that you can pull tops from.
        let data = {
            name: formData.wellName,
            api: formData.api,
            kb: formData.kb,
            elev: formData.elev,
            tgtFormation: formData.tgtFormation,
            td: formData.td,
            rig: formData.rig,
            pad_id: 1,
            typeLog: 1,
            drilled: false,
            typelog: false,

        }

        post('well', data);

        //clears Form
        setFormData("")

    }

    //instert auth middleware
    // if (Auth.loggedIn()) {
        return (
            <div>
                {/* insert form */}
                 <form className="well-form" onSubmit={submitHandler}>
                    <input
                     className="well-input"
                     type="text"
                     placeholder="Well Name"
                     value={formData.wellName ?? ""}
                     name="wellName"
                     onChange={handleInputChange}
                    ></input>

                    <input
                     className="well-input"
                     type="text"
                     placeholder="API Number"
                     value={formData.api ?? ""}
                     name="api"
                     onChange={handleInputChange}
                    ></input>

                    <input
                     className="well-input"
                     type="text"
                     placeholder="KB Height"
                     value={formData.kb ?? ""}
                     name="kb"
                     onChange={handleInputChange}
                    ></input>

                    <input
                     className="well-input"
                     type="text"
                     placeholder="Ground Elevation"
                     value={formData.elev ?? ""}
                     name="elev"
                     onChange={handleInputChange}
                    ></input>
                                    
                    {/* insert the hole location component here */}

                    {/* insert tops component here */}

                    <input
                     className="well-input"
                     type="text"
                     placeholder="Target Formation"
                     value={formData.tgtFormation ?? ""}
                     name="tgtFormation"
                     onChange={handleInputChange}
                    ></input>
                    {/* ultimately this should be a dropdown populated by tops from the db tied to the project   */}
                                        
                    <input
                     className="well-input"
                     type="text"
                     placeholder="Estimated TD"
                     value={formData.td ?? ""}
                     name="td"
                     onChange={handleInputChange}
                    ></input>

                    <input
                     className="well-input"
                     type="text"
                     placeholder="Rig"
                     value={formData.rig ?? ""}
                     name="rig"
                     onChange={handleInputChange}
                    ></input>

                    {/* add checkboxes for drilled and typelog */}

                    <div>
                        <input type ="submit" value= "Add Well" className="submitButton" />
                    </div>

                 </form>
            </div>
        )
    // } else {
    //     return <Login />
    // }
};