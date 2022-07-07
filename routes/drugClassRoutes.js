const express = require('express')
const drugClassController = require('../controllers/drugClassController')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(authController.protect, drugClassController.getAllDrugClasses)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    drugClassController.createDrugClass
  )

router
  .route('/:id')
  .get(drugClassController.getDrugClass)
  .patch(drugClassController.updateDrugClass)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    drugClassController.deleteDrugClass
  )

module.exports = router
