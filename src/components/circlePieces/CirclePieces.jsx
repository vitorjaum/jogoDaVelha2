import React from "react";
// import "./CirclePieces.css";
import { currentValue } from "../../constants/currentMoves";

const btnBig = { fontSize: "25px" };
const btnMedium = { fontSize: "15px" };
const btnSmall = { fontSize: "10px" };

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
