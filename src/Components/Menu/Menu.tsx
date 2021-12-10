import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Menu.css";
import { BiLogOut } from "react-icons/bi";

const Menu: React.FC = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.assign("/");
  };
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="menu">
        {sessionStorage.getItem("accessToken") ? (
          <>
            <Link to="/play" state={{ ind: 0 }}>
              <div className="menu-card">Saved Tracks</div>
            </Link>
            <Link to="/play" state={{ ind: 1 }}>
              <div className="menu-card">Recently Played Tracks</div>
            </Link>
            <Link to="/play" state={{ ind: 2 }}>
              <div className="menu-card">Most Played Tracks (6 months)</div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/play" state={{ ind: 3 }}>
              <div className="menu-card">Michael Jackson</div>
            </Link>
            <Link to="/play" state={{ ind: 4 }}>
              <div className="menu-card">The Beatles</div>
            </Link>
            <Link to="/play" state={{ ind: 5 }}>
              <div className="menu-card">Drake</div>
            </Link>
          </>
        )}
      </div>
      <div className="logout" onClick={handleLogout}>
        <BiLogOut />
      </div>
    </React.Fragment>
  );
};

export default Menu;
