import React from "react";
import "./TicTacToe2.css";
import Table from "../../components/table/Table";
import CirclePieces from "../../components/circlePieces/CirclePieces";
import XPieces from "../../components/xPieces/XPieces";

const TicTacToe2 = () => {
  return (
    <>
      <h1>Jogo da Velha 2</h1>
      <div className={"table"}>
        <XPieces>X</XPieces>
        <Table />
        <XPieces>O</XPieces>
      </div>
    </>
  );
};

export default TicTacToe2;
