const express = require("express");
const {
  getRestaurants,
  getRestaurantsByOwnerId,
  getRestaurantByUuid,
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

module.exports = router;
