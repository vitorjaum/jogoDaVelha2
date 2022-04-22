import React from "react";
import { useState } from "react/cjs/react.development";

import { currentValue } from "../../constants/currentMoves";

const btnBig = { fontSize: "25px" };
const btnMedium = { fontSize: "15px" };
const btnSmall = { fontSize: "10px" };

const styles = ["", btnSmall, btnSmall, btnMedium, btnBig];

const PieceButton = ({ size, children }) => {
  const setPiece = () => {
    currentValue[0] = { type: "X", size };
    console.log(currentValue);
  };

  return (
    <>
      <button onClick={setPiece} style={styles[size]} className={"XPieceBtn"}>
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
