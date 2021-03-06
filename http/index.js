const express = require("express");
const dotenv = require("dotenv");

const { ERRORS } = require("../errors");
const restaurantsRouter = require("./routers/restaurants");

const getAuthenticatedUserId = () => 1;

dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.authenticatedUserId = getAuthenticatedUserId();
  next();
});
app.use("/restaurants", restaurantsRouter);

const errorHandler = async (err, req, res, next) => {
  console.error(err);
  const error = ERRORS[err.message] || {
    message: "INTERNAL_SERVER_ERROR",
    httpStatusCode: 500,
  };
  res.status(error.httpStatusCode).json({ error: error.message });
};
app.use(errorHandler);

const port = process.env.EXPRESS_PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
