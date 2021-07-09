const ERRORS = {
  INVALID_FORMAT_FOR_UUID: {
    message: "INVALID_FORMAT_FOR_UUID",
    httpStatusCode: 400,
  },
  RESTAURANT_WITH_UUID_DOES_NOT_EXIST: {
    message: "RESTAURANT_WITH_UUID_DOES_NOT_EXIST",
    httpStatusCode: 404,
  },
};

module.exports = {
  ERRORS,
};
