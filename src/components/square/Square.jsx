import React from "react";
import "./Square.css";
import currentSquares, {
  currentPieces,
  currentValue,
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

const pieceSize = [0, 10, 10, 15, 25];

const Square = ({ position }) => {
  const [int, setInt] = useState("");
  const [stl, setStl] = useState({ backgroundColor: "red" });

  const play = () => {
    console.log(currentPieces[position]);

    if (
      currentPieces[position] == undefined ||
      currentPieces[position]?.size < currentValue[0]?.size
    ) {
      console.log(currentValue);
      setInt(currentValue[0]?.type);
      setStl({ fontSize: pieceSize[currentValue[0].size] });
      currentPieces[position] = currentValue[0];
      currentSquares[position] = currentValue[0]?.type;

      possibilities.map((move) => {
        if (currentSquares[move[0]] != "") {
          if (
            currentSquares[move[0]] == currentSquares[move[1]] &&
            currentSquares[move[1]] == currentSquares[move[2]]
          ) {
            alert(`${currentValue[0].type} ganhou`);
          }
        }
      });
    }
  };

  return <input type={"button"} value={int} style={stl} onClick={play} />;
};

export default Square;
