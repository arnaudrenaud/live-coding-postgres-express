const ERRORS = {
  INVALID_FORMAT_FOR_UUID: {
    message: "INVALID_FORMAT_FOR_UUID",
    httpStatusCode: 400,
  },
  RESTAURANT_WITH_UUID_DOES_NOT_EXIST: {
    message: "RESTAURANT_WITH_UUID_DOES_NOT_EXIST",
    httpStatusCode: 404,
  },
  NAME_CANNOT_BE_EMPTY: {
    message: "NAME_CANNOT_BE_EMPTY",
    httpStatusCode: 400,
  },
};

module.exports = {
  ERRORS,
};
