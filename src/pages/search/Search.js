import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
// styles
import "./Search.css";
function Search() {
  const [queryParams, setQueryParams] = useSearchParams();
  const query = queryParams.get("text");
  const {
    data: recipes,
    error,
    isPending,
  } = useFetch(`http://localhost:4000/recipes?q=${query}`);
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default Search;
