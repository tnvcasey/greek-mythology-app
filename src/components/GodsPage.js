import React from "react";
import GodCard from "./GodCard";

function GodsPage({ filteredGods, deleteGod }) {
    return(
        <div>
            <h1 >Meet The Gods</h1>
            <ul className="cards">
                {filteredGods.map((god) => (
                    <GodCard key={god.name} god={god} deleteGod={deleteGod} />
                ))}
            </ul>
        </div>
    )
}

export default GodsPage;