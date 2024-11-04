import React from 'react';

// styles
import './Recipe.css';

// router

import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

function Recipe() {
  const params = useParams();

  const { data: recipe, isPending, error } = useFetch(`http://localhost:4000/recipes/${params.recipeId}`);

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
