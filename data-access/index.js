const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool();

const getRestaurants = async () => {
  const { rowCount, rows } = await pool.query(
    "SELECT uuid, name, owner_id FROM restaurant;"
  );
  return { rowCount, rows };
};

const createRestaurant = async (name, ownerId) => {
  const { rowCount, rows } = await pool.query(
    "INSERT INTO restaurant(name, owner_id) VALUES ($1, $2) RETURNING uuid, name, owner_id;",
    [name, ownerId]
  );
  return { rowCount, rows };
};

module.exports = {
  getRestaurants,
  createRestaurant,
};
