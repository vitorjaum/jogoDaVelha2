import { useState } from "react";
import "./TicTacToe.css";

let gPiece = "x";
let moves = Array(9);

export default function TicTacToe() {
  return (
    <div className="ticTacToe">
      <Table />
      <Message />
    </div>
  );
}

const Table = () => {
  return (
    <>
      <div className={"table"}>
        <div className={"board-row"}>
          <Square position={0} />
          <Square position={1} />
          <Square position={2} />
        </div>
        <div className={"board-row"}>
          <Square position={3} />
          <Square position={4} />
          <Square position={5} />
        </div>
        <div className={"board-row"}>
          <Square position={6} />
          <Square position={7} />
          <Square position={8} />
        </div>
      </div>
    </>
  );
};

const Square = (props) => {
  const { position } = props;
  const [val, setVal] = useState("");
  const condGPiece = val === "x" ? "o" : "x";
  gPiece = condGPiece;
  moves[position] = val;
  winner(moves);
  //  console.log(moves)

  return (
    <button onClick={() => setVal(gPiece)} disabled={val !== ""}>
      {val}
    </button>
  );
};

const Message = () => {
  // set
  return <p>vez do {}</p>;
};

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

function winner(array) {
  function alerta() {
    alert("a");
  }
  possibilities.map((winMove) => {
    const [a, b, c] = winMove;
    const win = array[a] && array[a] === array[b] && array[a] === array[c];
    win && alert("aqui");
    // console.log(win)
  });
}
