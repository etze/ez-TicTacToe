import React from "react";

export default function TTTsquare({ input }) {
  // const [state, setState] = React.useState(input);
  return (
    <div>
      <div className="square">
        <div className="squarevalue">
          <div>
            <font size="7">{input.label}</font>
          </div>
        </div>
      </div>
    </div>
  );
}
