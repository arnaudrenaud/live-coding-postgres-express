const express = require("express");

const {
  getRestaurants,
  getRestaurantsByOwnerId,
  getRestaurantByUuid,
  createRestaurant,
} = require("../../data-access");
const { asyncErrorHandler } = require("../utils");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async (req, res) => {
    if (req.query.filter === "mine") {
      res.json({
        restaurants: (await getRestaurantsByOwnerId(req.authenticatedUserId))
          .rows,
      });
    } else {
      res.json({ restaurants: (await getRestaurants()).rows });
    }
  })
);

router.get(
  "/:uuid",
  asyncErrorHandler(async (req, res) => {
    const { uuid } = req.params;
    res.json(await getRestaurantByUuid(uuid));
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res) => {
    const { name } = req.body;
    const createdRestaurant = await createRestaurant(
      name,
      req.authenticatedUserId
    );
    res.status(201).json(createdRestaurant);
  })
);

module.exports = router;
