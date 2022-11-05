import React from 'react'; 
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "80px",
  padding: "9px",
  margin: "0 6px 3px",
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
          to="/godslist"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Gods
        </NavLink>
        <NavLink
          to="/gods/new"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Create
        </NavLink>
    </div>
    );
  }

  export default NavBar; 