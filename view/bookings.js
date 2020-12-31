const express = require("express");
var router = express.Router();

const { bookedDates, bookHall } = require("../controller/bookings");

router.post("/bookedDates", bookedDates);

router.post("/book/halls", bookHall);

module.exports = router;
