const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool();

const getRestaurants = async () => {
  return pool.query("SELECT * FROM restaurant;");
};

module.exports = {
  getRestaurants,
};
