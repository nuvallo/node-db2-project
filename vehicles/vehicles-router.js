const express = require("express");
const router = express.Router();
const db = require("../data/db-config.js");

router.get("/", async (req, res, next) => {
  try {
    const vehicles = await db("vehicles");
    res.status(200).json(vehicles);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await db("vehicles").where({ id }).first();
    res.status(200).json(vehicle);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newVehicle = await db("vehicles").insert(req.body);
    res.status(200).json(newVehicle);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await db("vehicles").where({ id }).del();
    res.status(200).json({ message: "Vehicle successfully removed.." });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newVehicle = await db("vehicles").where({ id }).update(req.body);
    res.status(200).json(newVehicle);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
