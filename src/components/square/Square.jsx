import React from "react";
import "./Square.css";
import currentSquares, {
  currentPieces,
  currentValue,
  piecesUsed,
} from "../../constants/currentMoves.js";
import { useState } from "react";

const winMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const pieceSizeStl = { small_0: 20, medium_1: 36, big_2: 57 };

const Square = ({ position }) => {
  const [int, setInt] = useState("");
  const [stl, setStl] = useState({});

  const play = () => {
    const currValue = currentValue[0];
    const pieceType = currValue.type;
    const pieceId = currValue.id;
    const pieceSize = currValue.size;
    const pieceElement = document.getElementById(
      `${pieceType}PieceBtn-${pieceId}`
    );

    console.log({ currentPieces });
    console.log(piecesUsed);
    console.log(piecesUsed[pieceType][0]);
    console.log(currentPieces[position]?.size.substr(-1));
    console.log(pieceSize);

    if (
      currentPieces[position] == undefined ||
      currentPieces[position]?.size.substr(-1) < pieceSize.substr(-1)
    ) {
      setInt(pieceType);
      setStl({ fontSize: pieceSizeStl[pieceSize] });

      currentPieces[position] = currValue;
      currentSquares[position] = pieceType;
      piecesUsed[pieceType][pieceSize] = pieceSize.substr(-1);
      pieceElement.style.visibility = "hidden";

      console.log({ currentValue: currentValue[0] });

      delete currentValue[0];

      winMoves.map((move) => {
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
