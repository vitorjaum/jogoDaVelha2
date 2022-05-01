import React from "react";
// import "./CirclePieces.css";
import { currentValue } from "../../constants/currentMoves";

const btnBig = {
  fontSize: "40px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};
const btnMedium = {
  fontSize: "25px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};
const btnSmall = {
  fontSize: "17px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};

const styles = ["", btnSmall, btnSmall, btnMedium, btnBig];

const CirclePieces = () => {
  const PieceButton = ({ size }) => {
    const setPiece = () => {
      currentValue[0] = { type: "O", size };
      console.log(currentValue);
    };

    return (
      <>
        <button onClick={setPiece} style={styles[size]}>
          O
        </button>
      </>
    );
  };

  return (
    <>
      <div>
        <PieceButton size={4} />
        <PieceButton size={3} />
        <PieceButton size={2} />
        <PieceButton size={1} />
      </div>
    </>
  );
};

export default CirclePieces;
