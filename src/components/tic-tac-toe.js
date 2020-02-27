import React from "react";
import TTTsquare from "./tttSquare";
import Information from "./tttInformation";
import { TTThooks } from "./tttHook";

export default function TicTacToe() {
  const { state, winner, boardEngine, reset } = TTThooks();
  return (
    <div className="component">
      <div className="wrapper">
        <Information currentPlayer={state.currentPlayer} winner={winner} />
        <div className="board">
          {state.board.map((item, index) => (
            <div key={index} onClick={() => boardEngine(state.board[index])}>
              <TTTsquare input={state.board[index]} />
            </div>
          ))}
        </div>
        <button className="resetbtn" onClick={() => reset()}>
          RESET
        </button>
      </div>
    </div>
  );
}
