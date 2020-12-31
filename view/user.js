const express = require("express");
var router = express.Router();

const { userDetails, updateDetails } = require("../controller/user");

router.get("/user/details", userDetails);

router.post("/user/update/details", updateDetails);

module.exports = router;
