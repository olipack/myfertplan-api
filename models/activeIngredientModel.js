const mongoose = require('mongoose')

const activeIngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The active ingredient must have a name'],
    unique: true,
    trim: true,
    maxlength: [
      50,
      'An active ingredient name must have less or equal then 50 characters',
    ],
  },
})

const ActiveIngredient = mongoose.model(
  'ActiveIngredient',
  activeIngredientSchema
)

module.exports = ActiveIngredient
