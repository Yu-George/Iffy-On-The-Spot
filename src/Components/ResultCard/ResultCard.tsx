import React from "react";
import "./ResultCard.css";
import { Song } from "../Play/Play";

interface props {
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  songData: Song;
}

const ResultCard = (props: props) => {
  return (
    <>
      {props.showModal ? (
        <div className="modalbg">
          <div className="modalWrap">
            <div className="modalContent">
              <header>{props.songData.songName}</header>
              <h3>By: {props.songData.artist.join(", ")}</h3>
              <h3>{props.songData.album}</h3>
              <img src={props.songData.albumImgUrl} />
              <button
                className="modalBtn"
                onClick={() => props.setModal((prev) => !prev)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResultCard;
