import React from "react";

// styles
import "./Recipe.css";

// router

import { useParams } from "react-router-dom";

function Recipe() {
  const params = useParams();

  return <div>Recipe {params.recipeId}</div>;
}

export default Recipe;
