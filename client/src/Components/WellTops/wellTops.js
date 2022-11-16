import "./WellTops.css"
import React, { useState } from 'react';

export default function WellTops() {

    // These are just for building out the page. In the final version the tops will populate based on the project tops.
    // let testTops = [
    //     {name: 'Pierre'}, 
    //     {name: 'Madison'},
    //     {name: 'Kibby'}, 
    //     {name: 'Lodgepole'}, 
    //     {name: 'False Bakken'},
    //     {name: 'UBS'}, 
    //     {name: 'MBS'}, 
    //     {name: 'LBS'}, 
    //     {name: 'TF1'}, 
    //     {name: 'TF2'}, 
    //     {name: 'TF3'}, 
    //     {name: 'Nisku'}
    //     ];

    let testTops = ['Pierre', 'Madison', 'Kibby', 'Lodgepole', 'False Bakken', 'UBS', 'MBS', 'LBS', 'TF1', 'TF2', 'TF3', 'Nisku']

    const [formData, setFormData] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem(name, value)
    };

    const submitHandler = async (e) => {

        e.preventDefault();

        console.log("Tops submitted");
        console.log(formData)
    }

    // if (Auth.loggedIn()) {
        return (
            <div>
                <form className="wellTops-form" onSubmit={submitHandler}>
                {testTops.map((element, index) => {
                    return (
                        <div key={index}>
                            <h3>{element}</h3> 
                            <input
                                className="wellTops-input-form"
                                type="text"
                                placeholder="SSD"
                                value={formData[element] ?? ""}
                                name={element}
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