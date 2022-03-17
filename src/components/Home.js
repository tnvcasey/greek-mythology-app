import React from "react";
import Search from "./Search";

function Home({ search, searchChange}) {
    return(
        <header>
            <h1>Welcome to the Pantheon</h1>
            <Search search={search} searchChange={searchChange}/>
            <img src="https://i.pinimg.com/originals/b2/36/23/b236233f0d937abaafff158e1a23201d.jpg">"https://i.pinimg.com/originals/b2/36/23/b236233f0d937abaafff158e1a23201d.jpg"</img>
        </header>
    )
}

export default Home;