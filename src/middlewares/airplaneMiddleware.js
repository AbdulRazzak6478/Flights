
const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
    console.log("airplaneMiddleware/model number :",req.body.modelNumber);
    const response_object = {
      success: true,
      message: "Something went wrong while creating airplane",
      data: {},
      error: {explanation:'OnComing request is not in correct format'},
    }
    let explanation = "OnComing request is not in correct format";
  if (!req.body.modelNumber) {
    explanation="model number is not found in onComing request in c orrect format";
    response_object.error.explanation = explanation;
    return res.status(StatusCodes.BAD_REQUEST).json(response_object);
  }
  else if(!req.body.capacity)
  {
    explanation="capacity is not found in onComing request in correct format";
    response_object.error.explanation = explanation;
    return res.status(StatusCodes.BAD_REQUEST).json(response_object);
  }
  next();
}

module.exports = {
    validateCreateRequest,
}