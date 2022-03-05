import React from "react";
import { Link } from "react-router-dom";
// styles

import "./Navbar.css";
import Seachbar from "./Seachbar";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Seachbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
