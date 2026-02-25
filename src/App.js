import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = [
    {name: "Push Ups", type: "repetition"},
    {name: "Plank", type: "duration"},
  ];

  let defaultReturn = <p>Menu</p>

  if (currentScreen === "menu") {
      defaultReturn = (
        <div>
          <h1>Menu</h1>

          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedExercise(exercise);
                setCurrentScreen("exercise");
              }}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      ); 
    } 
  if (currentScreen === "exercise") {
    defaultReturn = (
      <div>

        {selectedExercise.type === "repetition" && (
          <RepetitionExercise exercise={selectedExercise} />
        )}

        {selectedExercise.type === "duration" && (
          <DurationExercise exercise={selectedExercise} />
        )}

        <button onClick={() => setCurrentScreen("menu")}>
          Back
        </button>
      </div>
    );
  }

  return defaultReturn;
}
