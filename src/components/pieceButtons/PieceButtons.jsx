import React from "react";

import "./PieceButtons.css";
import { currentValue, piecesUsed } from "../../constants/currentMoves";
import { useState } from "react";

const PieceButton = ({ size, children }) => {
  const [stl, setStl] = useState({});
  const btnId = piecesUsed[children][0];
  const pressedBtn = document.getElementById(`${children}PieceBtn-${btnId}`);

  const setPiece = () => {
    setStl({ transform: "scale(1.3)" });
    currentValue[0] = { type: children, size };
    console.log(`${children}PieceBtn-${size}`);
    if (pressedBtn) {
      pressedBtn.style.transform = "scale(1)";
    }
    piecesUsed[children][0] = size;
  };

  function setHover(param) {
    setStl({ transform: `translateY(${param})` });
  }

  return (
    <>
      <input
        onClick={setPiece}
        id={`${children}PieceBtn-${size}`}
        className={`${children}PieceBtn`}
        type={"button"}
        style={stl}
        value={children}
        onMouseEnter={() => setHover("1.3")}
        onMouseLeave={() => setHover("1")}
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
