import React from "react";
import Heroimg from "../images/hero-img.png"

console.log(Heroimg)


export default function Hero() {
    return (
        <section className="hero-section">
            <img src={Heroimg} />
            <div className="hero">
                <h1 className="heading">Online Experiences</h1>
                <p className="intro-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}