import React, { useState } from "react";
import { useInterval } from "./custom-hook1";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    // callback
    () => {
      setCount(count + 1);
    },
    //  delay
    isRunning ? delay : null
  );

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  function handleIsRunningChange(e) {
    setIsRunning(e.target.checked);
  }
  return (
    <div className="component">
      <h1>{count}</h1>
      <input
        type="checkbox"
        checked={isRunning}
        onChange={handleIsRunningChange}
      />{" "}
      Running
      <br />
      <input value={delay} onChange={handleDelayChange} />
    </div>
  );
}
