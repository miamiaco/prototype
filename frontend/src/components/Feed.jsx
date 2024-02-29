import {
    Link
  } from 'react-router-dom'

const Feed = ({ recipes }) => {
    return(
    <div>
      {recipes.map(recipe => (
        <div key={recipe.title}>
          <h2>
            <Link to={`/recipes/${recipe.title}`}>{recipe.title}</Link>
          </h2>
          <p>
          </p>
          <img src={recipe.images} alt={recipe.name} />
        </div>
      ))}
    </div>
    )
}

export default Feed