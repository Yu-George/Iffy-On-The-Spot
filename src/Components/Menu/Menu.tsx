import React from "react";
import MusicNotes from "../MusicNotes/MusicNotes";
interface prop {
  tokenName: string;
}

const Menu = (token: prop) => {
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="welcome">
        <button className="btn">Start The Music!</button>
      </div>
    </React.Fragment>
  );
};

export default Menu;
