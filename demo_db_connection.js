var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "Gloria",
  password: "nycda123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected!");
});