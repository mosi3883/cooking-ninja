// styles
import "./RecipeList.css";
// Router
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="error">No recipe found...</p>;
  }
  return (
    <div className="recipe-list">
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="card">
              <h3> {recipe.title}</h3>
              <p>{recipe.cookingTime} to make.</p>
              <div>{recipe.method.substring(0, 100)}...</div>
              <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
