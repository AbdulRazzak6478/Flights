const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');
const router = express.Router();


// /api/v1/flights POST

router.post('/',FlightMiddlewares.validateCreateRequest,FlightController.createFlight);


// /api/v1/airports GET_ALL
// router.get('/',FlightController.getAirports);

// /api/v1/airports/:id GET Airport by id
// router.get('/:id',FlightController.getAirport);

// /api/v1/airports/:id => delete Airport by id
// router.delete('/:id',FlightController.destroyAirport);

// /api/v1/airports/:id => delete Airport by id
// router.put('/:id',FlightController.updateAirport);
// router.patch('/:id',FlightController.updateAirport);


module.exports = router;