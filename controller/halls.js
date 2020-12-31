const con = require("../model/connection");

exports.hallsList = (req, res) => {
  var city = req.body.city;
  let sql = "Select id, name, rating from halls where ?";
  let data = { city };
  var finalResult = [];
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "MYSQL ERROR",
      });
    }
    if (result && result.length) {
      finalResult = result;
      res.send(finalResult);
      console.log(finalResult);
    } else {
      res.send("No halls found for this particular location");
    }
    console.log(test.sql);
  });
};

exports.hallDetails = (req, res) => {
  var id = req.body.id;
  let sql = "Select * from halls where id ='" + id + "' ";
  let test = con.query(sql, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "MYSQL ERROR",
      });
    }
    if (result && result.length) {
      finalResult = result;
      res.send(finalResult);
      console.log(finalResult);
    } else {
      res.send("No halls found for this particular location");
    }
    console.log(test.sql);
  });
};
