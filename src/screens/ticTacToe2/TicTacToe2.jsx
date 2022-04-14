import React from "react";
import "./TicTacToe2.css";
import Table from "../../components/table/Table";
import CirclePieces from "../../components/circlePieces/CirclePieces";
import XPieces from "../../components/xPieces/XPieces";

const TicTacToe2 = () => {
  return (
    <>
      <div className={"table"}>
        <XPieces />
        <Table />
        <CirclePieces />
      </div>
    </>
  );
};

export default TicTacToe2;
