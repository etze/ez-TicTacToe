import React from "react";

export default function Information({ currentPlayer, winner }) {
  // const [winner, getWinner] = React.useState(setWinner);
  // React.useEffect(() => {
  //   console.log(setWinner);
  //   getWinner(setWinner);
  // }, [setWinner]);
  return (
    <div className="information">
      <div
        className="scoreboard"
        style={{
          backgroundColor:
            winner === undefined
              ? currentPlayer === "player one"
                ? "aqua"
                : null
              : null
        }}
      >
        <h3>Player One</h3>
        <h2 style={{ color: "red" }}>
          {winner === "player one" ? "winner" : null}
        </h2>
      </div>
      <h2>Current Player</h2>
      {/* <h3 style={{ color: "grey" }}>{currentPlayer}</h3> */}
      <div
        className="scoreboard"
        style={{
          backgroundColor:
            winner === undefined
              ? currentPlayer === "player two"
                ? "aqua"
                : null
              : null
        }}
      >
        <h3>Player Two</h3>
        <h2 style={{ color: "red" }}>
          {winner === "player two" ? "winner" : null}
        </h2>
      </div>
    </div>
  );
}
