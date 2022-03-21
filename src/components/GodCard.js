import React from "react";

function GodCard({ god, handleDelete }) {

    function deleteGod(){
        fetch("http://localhost:3004/gods/${god.name}", {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(() => handleDelete(god))
    };



    const { image, name, romanname, power } = god; 
    
    return (
        <li>
            <img src={image} width="400" height="400"/> 
            <h1>{name}</h1>
            <span>Roman Name: {romanname}</span>
            <h3>Power: {power}</h3>
            <button class="secondary" onClick={deleteGod}>Delete</button>
        </li>
    

    )
}

export default GodCard; 