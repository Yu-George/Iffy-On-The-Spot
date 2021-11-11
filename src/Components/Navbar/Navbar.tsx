import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topnav">
      <Link className="navelement" to={"/menu"}>
        Logo
      </Link>
      <p className="navelement">Help</p>
    </div>
  );
};

export default Navbar;
