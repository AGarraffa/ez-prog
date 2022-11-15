import "./WellTops.css"
import React, { useState } from 'react';

export default function WellTops() {

    // These are just for building out the page. In the final version the tops will populate based on the project tops.
    let testTops = [
        {name: 'Pierre'}, 
        {name: 'Madison'},
        {name: 'Kibby'}, 
        {name: 'Lodgepole'}, 
        {name: 'False Bakken'},
        {name: 'UBS'}, 
        {name: 'MBS'}, 
        {name: 'LBS'}, 
        {name: 'TF1'}, 
        {name: 'TF2'}, 
        {name: 'TF3'}, 
        {name: 'Nisku'}
        ];

    const [formData, setFormData] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setFormData({ ...formData, [name]: value });


    };

    const submitHandler = async (e) => {

        e.preventDefault();

        console.log("Tops submitted");
        console.log(formData)
    }


    // I might need to create another components specifically for individual tops and depths, pass the props down, and iterate that rather than all in one component
    // if (Auth.loggedIn()) {
        return (
            <div>
                <form className="wellTops-form" onSubmit={submitHandler}>
                {testTops.map((element, index) => {
                    return (
                        <div key={index}>
                            <h3>{element.name}</h3> 
                            <input
                                className="wellTops-input-form"
                                type="text"
                                placeholder="SSD"
                                value={formData.element ?? ""}
                                name={element.name}
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    )
                })}
                <div>
                    <input type="submit" value="Calculate Tops" className="submitButton" />
                </div>
                </form>
            </div>
        )
    // } else {
    //     return <Login />
    // }

}