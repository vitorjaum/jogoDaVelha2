import React from "react";
import { useState } from "react/cjs/react.development";
import "./XPieces.css";
import currentSquares, {
  currentValue,
  piecesUsed,
} from "../../constants/currentMoves";

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

const PieceButton = ({ size, children }) => {
  const [stl, setStl] = useState({});

  const setPiece = () => {
    setStl({ transform: "scale(1.5)" });
    currentValue[0] = { type: children, size };
    console.log(`${children}PieceBtn-${size}`);
  };

  return (
    <>
      <button
        onClick={setPiece}
        id={`${children}PieceBtn-${size}`}
        className={`${children}PieceBtn`}
        style={stl}
      >
        {children}
      </button>
    </>
  );
};

const XPieces = ({ children }) => {
  return (
    <>
      <div>
        <PieceButton size={4}>{children}</PieceButton>
        <PieceButton size={3}>{children}</PieceButton>
        <PieceButton size={2}>{children}</PieceButton>
        <PieceButton size={1}>{children}</PieceButton>
      </div>
    </>
  );
};

export default XPieces;
