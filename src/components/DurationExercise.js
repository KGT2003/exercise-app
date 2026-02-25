import React, { useState, useEffect, useCallback } from "react";

function DurationExercise({ exercise }) {
  const [timer, setTimer] = useState(null);
  const [curTime, setCurTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setCurTime((prev) => prev + 1);
      }, 1000);
      setTimer(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const click = useCallback(() => {
    if (running) {
      clearInterval(timer);
      setRunning(false);
    } else {
      setRunning(true);
    }
  }, [running, timer]);

  return (
    <div>
      <h2>{exercise.name}</h2>
      <p>Time: {curTime} seconds</p>
      <button onClick={click}>
        {running ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          clearInterval(timer);
          setRunning(false);
          setCurTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;