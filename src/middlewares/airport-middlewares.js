const { StatusCodes } = require("http-status-codes");

const { ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if(req.body.name && req.body.code && req.body.cityId)
  {
    next();
  }
  ErrorResponse.message =  'Something went wrong while creating airport';
  ErrorResponse.error = [];
  if (!req.body.name) {
    ErrorResponse.error.push(new AppError(['Airport name is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST))
  }
  if (!req.body.code) {
    ErrorResponse.error.push(new AppError(['Airport code is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST))
  }
  if (!req.body.cityId) {
    ErrorResponse.error.push(new AppError(['Airport cityId is not found in onComing request in correct format'],StatusCodes.BAD_REQUEST))
  }
  return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  // next();
}

module.exports = {
    validateCreateRequest,
}
