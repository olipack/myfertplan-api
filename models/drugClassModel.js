const mongoose = require('mongoose')

const drugClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The drug class must have a name'],
    unique: true,
    trim: true,
    maxlength: [
      50,
      'A drug class name must have less or equal then 50 characters',
    ],
  },
})

const DrugClass = mongoose.model('DrugClass', drugClassSchema)

module.exports = DrugClass
