const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/Recipe.js')

//CREATE
recipes.post('/', (req, res) => {
  Recipe.create(req.body, (error, createdRecipe) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).send(createdRecipe)
  })
})

// READ
recipes.get('/', (req, res) => {
  Recipe.find({}, (error, foundRecipe) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(foundRecipes)
  })
})

// UPDATE
recipes.put('/:id', (req, res) => {
  // TODO: Update Contact to your resource
  Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedContact) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedRecipe)
    }
  )
})

// DELETE
// TODO: rename router to your resource
recipes.delete('/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (error, deletedContact) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(deletedRecipe)
  })
})

// Handle 404
recipes.get('/*', (req, res) => {
  res.status(404).json({ error: 'page not found' })
})

module.exports = recipes
