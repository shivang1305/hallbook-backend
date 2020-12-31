const express = require("express");
const mysql = require("mysql");

require("./model/connection");

//my routes
const authRoutes = require("./view/auth");
const cityRoutes = require("./view/location");
const hallRoutes = require("./view/halls");
const bookingRoutes = require("./view/bookings");
const userRoutes = require("./view/user");

//Middlewares
var app = express();
app.use(express.json()); //accept JSON params
app.use(express.urlencoded({ extended: true })); //accept URL encoded params

// //routes
app.use("/api", authRoutes); //localhost:3000/api
app.use("/api", cityRoutes);
app.use("/api", hallRoutes);
app.use("/api", bookingRoutes);
app.use("/api", userRoutes);

//Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Application server running on port ${PORT}`);
});
