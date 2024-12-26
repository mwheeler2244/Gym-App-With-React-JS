const MuscleGroups = ({
  muscleGroups,
  handleGeneratePlan,
  setMuscleGroups,
}) => {
  function handleDelete(id) {
    const filterMuscle = muscleGroups.filter((_, index) => index !== id);
    setMuscleGroups(filterMuscle);
  }
  return (
    <section className="muscle-groups-list">
      <h2>Your Muscle Groups:</h2>
      <div className="get-exercise-plan-container">
        <ul className="muscle-list">
          {muscleGroups.map((group, index) => (
            <li key={index}>
              <button
                onClick={() => handleDelete(index)}
                className="delete-muscle"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              {group}
            </li>
          ))}
        </ul>

        <button onClick={handleGeneratePlan}>Generate Plan</button>
      </div>
    </section>
  );
};

export default MuscleGroups;
