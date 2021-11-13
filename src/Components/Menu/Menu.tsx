import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MusicNotes from "../MusicNotes/MusicNotes";
import Play from "../Play/Play";
interface prop {
  updateMode: (data: number) => void;
}
const Menu: React.FC = () => {
  const [mode, setMode] = useState<number>(-1);
  useEffect(() => {
    return () => {};
  }, [mode]);
  const handleMode = (num: number) => {
    sessionStorage.setItem("mode", num.toString());
    window.location.href = "/play";
  };
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="welcome">
        <button
          className="btn menu-card menu-card"
          onClick={() => handleMode(0)}
        >
          Saved Tracks
        </button>
        <button className="btn menu-card" onClick={() => handleMode(1)}>
          Recently Played Tracks
        </button>
        <button className="btn menu-card" onClick={() => handleMode(2)}>
          Most Played Tracks (6 months)
        </button>
      </div>
    </React.Fragment>
  );
};

export default Menu;
