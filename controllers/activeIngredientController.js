const ActiveIngredient = require('../models/activeIngredientModel')
const factory = require('./handlerFactory')

exports.getAllActiveIngredients = factory.getAll(ActiveIngredient)
exports.getActiveIngredient = factory.getOne(ActiveIngredient)
exports.createActiveIngredient = factory.createOne(ActiveIngredient)
exports.updateActiveIngredient = factory.updateOne(ActiveIngredient)
exports.deleteActiveIngredient = factory.deleteOne(ActiveIngredient)
