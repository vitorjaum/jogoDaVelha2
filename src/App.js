// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import { Text } from "react-dom";

// function App() {
//   return (
//     <div className="App">
//       <PlayerTable>x</PlayerTable>
//       <Table />
//       <PlayerTable>o</PlayerTable>
//     </div>
//   );
// }

// const Table = () => {
//   return (
//     <div>
//       <div>
//         <Square value={0} />
//         <Square value={1} />
//         <Square value={2} />
//       </div>
//       <div>
//         <Square value={3} />
//         <Square value={4} />
//         <Square value={5} />
//       </div>
//       <div>
//         <Square value={6} />
//         <Square value={7} />
//         <Square value={8} />
//       </div>
//     </div>
//   );
// };

// const possibles = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// const PlayerTable = (props) => {
//   const piece = props.children;
//   return (
//     <div>
//       <PieceButton style={"big"} value={3}>
//         {piece}
//       </PieceButton>
//       <PieceButton style={"medium"} value={2}>
//         {piece}
//       </PieceButton>
//       <PieceButton style={"small"} value={1}>
//         {piece}
//       </PieceButton>
//       <PieceButton style={"small"} value={1}>
//         {piece}
//       </PieceButton>
//       <PieceButton style={"small"} value={1}>
//         {piece}
//       </PieceButton>
//     </div>
//   );
// };

// const PieceButton = (props) => {
//   const { value, style } = props;
//   const piece = props.children;

//   function bololo() {
//     currVal = { piece, value };
//   }

//   return (
//     <button className={style} onClick={bololo}>
//       {piece}
//     </button>
//   );
// };

// const Square = (props) => {
//   const { value } = props;
//   let squareVal;
//   const [piece, setPiece] = useState(squareVal?.piece);
//   const setVal = () => {
//     if (squareVal && squareVal?.value > currVal?.value) {
//       squares[value] = currVal?.piece;
//     } else {
//       squareVal = currVal;
//       setPiece(squareVal?.piece);
//       console.log(currVal.value);
//     }

//     // console.log(squares)
//   };

//   const boxStl = {
//     height: 45,
//     width: 45,
//     fontSize: `${currVal?.value}em`
//   };
//   return (
//     <button style={boxStl} onClick={setVal}>
//       {piece}
//     </button>
//   );
// };

// export default App;
