const con = require("../model/connection");

exports.bookedDates = (req, res) => {
  var hall_id = req.body.hall_id;

  let sql = "SELECT start_date, end_date from bookings where ?";
  let data = { hall_id };
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "MYSQL ERROR",
      });
    }
    console.log(result);
    return res.status(200).json(result);
  });
};

exports.bookHall = (req, res) => {
  var customer_id = req.body.customer_id;
  var hall_id = req.body.hall_id;
  var occasion = req.body.occasion;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;
  var guests_no = req.body.guests_no;
  var amount = req.body.amount;

  let sql = "INSERT INTO bookings SET ?";
  let data = {
    customer_id,
    hall_id,
    occasion,
    start_date,
    end_date,
    guests_no,
    amount,
  };
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "Booking failed",
      });
    }
    console.log(test.sql);
    console.log(result);
    res.send("booked");
  });
};
