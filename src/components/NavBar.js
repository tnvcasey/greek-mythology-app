import React from 'react'; 
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "gold",
  textDecoration: "none",
  color: "white",
}; 

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/godCard"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Gods
        </NavLink>
        <NavLink
          to="/createGod"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Create a God
        </NavLink>
    </div>
    );
  }

  export default NavBar; 