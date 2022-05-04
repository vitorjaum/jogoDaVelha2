import React from "react";
import "./TicTacToe2.css";
import Table from "../../components/table/Table";
import PieceButtons from "../../components/pieceButtons/PieceButtons";

const TicTacToe2 = () => {
  return (
    <div className="base">
      <h1>Jogo da Velha 2</h1>
      <div>
        <PieceButtons>X</PieceButtons>
        <Table />
        <PieceButtons>O</PieceButtons>
      </div>
    </div>
  );
};

export default TicTacToe2;
