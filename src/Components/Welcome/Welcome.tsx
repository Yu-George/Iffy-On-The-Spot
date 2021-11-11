import React from "react";
import { loginUrl } from "../../API/spotify";
import "./Welcome.css";

const Welcome: React.FC = () => {
  return (
    <React.Fragment>
      <body>
        <div className="welcome">
          <a href={loginUrl}>
            <button className="btn">Sign in with Spotify</button>
          </a>
          <br />
          <a href="#" className="nologin">
            demo without signing in
          </a>
        </div>
      </body>
    </React.Fragment>
  );
};

export default Welcome;
