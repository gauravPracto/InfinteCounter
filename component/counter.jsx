import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [clearTimeOut, setClearTimeout] = useState(null);
  const startCounter = () => {
    return setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };
  useEffect(() => {
    clearTimeout(clearTimeOut);
    setClearTimeout(startCounter());
    return () => {
      return clearTimeout(clearTimeOut);
    };
  }, [counter]);
  return (
    <div className="App">
      <h1>Your Counter Here</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          clearTimeout(clearTimeOut);
          startCounter();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearTimeout(clearTimeOut);
        }}
      >
        Stop
      </button>
    </div>
  );
}
