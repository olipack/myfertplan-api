const Drug = require('../models/drugModel');
const factory = require('./handlerFactory');

exports.getAllDrugs = factory.getAll(Drug);
// exports.getDrug = factory.getOne(Drug, { path: 'reviews' });
exports.getDrug = factory.getOne(Drug);
exports.createDrug = factory.createOne(Drug);
exports.updateDrug = factory.updateOne(Drug);
exports.deleteDrug = factory.deleteOne(Drug);
