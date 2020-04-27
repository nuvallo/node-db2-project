const express = require("express");
const vehicles = require("../vehicles/vehicles-router");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Welcome to API" });
});

server.use("/api/vehicles", vehicles);

module.exports = server;
