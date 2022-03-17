import React from "react";
import GodCard from "./GodCard";

function GodsPage({ filteredGods }) {
    return(
        <div>
            <h1>Meed The Gods</h1>
            <ul className="cards">
                {filteredGods.map((god) => (
                    <GodCard key={god.name} god={god} />
                ))}
            </ul>
        </div>
    )
}

export default GodsPage;