import React from "react";
import logo from "../images/airbnb-logo.png"

console.log(logo)


export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img src={logo}/>
        </nav>
    )
}