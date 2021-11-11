import { Navigate } from "react-router";
import React, { useEffect } from "react";
import { loginUrl } from "../../API/spotify";
import "./Welcome.css";
import MusicNotes from "../MusicNotes/MusicNotes";

/*
http://localhost:3000/#access_token=BQDYsWlB7jX3O1CObmkFJy2QdTbKYWiuEVQOWbBwaWk3tcq91W1EBqYHcswdNtzrHKvnSxFq0c3Xmksodi0v_rOBKBfLhS6jNJd9XOP9EtpQu5LHOFf4j_la_hgEaUuCaPQ1wQT4qA6hJDEqw86FiQSV35zx97jLxRXWm48_rTg8IFBsfOF_3tBEXRx_eQx3Dc_rczQ&token_type=Bearer&expires_in=3600
*/

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
