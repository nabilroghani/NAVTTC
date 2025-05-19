import { useState } from "react";

function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let updateBlue = () => {
    moves.blue++;
    console.log("Blue = " + moves.blue);
    setMoves({ ...moves });
  };
  let updateYellow = () => {
    moves.yellow++;
    console.log("Yellow = " + moves.yellow);
    setMoves({ ...moves });
  };
  let updateGreen = () => {
    moves.green++;
    console.log("Green = " + moves.green);
    setMoves({ ...moves });
  };
  let updateRed = () => {
    moves.red++;
    console.log("Red = " + moves.red);
    setMoves({ ...moves });
  };
  return (
    <div>
      <p>Game Begin's</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
export default LudoBoard;
