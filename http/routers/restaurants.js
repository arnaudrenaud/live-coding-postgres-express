const express = require("express");
const { getRestaurants, getRestaurantByUuid } = require("../../data-access");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ restaurants: (await getRestaurants()).rows });
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
