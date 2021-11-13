import React from "react";
import "./ResultCard.css";
interface Song {
  songName: string;
  artist: string[];
  album: string;
  previewUrl: string;
}

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              unde? Voluptatibus, dolore? Id ullam libero ad soluta saepe
              obcaecati eveniet quia enim architecto quae aliquam qui ipsa
              voluptates veritatis vero nemo quisquam, laborum tenetur quo!
              Ratione odio quo ipsum magnam nam pariatur rem nesciunt placeat
              velit. Neque soluta eaque pariatur.
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
