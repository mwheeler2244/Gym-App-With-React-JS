import { useState, useRef, useEffect } from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const recipeRef = useRef(null);
  console.log(recipeRef);

  useEffect(() => {
    if (displayRecipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [displayRecipe]);

  function handleSubmit(e) {
    e.preventDefault();
    setIngredients((prev) => [...prev, userInput]);
    setUserInput("");
  }

  function handleRecipe() {
    setDisplayRecipe((prev) => !prev);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="e.g. tomatoes"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <Ingredients
          ref={recipeRef}
          ingredients={ingredients}
          handleRecipe={handleRecipe}
        />
      )}

      {displayRecipe && <Recipe />}
    </main>
  );
}

export default Hero;
