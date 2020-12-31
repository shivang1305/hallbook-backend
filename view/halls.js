const express = require("express");
var router = express.Router();

const { hallsList, hallDetails } = require("../controller/halls");

router.post("/halls", hallsList);

router.post("/hall", hallDetails);

module.exports = router;
