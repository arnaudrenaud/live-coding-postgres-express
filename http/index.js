const express = require("express");
const dotenv = require("dotenv");
const { getRestaurants, getRestaurantByUuid } = require("../data-access");
const { ERRORS } = require("../errors");

dotenv.config();

const app = express();
const errorHandler = async (err, req, res, next) => {
  console.error(err);
  const error = ERRORS[err.message] || {
    message: "INTERNAL_SERVER_ERROR",
    httpStatusCode: 500,
  };
  res.status(error.httpStatusCode).json({ error: error.message });
};

app.get("/restaurants", async (req, res) => {
  res.json({ restaurants: (await getRestaurants()).rows });
});

app.get("/restaurants/:uuid", async (req, res, next) => {
  const { uuid } = req.params;
  try {
    res.json(await getRestaurantByUuid(uuid));
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

const port = process.env.EXPRESS_PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
