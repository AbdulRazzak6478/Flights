const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport, City } = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Sequelize } = require("sequelize");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
      //using eager loading :  querying data of several model at once
      include: [
        {
          // custom join in already in primary key
          model: Airplane,
          required: true,
          as: "airplaneDetail",
        },
        {
          // custom join in diff attributes
          model: Airport,
          required: true,
          as: "departureAirport", // Note : make sure to give alias at the place of association also and use alias name to check
          // to associate with multiple columns in model
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
          include:{
            model:City,
            required:true
          }
        },
        {
          model: Airport,
          required: true,
          as: "arrivalAirport", // Note : make sure to give alias at the place of association also use alias name to check
          // to associate with multiple columns in model
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
          // nested join can be done
          include:{
            model:City,
            required:true
          }
        },
      ],
    });
    // return response;
    console.log(response.length);

    if (response.length == 0) {
      throw new AppError(
        "Not able to found the flight of these filters",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
}

module.exports = FlightRepository;
