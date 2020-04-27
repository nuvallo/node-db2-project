const express = require("express");
const router = express.Router();
const db = require("../data/db-config.js");

router.get("/", (req, res) => {
  db("vehicles")
    .then((vehicles) => {
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.log("Error for 'GET' vehicles: ", err);
      res.status(500).json({ errorMessage: "Failed to retrieve vehicles" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("vehicles")
    .where({ id })
    .first()
    .then((vehicle) => {
      res.status(200).json(vehicle);
    })
    .catch((err) => {
      console.log("Error for 'GET' vehicle: ", err);
      res.status(500).json({ errorMessage: "Failed to retrieve vehicle" });
    });
});

router.post("/", (req, res) => {
  const vehicleData = req.body;

  db("vehicles")
    .insert(vehicleData)
    .then((vehicle) => {
      res.status(201).json(vehicle);
    })
    .catch((err) => {
      console.log("Error for 'Post' new vehicle", err);
      res.status(500).json({ errorMessage: "Failed to add vehicle" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("vehicles")
    .where({ id })
    .del()
    .then(() => {
      res.status(201).json({ message: "Vehicle successfully removed.." });
    })
    .catch((err) => {
      console.log("Error for 'DELETE' vehicle: ", err);
      res.status(500).json({ errorMessage: "Failed to add vehicle" });
    });
});

router.put("/:id", (req, res) => {
  const vehicleData = req.body;
  const { id } = req.params;

  db("vehicles")
    .where({ id })
    .update(vehicleData)
    .then((vehicle) => {
      res.status(201).json(vehicle);
    })
    .catch((err) => {
      console.log("Error for 'PUT' vehicle: ", err);
      res.status(500).json({ errorMessage: "Failed to add vehicle" });
    });
});

module.exports = router;
