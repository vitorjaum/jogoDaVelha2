import React from "react";
// import "./XPieces.css";
import { currentValue } from "../../constants/currentMoves";

// const styles = ["", "btn-one", "btn-two", "btn-three", "btn-four"];

const btnBig = { fontSize: "25px" };
const btnMedium = { fontSize: "15px" };
const btnSmall = { fontSize: "10px" };

const styles = ["", btnSmall, btnSmall, btnMedium, btnBig];

const PieceButton = ({ size }) => {
  const setPiece = () => {
    currentValue[0] = { type: "X", size };
    console.log(currentValue);
  };

  return (
    <>
      <button onClick={setPiece} style={styles[size]}>
        X
      </button>
    </>
  );
};

const XPieces = () => {
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

export default XPieces;
