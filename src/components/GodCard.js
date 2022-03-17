import React from "react";

function GodCard({ god, deleteGod }) {

    function handleDelete(){
        deleteGod(god.name)
    }

    const { image, name, romanname, power, symbol, father, mother } = god; 
    
    return (
        <li>
            <img src={image} width="400" height="400"/> 
            <h1>{name}</h1>
            <button class="primary">Learn More!</button>
            <button class="secondary" onClick={handleDelete}>Delete</button>
        </li>
    

    )
}

export default GodCard; 