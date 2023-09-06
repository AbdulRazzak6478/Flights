const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

// /api/v1/cities/:id GET city by id
router.get('/:id',CityController.getCity);

// /api/v1/cities/:id => delete city by id
router.delete('/:id',CityController.destroyCity);


module.exports = router;
