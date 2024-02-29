import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeService from '../services/recipe'; 

const Recipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { title } = useParams(); // Now it will work because it's used in the correct context

    useEffect(() => {
        if (title) {
            recipeService.findRecipe({ title }) // Ensure your service accepts an object with a title property
                .then(foundRecipe => {
                    setRecipe(foundRecipe);
                    console.log(foundRecipe)
                })
                .catch(error => {
                    console.error('Failed to fetch recipe:', error);
                    // Handle error state as needed
                });
        }
    }, [title]); // Depend on title to refetch when it changes

    if (!recipe) {
        return <div>Loading...</div>;
    }

    // Once recipe is guaranteed to be non-null, proceed with rendering
    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.images} alt={recipe.title} style={{ width: '100%', height: 'auto' }} />
            <p>{recipe.title}</p>
            <p>{recipe.content}</p>
            <p>{recipe.url}</p>
        </div>
    );
};

export default Recipe;
