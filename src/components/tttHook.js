import React from "react";
import _ from "lodash";

export function TTThooks() {
  const initialBoardState = {
    board: [
      { number: 1, label: undefined },
      { number: 2, label: undefined },
      { number: 3, label: undefined },
      { number: 4, label: undefined },
      { number: 5, label: undefined },
      { number: 6, label: undefined },
      { number: 7, label: undefined },
      { number: 8, label: undefined },
      { number: 9, label: undefined }
    ],
    currentPlayer: "player one"
  };
  const [state, setState] = React.useState(initialBoardState);
  const [winner, setWinner] = React.useState(undefined);
  const handleState = (stateName, stateValue) => {
    setState(prevState => ({ ...prevState, [stateName]: stateValue }));
  };
  const winnerArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  React.useEffect(() => {
    let xArray = [];
    let oArray = [];
    state.board.map((square, index) => {
      if (square.label === "X") {
        xArray.push(square.number);
      } else if (square.label === "O") {
        oArray.push(square.number);
      }
    });
    for (let arr of winnerArrays) {
      if (_.difference(arr, xArray).length === 0) {
        setWinner("player one");
        break;
      } else if (_.difference(arr, oArray).length === 0) {
        setWinner("player two");
        break;
      }
    }
  }, [state, winnerArrays]);
  const boardEngine = item => {
    if (winner === undefined) {
      if (item.label === undefined) {
        const newBoard = state.board;
        if (state.currentPlayer === "player one") {
          newBoard[item.number - 1].label = "X";
          handleState("board", newBoard);
          handleState("currentPlayer", "player two");
        } else {
          newBoard[item.number - 1].label = "O";
          handleState("board", newBoard);
          handleState("currentPlayer", "player one");
        }
      }
    }
  };

  const reset = () => {
    setState(initialBoardState);
    setWinner(undefined);
  };
  return { state, winner, boardEngine, reset };
}
