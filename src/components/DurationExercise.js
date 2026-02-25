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
    let hours = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60); 
    let secs = totalSeconds % 60;

    hours = String(hours).padStart(1, "0");
    mins = String(mins).padStart(1, "0");
    secs = String(secs).padStart(1, "0");

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