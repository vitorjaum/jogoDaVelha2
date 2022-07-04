import React from "react";
import "./ButtonsPalette.css";
import { currentValue, piecesUsed } from "../../constants/currentMoves";

const PieceButton = ({ size, type, id, pieceValue }) => {
  const setPiece = () => {
    currentValue[0] = { type, size, id, pieceValue };
    piecesUsed[type][0] = { size, id, pieceValue };
  };

  return (
    <>
      <input
        onClick={setPiece}
        id={`${type}PieceBtn-${id}`}
        className={`${type}PieceBtn ${size} pieceBtn`}
        type={"button"}
        value={type}
      />
    </>
  );
};

const ButtonsPalette = ({ children }) => {
  return (
    <>
      <div className="palette">
        <PieceButton id={1} size={"big"} pieceValue={3} type={children} />
        <PieceButton id={2} size={"medium"} pieceValue={2} type={children} />
        <PieceButton id={3} size={"small"} pieceValue={1} type={children} />
        <PieceButton id={4} size={"small"} pieceValue={1} type={children} />
        <PieceButton id={5} size={"small"} pieceValue={1} type={children} />
      </div>
    </>
  );
};

export default ButtonsPalette;
