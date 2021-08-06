const express = require('express')
const apiRecipes = express.Router()
const ApiRecipe = require('../models/ApiRecipe')
const authn = require('../middleware/auth')

//CREATE
apiRecipes.post('/',
  [authn], async (req, res) => {

    const { label, cuisineType, ingredients = [] } = req.body
    try {
      const newApiRecipe = new ApiRecipe({
        label,
        cuisineType,
        ingredients,
        owner: req.user.id
      })

      const apiRecipe = await newApiRecipe.save()
      res.json(apiRecipe)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }

  })

// READ
apiRecipes.get('/', authn, async (req, res) => {
  try {
    const apiRecipes = await ApiRecipe.find({ owner: req.user.id }).sort({ date: -1 })
    res.json(apiRecipes)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

})


// DELETE
apiRecipes.delete('/:id', authn, async (req, res) => {
  try {
    let apiRecipe = await ApiRecipe.findById(req.params.id)

    if (!apiRecipe) return res.status(404).json({ msg: 'Not found' })

    if (apiRecipe.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' })
    }

    await ApiRecipe.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Recipe Deleted' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = apiRecipes
