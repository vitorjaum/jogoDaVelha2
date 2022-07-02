import React from "react";
import "./ButtonsPalette.css";
import { currentValue, piecesUsed } from "../../constants/currentMoves";
import { useState } from "react";

const PieceButton = ({ size, type, id }) => {
  const [stl, setStl] = useState({});
  const condScale = currentValue[0]?.id;
  const pressedBtn = document.getElementById(`${type}PieceBtn-${condScale}`);

  const setPiece = () => {
    console.log(pressedBtn);
    setStl({ transform: "scale(1.3)" });
    currentValue[0] = { type, size, id };

    if (pressedBtn) {
      pressedBtn.style.transform = "scale(1)";
    }

    piecesUsed[type][0] = { size, id };
  };

  function setHover(transform, transition) {
    setStl({ transform: `translateY(${transform})`, transition: transition });
  }

  return (
    <>
      <input
        onClick={setPiece}
        id={`${type}PieceBtn-${id}`}
        className={`${type}PieceBtn ${size}`}
        type={"button"}
        style={stl}
        value={type}
        onMouseEnter={() => setHover("1.3", "0.5s")}
        onMouseLeave={() => setHover("1", 0)}
      />
    </>
  );
};

const ButtonsPalette = ({ children }) => {
  return (
    <>
      <div className="palette">
        <PieceButton id={1} size={"big_2"} type={children} />
        <PieceButton id={2} size={"medium_1"} type={children} />
        <PieceButton id={3} size={"small_0"} type={children} />
        <PieceButton id={4} size={"small_0"} type={children} />
        <PieceButton id={5} size={"small_0"} type={children} />
      </div>
    </>
  );
};

export default ButtonsPalette;
