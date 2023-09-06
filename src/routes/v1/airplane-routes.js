const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();


// /api/v1/airplanes POST
router.post('/',AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane);

// /api/v1/airplanes GET_ALL
router.get('/',AirplaneController.getAirplanes);


module.exports = router;