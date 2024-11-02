import React, { useState, useRef } from "react";

const Stopwatch = () => {
  // State for tracking elapsed time and running status
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  // Ref to store the interval ID
  const intervalRef = useRef(null);

  // Start the stopwatch
  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment time by 10 milliseconds
      }, 10);
    }
  };

  // Stop the stopwatch
  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Format time as mm:ss:ms
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return (
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}:` +
      `${milliseconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startStopwatch} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
