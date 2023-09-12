const { StatusCodes } = require("http-status-codes");

const { ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message =  'Something went wrong while creating airport';
    ErrorResponse.error = new AppError(['model number is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message =  'Something went wrong while creating airport';
    ErrorResponse.error = new AppError(['Airport code is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message =  'Something went wrong while creating airport';
    ErrorResponse.error = new AppError(['Airport cityId is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
    validateCreateRequest,
}
