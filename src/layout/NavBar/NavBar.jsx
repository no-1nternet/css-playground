import React from "react";

import AnimatedButton from "../../UI/AnimatedButton/AnimatedButton";

import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <h1>CSS Playground</h1>
      <AnimatedButton />
      <h5>Steven Yan</h5>
    </div>
  );
};

export default NavBar;
