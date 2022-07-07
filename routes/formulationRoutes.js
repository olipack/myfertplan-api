const express = require('express')
const formulationController = require('../controllers/formulationController')
const authController = require('../controllers/authController')

const router = express.Router()

router
  .route('/')
  .get(authController.protect, formulationController.getAllFormulations)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    formulationController.createFormulation
  )

router
  .route('/:id')
  .get(formulationController.getFormulation)
  .patch(formulationController.updateFormulation)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    formulationController.deleteFormulation
  )

module.exports = router
