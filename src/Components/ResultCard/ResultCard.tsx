import React from "react";
import "./ResultCard.css";
import { Song } from "../Play/Play";
import { Link } from "react-router-dom";

interface props {
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  songData: Song[];
  isCorrect: boolean;
  index: number;
  score: number;
}

const ResultCard = (props: props) => {
  const index = props.index;
  const handleClose = () => {
    if (props.songData.length - 1 > index) props.setIndex(props.index + 1);
    props.setModal((prev) => !prev);
  };
  return (
    <>
      {props.showModal ? (
        <div className="modalbg">
          <div
            className={props.isCorrect ? "modalWrap" : "modalWrap incorrect"}
          >
            <div className="modalContent">
              <h2>{props.songData[index].songName}</h2> <br />
              <h3>By: {props.songData[index].artist.join(", ")}</h3>
              <img src={props.songData[index].albumImgUrl} alt="albumImage" />
              {props.songData.length - 1 > index ? (
                <button
                  className={props.isCorrect ? "modalBtn" : "modalBtn btn-red"}
                  onClick={handleClose}
                >
                  Close
                </button>
              ) : (
                <Link
                  to="/results"
                  state={{ score: props.score, songs: props.songData }}
                >
                  <button
                    className={
                      props.isCorrect ? "modalBtn" : "modalBtn btn-red"
                    }
                    onClick={handleClose}
                  >
                    Results
                  </button>
                </Link>
              )}
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
