import { Navigate } from "react-router";
import React, { useEffect } from "react";
import { loginUrl } from "../../API/spotify";
import "./Welcome.css";
import MusicNotes from "../MusicNotes/MusicNotes";

//params are separated by &, key and value are separated by =
const parseParams = (hash: string): string => {
  const tokenString: string = hash.split("&")[0].split("=")[1];
  return tokenString;
};
const Welcome: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const token = parseParams(window.location.hash);
      sessionStorage.clear();
      sessionStorage.setItem("accessToken", token);
      window.location.reload();
    } else if (window.location.href.split("/")[3] === "?error=access_denied") {
      console.log("Error");
    }
    return () => {};
  }, []);

  if (sessionStorage.getItem("accessToken")) {
    return <Navigate to="/menu" />;
  }
  return (
    <React.Fragment>
      <MusicNotes />
      <div className="welcome">
        <a href={loginUrl}>
          <button className="btn">Sign in with Spotify</button>
        </a>
        <br />
        <a href="/menu" className="nologin">
          demo without signing in
        </a>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
