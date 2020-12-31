const express = require("express");
var router = express.Router();

const { city, cities } = require("../controller/location");

router.get("/cities", cities);

router.post("/city", city);

module.exports = router;
