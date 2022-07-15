const mongoose = require('mongoose')
const slugify = require('slugify')
const countries = require('i18n-iso-countries')

const countriesObj = countries.getNames('en', { select: 'official' })
const countryKeysArray = Object.keys(countriesObj)
const countryNamesArray = Object.keys(countriesObj).map(
  key => countriesObj[key]
)

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
    countryCode: {
      type: String,
      enum: countryKeysArray,
      required: [true, 'A drug must have a "ISO 3166-1 Alpha-2 code"'],
    },
    activeIngredient: {
      type: String,
      required: [true, 'A drug must have an active ingredient'],
    },
    drugClass: {
      type: String,
      required: [true, 'A drug must have a drug class'],
    },
    formulation: {
      type: String,
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
// drugSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'activeIngredient',
//     select: 'name',
//   })
//     .populate({ path: 'drugClass', select: 'name' })
//     .populate({ path: 'formulation', select: 'name' })
//   next()
// })

const Drug = mongoose.model('Drug', drugSchema)

module.exports = Drug
