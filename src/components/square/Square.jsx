import React from "react";
import "./Square.css";
import currentSquares, {
  currentPieces,
  currentValue,
  piecesUsed,
} from "../../constants/currentMoves.js";
import { useState } from "react/cjs/react.development";

const possibilities = [
  [0, 1, 2], // win move
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const pieceSizeStl = [0, 20, 20, 36, 57];

const Square = ({ position }) => {
  const [int, setInt] = useState("");
  const [stl, setStl] = useState({});

  const play = () => {
    console.log({ currentPieces });
    console.log(piecesUsed);
    const currValue = currentValue[0];
    const pieceType = currValue.type;
    const pieceSize = currValue.size;

    if (
      currentPieces[position] == undefined ||
      currentPieces[position]?.size < pieceSize
    ) {
      console.log({ currentValue });
      setInt(pieceType);
      setStl({ fontSize: pieceSizeStl[pieceSize] });
      currentPieces[position] = currValue;
      currentSquares[position] = pieceType;
      piecesUsed[pieceType][pieceSize] = pieceSize;
      document.getElementById(
        `${pieceType}PieceBtn-${pieceSize}`
      ).style.display = "none";

      delete currentValue[0];

      possibilities.map((move) => {
        if (currentSquares[move[0]] != "") {
          if (
            currentSquares[move[0]] == currentSquares[move[1]] &&
            currentSquares[move[1]] == currentSquares[move[2]]
          ) {
            alert(`${pieceType} ganhou`);
          }
        }
      });
    }
  };

  return (
    <input
      type={"button"}
      value={int}
      style={stl}
      onClick={play}
      className={"square"}
      id={`square-${position}`}
    />
  );
};

export default Square;
