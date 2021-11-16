import React from "react";
import "./ResultCard.css";
import { Song } from "../Play/Play";

interface props {
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  songData: Song[];
  isCorrect: boolean;
  index: number;
}

const ResultCard = (props: props) => {
  return (
    <>
      {props.showModal ? (
        <div className="modalbg">
          <div
            className={props.isCorrect ? "modalWrap" : "modalWrap incorrect"}
          >
            <div className="modalContent">
              <h2>{props.songData[props.index].songName}</h2> <br />
              <h3>By: {props.songData[props.index].artist.join(", ")}</h3>
              <img
                src={props.songData[props.index].albumImgUrl}
                alt="albumImage"
              />
              <button
                className={props.isCorrect ? "modalBtn" : "modalBtn btn-red"}
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
