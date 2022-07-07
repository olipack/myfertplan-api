const Formulation = require('../models/formulationModel')
const factory = require('./handlerFactory')

exports.getAllFormulations = factory.getAll(Formulation)
exports.getFormulation = factory.getOne(Formulation)
exports.createFormulation = factory.createOne(Formulation)
exports.updateFormulation = factory.updateOne(Formulation)
exports.deleteFormulation = factory.deleteOne(Formulation)
