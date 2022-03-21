import React, { useState } from "react"

const image= "https://www.ancient-origins.net/sites/default/files/field/image/One-of-the-Greek-temples.jpg"

function Home(){
    return(
        <div>
            <h1>The Greek Gods!</h1>
            <img className="photo" src={"https://www.ancient-origins.net/sites/default/files/field/image/One-of-the-Greek-temples.jpg"} />
        </div>
    )
}

export default Home; 