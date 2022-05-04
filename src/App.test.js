import { render, screen } from "@testing-library/react";
import TicTacToe2 from "./screens/ticTacToe2/TicTacToe2";
// import TicTacToe from "./TicTacToe";

test("renders learn react link", () => {
  render(<TicTacToe2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
