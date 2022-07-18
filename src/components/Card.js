import React from "react"
import starimg from "../images/star.png"


export default function Card(props){
    return(
        <div className="card">
            <img src={props.coverImg} className="main-img" alt="img"/>
            <div className="card-staus">
                <img src={starimg} alt="img" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})  *</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span> /person</p>
        </div>
    )
}