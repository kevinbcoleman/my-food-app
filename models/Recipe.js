const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const recipeSchema = Schema(
  {
    label: { type: String, required: true },
    cuisineType: { type: String, required: true },
    ingredients: [
      {
        ing_name: { type: String, required: true },
        amount: { type: String, required: true }
      }
    ],
    owner: {
      type: ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', recipeSchema)
