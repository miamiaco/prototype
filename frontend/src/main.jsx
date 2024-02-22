import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

const baseUrl = '/api/recipes'

axios.get(baseUrl).then(response => {
  const recipes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App recipes={recipes} />)
})