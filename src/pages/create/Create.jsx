import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
// styles
import "./Create.css";

function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const ingredientInput = useRef(null);
  const { data, error, postData } = useFetch("http://localhost:4000/recipes", "POST");

  const handleSubmit = function (e) {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  useEffect(() => {
    if (data && !error) {
      navigate("/");
    }
  }, [data, error, navigate]);

  const handleAddGredient = function (e) {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngs) => [...prevIngs, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  const deleteIng = function (ing) {
    setIngredients((prevIngs) => prevIngs.filter((i) => i !== ing));
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAddGredient}>
              add
            </button>
          </div>
        </label>
        {ingredients.length > 0 && (
          <p>
            Current ingredients:{" "}
            {ingredients.map((i) => (
              <span key={i}>
                <em className="ing" onClick={() => deleteIng(i)}>
                  {i}
                </em>
                &nbsp;
              </span>
            ))}
          </p>
        )}

        <label>
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />

          <button className="btn">Submit</button>
        </label>
      </form>
    </div>
  );
}

export default Create;
