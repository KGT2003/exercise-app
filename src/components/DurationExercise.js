import React, { useState, useEffect, useCallback,  } from "react";

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

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60); 
    const secs = totalSeconds % 60;
    return `${hours < 10 ? `0${hours}` : hours}: ${mins < 10 ? `0${mins}` : mins}: ${secs < 10 ? `0${secs}` : secs}`;
  };



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
      <p>{formatTime(curTime)}</p>
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