import "./CreateSection.css"
import React, { useState } from "react";

export default function CreateSection() {

    const [formData, setFormData] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log("Section Submitted");
        console.log(formData);
        localStorage.setItem('township', formData.township);
        localStorage.setItem('range', formData.range);
        localStorage.setItem('section', formData.section);
        localStorage.setItem('width', formData.width);
        localStorage.setItem('height', formData.height);

        //clears Form
        setFormData("")

    };

    //insert augh middleware
    // if (Auth.loggedIn()) {
        return(
            <div>
                <form className="section-form" onSubmit={submitHandler}>
                    <input
                      className="section-input"
                      type="text"
                      placeholder="Township"
                      value={formData.township ?? ""}
                      name="township"
                      onChange={handleInputChange}
                    ></input>

                    <input
                      className="section-input"
                      type="text"
                      placeholder="Range"
                      value={formData.range ?? ""}
                      name="range"
                      onChange={handleInputChange}
                    ></input>
                    
                    <input
                      className="section-input"
                      type="text"
                      placeholder="Section"
                      value={formData.section ?? ""}
                      name="section"
                      onChange={handleInputChange}
                    ></input>

                    <input
                      className="section-input"
                      type="text"
                      placeholder="Width"
                      value={formData.width ?? ""}
                      name="width"
                      onChange={handleInputChange}
                    ></input>
                    
                    <input
                      className="section-input"
                      type="text"
                      placeholder="Height"
                      value={formData.height ?? ""}
                      name="height"
                      onChange={handleInputChange}
                    ></input>

                    <div>
                        <input type="submit" value="Add Section" className="submitButton" />
                    </div>

                </form>
            </div>
        )
    // } else {
    //     return <Login />
    // }
};

