const mongoose = require('mongoose')
const slugify = require('slugify')

const drugSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The drug must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        80,
        'The drug name must have less or equal then 80 characters',
      ],
    },
    slug: String,
    activeIngredient: {
      type: mongoose.Schema.ObjectId,
      ref: 'ActiveIngredient',
      required: [true, 'A drug must have an active ingredient'],
    },
    drugClass: {
      type: mongoose.Schema.ObjectId,
      ref: 'DrugClass',
      required: [true, 'A drug must have a drug class'],
    },
    formulation: {
      type: mongoose.Schema.ObjectId,
      ref: 'Formulation',
      required: [true, 'A drug must have a formulation'],
    },
    units: {
      type: Number,
      required: [true, 'How many units are contained in one box?'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
drugSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

// QUERY MIDDLEWARE
drugSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'activeIngredient',
  })
    .populate({ path: 'drugClass' })
    .populate({ path: 'formulation' })
  next()
})

const Drug = mongoose.model('Drug', drugSchema)

module.exports = Drug
