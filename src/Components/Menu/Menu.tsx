import React from "react";
import MusicNotes from "../MusicNotes/MusicNotes";
interface prop {
  tokenName: string;
}
const handlePlay = () => {
  window.location.assign("/play");
};
const Menu: React.FC<prop> = (token: prop) => {
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="welcome">
        <button className="btn" onClick={handlePlay}>
          Start The Music!
        </button>
      </div>
    </React.Fragment>
  );
};

export default Menu;
