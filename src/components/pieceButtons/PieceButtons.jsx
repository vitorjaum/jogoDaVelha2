import React from "react";

import "./PieceButtons.css";
import { currentValue } from "../../constants/currentMoves";
import { useState } from "react";

const PieceButton = ({ size, children }) => {
  const [stl, setStl] = useState({});

  const setPiece = () => {
    setStl({ transform: "scale(1.3)" });
    currentValue[0] = { type: children, size };
    console.log(`${children}PieceBtn-${size}`);
  };

  return (
    <>
      <input
        onClick={setPiece}
        id={`${children}PieceBtn-${size}`}
        className={`${children}PieceBtn`}
        type={"button"}
        style={stl}
        value={children}
      />
    </>
  );
};

const PieceButtons = ({ children }) => {
  return (
    <>
      <div className="palette">
        <PieceButton size={4}>{children}</PieceButton>
        <PieceButton size={3}>{children}</PieceButton>
        <PieceButton size={2}>{children}</PieceButton>
        <PieceButton size={1}>{children}</PieceButton>
      </div>
    </>
  );
};

export default PieceButtons;
