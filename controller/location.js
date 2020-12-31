const con = require("../model/connection");

exports.cities = (req, res) => {
  let sql = "SELECT DISTINCT(city) from halls";
  let test = con.query(sql, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "MYSQL ERROR",
      });
    }
    console.log(result);
    res.json(result);
  });
};

exports.city = (req, res) => {
  var city_name = req.body.city_name;
  var email_id = req.body.email_id;
  let sql = "UPDATE users SET ? where ?";
  let data = [{ city_name }, { email_id }];
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "CITY value can't be SET into db",
      });
    }
    console.log(test.sql);
    res.send("City name updated");
  });
};
