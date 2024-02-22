const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))


let notes = [
    {
      id: 1,
      content: "Recipe 1",
      important: true
    },
    {
      id: 2,
      content: "Recipe 2",
      important: false
    },
    {
      id: 3,
      content: "Recipe 3",
      important: true
    }
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})