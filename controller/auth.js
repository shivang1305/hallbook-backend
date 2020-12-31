const con = require("../model/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//SIGNUP CONTROLLER
exports.signup = (req, res) => {
  var email = req.body.email_id;
  console.log(email);
  let sql = `SELECT * from users where email_id = '${email}'`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      // for new user

      const user = {
        // details of user
        name: req.body.name,
        email_id: req.body.email_id,
        password: req.body.password,
        phone_no: req.body.phone_no,
      };

      // Hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;

          // Set password to hash
          user.password = hash;

          let sql = "INSERT INTO `users` SET ?";

          con.query(sql, user, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
            // res.redirect("/login");
          });
        });
      });
    } else {
      // for already registered email id
      console.log("This email id is already registered");
      res.send("This email is already registered");
    }
  });
};

//LOGIN CONTROLLER
exports.login = (req, res) => {
  var email = req.body.email_id;
  var password = req.body.password;

  let sql = `SELECT * from users where email_id = '${email}' `;

  con.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length == 0)
      // empty response from the database
      res.send("This email id is not registered");
    else {
      // email id is matched, compare the passwords
      bcrypt.compare(password, result[0].password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch == true) {
          // login success
          // create a jwt token
          jwt.sign({ user: result[0] }, "secretkey", (err, token) => {
            res.json({ token: token });
          });
        } else if (isMatch == false) res.send("Password is incorrect");
      });
    }
  });
};
