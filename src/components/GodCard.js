import React from "react";

function GodCard({ god, deleteGod }) {

    function handleDelete(){
        deleteGod(god.name)
    }

    const { image, name, romanname, power } = god; 
    
    return (
        <li>
            <img src={image} width="400" height="400"/> 
            <h1>{name}</h1>
            <span>Roman Name: {romanname}</span>
            <h3>Power: {power}</h3>
            <button class="secondary" onClick={handleDelete}>Delete</button>
        </li>
    

    )
}

export default GodCard; 