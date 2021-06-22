const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/Recipe.js')
const { check, validationResult } = require('express-validator')
const authn = require('../middleware/auth')
const User = require('../models/User')

//CREATE
recipes.post('/',
  [authn,
    [
      check('label', 'Label is required')
        .not()
        .isEmpty()
    ]
  ], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { label, cuisineType, ingredients } = req.body
    try {
      const newRecipe = new Recipe({
        label,
        cuisineType,
        ingredients,
        owner: req.user.id
      })

      const recipe = await newRecipe.save()
      res.json(recipe)
    } catch (error) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }


    // Recipe.create(req.body, (error, createdRecipe) => {
    //   if (error) {
    //     res.status(400).json({ error: error })
    //   }
    //   res.status(200).send(createdRecipe)
    // })
  })

// READ
recipes.get('/', authn, async (req, res) => {
  try {
    const recipes = await Recipe.find({ owner: req.user.id }).sort({ date: -1 })
    res.json(recipes)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }



  // Recipe.find({}, (error, foundRecipe) => {
  //   if (error) {
  //     res.status(400).json({ error: error })
  //   }
  //   res.status(200).json(foundRecipes)
  // })
})

// UPDATE
recipes.put('/:id', authn, async (req, res) => {
  const { label, cuisineType, ingredients } = req.body

  const recipeObj = {}
  if (label) recipeObj.label = label
  if (cuisineType) recipeObj.cuisineType = cuisineType
  if (ingredients) recipeObj.ingingredients = ingredients

  try {
    let recipe = await Recipe.findById(req.params.id)

    if (!recipe) return res.status(404).json({ msg: 'Not found' })

    if (recipe.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' })
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: recipeObj },
      { new: true }
    )
    res.json(recipe)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

  // Recipe.findByIdAndUpdate(
  //   req.params.id,
  //   label,
  //   cuisineType,
  //   ingredients
  //   { new: true },
  //   (err, updatedRecipe) => {
  //     if (err) {
  //       res.status(404).json({ error: err.message })
  //     }
  //     res.status(200).json(updatedRecipe)
  //   }
  // )
})

// DELETE
recipes.delete('/:id', authn, async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id)

    if (!recipe) return res.status(404).json({ msg: 'Not found' })

    if (recipe.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' })
    }

    await Recipe.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Recipe Deleted' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
// recipes.delete('/:id', (req, res) => {
//   Recipe.findByIdAndRemove(req.params.id, (error, deletedRecipe) => {
//     if (error) {
//       res.status(400).json({ error: error })
//     }
//     res.status(200).json(deletedRecipe)
//   })
// })

// Handle 404
// recipes.get('/*', (req, res) => {
//   res.status(404).json({ error: 'page not found' })
// })

module.exports = recipes
