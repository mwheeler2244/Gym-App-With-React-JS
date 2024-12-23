import { forwardRef } from "react";

const Ingredients = forwardRef(function Ingredients(props, ref) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.handleRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
});

export default Ingredients;
