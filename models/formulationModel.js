const mongoose = require('mongoose')

const formulationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The formulation must have a name'],
    unique: true,
    trim: true,
    maxlength: [
      50,
      'A formulation name must have less or equal then 50 characters',
    ],
  },
})

const Formulation = mongoose.model('Formulation', formulationSchema)

module.exports = Formulation
