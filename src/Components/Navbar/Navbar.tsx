import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [mobile, setmobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    const handler = (e: any) => setmobile(e.matches);
    window.matchMedia("(max-width: 480px)").addEventListener("change", handler);
    return () => {
      window
        .matchMedia("(max-width: 480px)")
        .removeEventListener("change", handler);
    };
  }, []);
  return (
    <div className="topnav">
      <Link className="navelement" to="/">
        {mobile ? "Iffy" : "Iffy On The Spot"}
      </Link>
    </div>
  );
};

export default Navbar;
