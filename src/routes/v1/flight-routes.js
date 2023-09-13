const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const router = express.Router();

// /api/v1/flights POST

router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightMiddlewares.checkRequestParameters,
  FlightController.createFlight
);

// /api/v1/flights?trips=MUM-DEL query_params GET_ALL
router.get('/',FlightController.getAllFlights);

// /api/v1/airports/:id GET Airport by id
// router.get('/:id',FlightController.getAirport);

// /api/v1/airports/:id => delete Airport by id
// router.delete('/:id',FlightController.destroyAirport);

// /api/v1/airports/:id => delete Airport by id
// router.put('/:id',FlightController.updateAirport);
// router.patch('/:id',FlightController.updateAirport);

module.exports = router;
