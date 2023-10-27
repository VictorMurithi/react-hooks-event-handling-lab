// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handlechange(){
        console.log("Entering passcode...")
    }
    return (
        <div>
            <input type="Password" onChange={handlechange}></input>
        </div>
    )
}

export default Keypad;