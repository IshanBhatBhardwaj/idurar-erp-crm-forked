import React from 'react'
import "./DarkMode.css";

export default function DarkMode() {

    const changeColor = () => {
        document.body.style.backgroundColor = "red";
        console.log("hellp")
    }
    return (
        <div className="container">

    
        <label className="switch">
            <input type='checkBox' onChange={changeColor}/>
            <span className='slider'/>
        </label>

        </div>
 
     
    );
};


