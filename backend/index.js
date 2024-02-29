require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

const Recipe = require('./models/recipe')

// Read recipes from recipes_content.json
let recipes = JSON.parse(fs.readFileSync('recipes_content.json', 'utf-8'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/recipes', (request, response) => {
  response.json(recipes)
})

app.get('/api/recipes/:id', (request, response) => {
  Recipe.findById(request.params.id).then(recipe => {
    response.json(recipe)
  })
})

app.post('/api/recipes', (request, response) => {
  const body = request.body
  console.log(request.body)

  if (body.name.length === 0) {
    return response.status(400).json({ error: 'content missing' })
  }

  const recipe = new Recipe({
    name: body.name,
    content: body.content,
  })

  recipe.save().then(savedRecipe => {
    response.json(savedRecipe)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})