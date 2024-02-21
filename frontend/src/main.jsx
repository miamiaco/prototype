import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

const baseUrl = 'http://localhost:3001/api/notes'



axios.get(baseUrl).then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})