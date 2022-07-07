const DrugClass = require('../models/drugClassModel')
const factory = require('./handlerFactory')

exports.getAllDrugClasses = factory.getAll(DrugClass)
exports.getDrugClass = factory.getOne(DrugClass)
exports.createDrugClass = factory.createOne(DrugClass)
exports.updateDrugClass = factory.updateOne(DrugClass)
exports.deleteDrugClass = factory.deleteOne(DrugClass)
