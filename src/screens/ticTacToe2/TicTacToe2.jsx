import React from "react";
import "./TicTacToe2.css";
import Table from "../../components/table/Table";
import ButtonsPalette from "../../components/ButtonsPalette/ButtonsPalette";

const TicTacToe2 = () => {
  return (
    <div className="base">
      <h1>Jogo da Velha 2</h1>
      <div>
        <ButtonsPalette>O</ButtonsPalette>
        <Table />
        <ButtonsPalette>X</ButtonsPalette>
      </div>
    </div>
  );
};

export default TicTacToe2;
