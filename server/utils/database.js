const mysql = require("mysql2");

let pool = mysql
  .createPool({
    host: "localhost",
    database: "student",
    port: 3306,
    user: "root",
    password: "khoa",
  })
  .promise();

module.exports = pool;
