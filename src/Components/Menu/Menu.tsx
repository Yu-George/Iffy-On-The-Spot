import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Menu.css";
const Menu: React.FC = () => {
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="menu">
        <Link to="/play" state={{ ind: 0 }}>
          <div className="menu-card">Saved Tracks</div>
        </Link>
        <Link to="/play" state={{ ind: 1 }}>
          <div className="menu-card">Recently Played Tracks</div>
        </Link>
        <Link to="/play" state={{ ind: 2 }}>
          <div className="menu-card">Most Played Tracks (6 months)</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Menu;
