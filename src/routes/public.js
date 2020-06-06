const express = require("express");
const publicRouter = express.Router();
const geo = require("geolib");

var data = [
  {
    vehicleId: "001",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
  {
    vehicleId: "002",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
  {
    vehicleId: "003",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
  {
    vehicleId: "004",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
  {
    vehicleId: "005",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
  {
    vehicleId: "006",
    vehicleLat: 0,
    vehicleLong: 0,
    currentTimestamp: "",
    status: "",
    timoutFlag: "",
  },
];

publicRouter.get("/", function (req, res) {
  res.render("dasboard", { data });
});

publicRouter.post("/fetchVechicles", (req, res) => {
  res.statusCode = 200;
  res.send(data);
});

module.exports = publicRouter;
