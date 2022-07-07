const express = require('express')
const activeIngredientController = require('../controllers/activeIngredientController')
const authController = require('../controllers/authController')

const router = express.Router()

// router.param('id', activeIngredientController.checkID);

router
  .route('/')
  .get(
    authController.protect,
    activeIngredientController.getAllActiveIngredients
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    activeIngredientController.createActiveIngredient
  )

router
  .route('/:id')
  .get(activeIngredientController.getActiveIngredient)
  .patch(activeIngredientController.updateActiveIngredient)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    activeIngredientController.deleteActiveIngredient
  )

module.exports = router
