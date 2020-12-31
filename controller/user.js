const con = require("../model/connection");

exports.userDetails = (req, res) => {
  var email_id = req.body.email_id;
  let sql = "SELECT name, password, confirm_pass, phone_no from users where ?";
  let data = { email_id };
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.json({
        error: "MYSQL error",
      });
    }
    console.log(test.sql);
    console.log(result);
    res.json(result);
  });
};

exports.updateDetails = (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  var confirm_pass = req.body.confirm_pass;
  var phone_no = req.body.phone_no;
  var email_id = req.body.email_id;

  let sql = "UPDATE users SET ? where ?";
  let data = [{ name, password, confirm_pass, phone_no }, { email_id }];
  let test = con.query(sql, data, (error, result) => {
    if (error) {
      console.log(test.sql);
      return res.status(400).json({
        error: "User details cannot be UPDATED",
      });
    }
    console.log(test.sql);
    console.log(result);
    res.send("updated");
  });
};
