const express = require("express");
const {
  getRestaurants,
  getRestaurantsByOwnerId,
  getRestaurantByUuid,
  createRestaurant,
} = require("../../data-access");

const router = express.Router();

const getAuthenticatedUserId = () => 1;

router.get("/", async (req, res) => {
  if (req.query.filter === "mine") {
    const authenticatedUserId = getAuthenticatedUserId();
    res.json({
      restaurants: (await getRestaurantsByOwnerId(authenticatedUserId)).rows,
    });
  } else {
    res.json({ restaurants: (await getRestaurants()).rows });
  }
});

router.get("/:uuid", async (req, res, next) => {
  const { uuid } = req.params;
  try {
    res.json(await getRestaurantByUuid(uuid));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const authenticatedUserId = getAuthenticatedUserId();

    const { name } = req.body;
    const createdRestaurant = await createRestaurant(name, authenticatedUserId);
    res.status(201).json(createdRestaurant);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
