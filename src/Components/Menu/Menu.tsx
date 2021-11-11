import React from "react";
interface prop {
  tokenName: string;
}

const Menu = (token: prop) => {
  return (
    <div className="bg">
      <div className="welcome">
        <button className="btn">Start The Music!</button>
      </div>
    </div>
  );
};

export default Menu;
