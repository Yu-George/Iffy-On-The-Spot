import React from "react";
import "./ResultCard.css";
interface props {
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultCard = (props: props) => {
  return (
    <>
      {props.showModal ? (
        <div className="modalbg">
          <div className="modalWrap">
            <div className="modalContent">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              unde? Voluptatibus, dolore? Id ullam libero ad soluta saepe
              obcaecati eveniet quia enim architecto quae aliquam qui ipsa
              voluptates veritatis vero nemo quisquam, laborum tenetur quo!
              Ratione odio quo ipsum magnam nam pariatur rem nesciunt placeat
              velit. Neque soluta eaque pariatur.
              <button onClick={() => props.setModal((prev) => !prev)}>
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
