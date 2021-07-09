const { Pool } = require("pg");
const dotenv = require("dotenv");
const { ERRORS } = require("../errors");

dotenv.config();

const pool = new Pool();

const getRestaurants = async () => {
  const { rowCount, rows } = await pool.query(
    "SELECT uuid, name, owner_id FROM restaurant;"
  );
  return { rowCount, rows };
};

const getRestaurantsByOwnerId = async (ownerId) => {
  const { rowCount, rows } = await pool.query(
    "SELECT uuid, name, owner_id FROM restaurant WHERE owner_id=$1;",
    [ownerId]
  );
  return { rowCount, rows };
};

const getRestaurantByUuid = async (uuid) => {
  try {
    const { rows } = await pool.query(
      "SELECT uuid, name, owner_id FROM restaurant WHERE uuid=$1;",
      [uuid]
    );
    const restaurant = rows[0];
    if (!restaurant) {
      throw Error(ERRORS.RESTAURANT_WITH_UUID_DOES_NOT_EXIST.message);
    }
    return restaurant;
  } catch (error) {
    if (error.code === "22P02") {
      throw Error(ERRORS.INVALID_FORMAT_FOR_UUID.message);
    } else {
      throw Error(error.message);
    }
  }
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
  getRestaurantsByOwnerId,
  getRestaurantByUuid,
  createRestaurant,
};
