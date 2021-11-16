import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [mobile, setmobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    const handler = (e: any) => setmobile(e.matches);
    window.matchMedia("(min-width: 480px)").addEventListener("change", handler);
    return () => {
      window
        .matchMedia("(min-width: 480px)")
        .removeEventListener("change", handler);
    };
  }, []);
  return (
    <div className="topnav">
      <Link className="navelement" to="/">
        {!mobile ? "Iffy" : "Iffy On The Spot"}
      </Link>
      <p className="navelement nav-help">Help</p>
    </div>
  );
};

export default Navbar;
