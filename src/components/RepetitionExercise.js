import React, {useState} from "react";

function RepetitionExercise({exercise}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{exercise.name}
                <p>Reps: {count}</p>
            </h2>
            <button onClick = {() => setCount(count + 1)}>
                Add Rep
            </button>
        </div>

    );
}

export default RepetitionExercise;