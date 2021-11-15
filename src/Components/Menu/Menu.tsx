import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MusicNotes from "../MusicNotes/MusicNotes";

const Menu: React.FC = () => {
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="welcome">
        <Link to="/play" state={{ ind: 0 }}>
          <button className="btn menu-card menu-card">Saved Tracks</button>
        </Link>
        <Link to="/play" state={{ ind: 1 }}>
          <button className="btn menu-card">Recently Played Tracks</button>
        </Link>
        <Link to="/play" state={{ ind: 2 }}>
          <button className="btn menu-card">
            Most Played Tracks (6 months)
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Menu;
