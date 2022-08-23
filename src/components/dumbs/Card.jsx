import React from "react";

export default function Card(props){
    return (
        <div className="container">
            <div>
                <h2> {props.name} </h2>
                <h5> {props.species} </h5>
            </div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}