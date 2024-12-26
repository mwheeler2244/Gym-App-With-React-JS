function ExercisePlan({ exercisePlan }) {
  return (
    <>
      <section className="exercise-plan-container">
        <h2 className="exercise-plan-title">Your 30-Minute Workout Plan</h2>
        <div
          className="exercise-plan-content"
          dangerouslySetInnerHTML={{ __html: exercisePlan }}
        />
      </section>
    </>
  );
}

export default ExercisePlan;
