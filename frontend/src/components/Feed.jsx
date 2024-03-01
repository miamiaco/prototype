import { Link } from 'react-router-dom';
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

  // Utility function to get the first image URL
  const getFirstImageUrl = (images) => {
    if (Array.isArray(images) && images.length > 0) {
      return images[0]; // Return the first image if it's an array with at least one URL
    }
    return images; // Return the image if it's not an array or is an empty array
  };

  return (
    <div className="feed-container">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.title}>
          <h2>
            <Link to={`/${recipe.title}`}>{recipe.title}</Link>
          </h2>
          <img className="recipe-image" src={getFirstImageUrl(recipe.images)} alt={recipe.title} />
          {/* You can add more recipe details here */}
        </div>
      ))}
    </div>
  );
}

export default Feed;
