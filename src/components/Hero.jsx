import { useState, useEffect } from "react";
import ExercisePlan from "./ExercisePlan";
import MuscleGroups from "./MuscleGroups"; // No changes here
import { getExerciseRoutine } from "../Api";

function Hero() {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [exercisePlan, setExercisePlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.trim() !== "") {
      setMuscleGroups((prev) => [...prev, userInput]);
      setUserInput("");
    }
  }

  async function handleGeneratePlan() {
    setIsLoading(true);

    try {
      const plan = await getExerciseRoutine(muscleGroups);
      setExercisePlan(plan);
    } catch (error) {
      console.error("Error generating exercise plan:", error.message);
      setExercisePlan("Failed to generate an exercise plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="hero">
      <form onSubmit={handleSubmit} className="add-muscle-group-form">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="e.g. chest, triceps"
          name="muscleGroup"
          className="input-muscle-group"
        />
        <button className="add-muscle-group-button">Add Muscle Group</button>
      </form>

      {muscleGroups.length > 0 && (
        <MuscleGroups
          muscleGroups={muscleGroups}
          setMuscleGroups={setMuscleGroups}
          handleGeneratePlan={handleGeneratePlan}
          className="muscle-groups"
        />
      )}

      {isLoading && (
        <p className="loading-message">Loading your exercise plan...</p>
      )}
      {exercisePlan && (
        <ExercisePlan exercisePlan={exercisePlan} className="exercise-plan" />
      )}
    </main>
  );
}

export default Hero;
