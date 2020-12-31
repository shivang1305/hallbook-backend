const mysql = require("mysql");

//Connect to MySQL
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "android_nodejs",
});

con.connect((err) => {
  if (err) throw err;
  console.log("MYSQL is connected");
});

module.exports = con;
