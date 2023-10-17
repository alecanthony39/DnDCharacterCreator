import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h3> Dungeon and Dragons Character Creator</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="CharacterCreator">Character Creation</Link>
      </nav>
    </header>
  );
};

export default Navbar;
