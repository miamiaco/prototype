import Feed from './components/Feed'
import recipeService from './services/feed'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    recipeService
      .getAll()
      .then(initialRecipes => {
        setRecipes(initialRecipes)
      })
  }, [])

  return (
    <div>
      <h1>MiaMia</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Feed recipes={recipes} />} />       
        </Routes>
      </Router>
    </div>
  )
}

export default App;
