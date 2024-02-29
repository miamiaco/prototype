import {
    Link
  } from 'react-router-dom'
import { useState, useEffect } from 'react';
import feedService from '../services/feed';



const Feed = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    feedService
      .getAll()
      .then(initialRecipes => {
        setRecipes(initialRecipes);
      });
  }, []);


    return(
    <div>
      {recipes.map(recipe => (
        <div key={recipe.title}>
          <h2>
            <Link to={`/${recipe.title}`}>{recipe.title}</Link>
          </h2>
          <p>
          </p>
          <img src={recipe.images} alt={recipe.title} />
        </div>
      ))}
    </div>
    )
}

export default Feed