import React from "react";
import Search from "./Search";

function Header({ search, searchChange}) {
    return(
        <header>
            <h1>Welcome to the Pantheon</h1>
            <Search search={search} searchChange={searchChange}/>
        </header>
    )
}

export default Header 