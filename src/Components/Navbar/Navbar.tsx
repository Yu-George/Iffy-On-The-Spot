import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topnav">
      <Link className="navelement" to="/">
        Iffy On The Spot
      </Link>
      <p className="navelement nav-help">Help</p>
    </div>
  );
};

export default Navbar;
