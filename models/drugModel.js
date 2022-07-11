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
      type: String,
      enum: [
        '25-OH vitamin D',
        'acetylsalicylic acid',
        'cetrorelix',
        'dehydroepiandrosterone (DHEA)',
        'dalteparin',
        'diclofenac',
        'estradiol valerate',
        'estradiol / dydrogesterone',
        'enoxiparine',
        'folic acid',
        'follitropin alfa',
        'follitropin alfa / lutropin alfa',
        'follitropin beta',
        'ganirelix',
        'goserelin',
        'hydroxychloroquine',
        'human chorionic gonadotropin',
        'lenograstim',
        'leuprolide acetate',
        'levonorgestrel / ethinylestradiol',
        'levothyroxine',
        'medroxy-progesterone',
        'menopausal gonadotropin',
        'menotrophin',
        'myo inositol / folic acid',
        'nafarelin',
        'nicotinamide mononucleotide',
        'prednisone',
        'prednisolone',
        'progesterone micronized',
        'sildenafil',
        'soybean oil',
        'tacrolimus',
        'triptoreline',
        'vitamin C',
        'vitamin E',
      ],
      required: [true, 'A drug must have an active ingredient'],
    },
    drugClass: {
      type: String,
      enum: [
        'anticoagulants & antiagragants',
        'corticosteroids',
        'estrogens',
        'gestagens',
        'GnRH agonists',
        'GnRH antagonists',
        'gonadotropins',
        'immunomodulators',
        'oral contraceptives',
        'vitamins and supplements',
      ],
      required: [true, 'A drug must have a drug class'],
    },
    formulation: {
      type: String,
      enum: [
        'capsules',
        'effervescent tablets',
        'infusions',
        'intramuscular injections',
        'nasal spray',
        'patches',
        'suchets',
        'vaginal capsules',
        'vaginal pessaries',
        'vaginal gel',
        'subcutaneous injections',
        'tablets',
      ],
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
