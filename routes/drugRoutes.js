const express = require('express')
const drugController = require('../controllers/drugController')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/drugByString')
  .get(drugController.drugByString, drugController.getAllDrugs)

router
  .route('/')
  .get(authController.protect, drugController.getAllDrugs)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    drugController.createDrug
  )

router
  .route('/:id')
  .get(drugController.getDrug)
  .patch(drugController.updateDrug)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    drugController.deleteDrug
  )

module.exports = router
