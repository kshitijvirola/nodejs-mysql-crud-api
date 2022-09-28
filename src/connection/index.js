const mysql = require("mysql2");
require("dotenv").config();

// module.exports = async () => {
//   try {
    const connection = mysql.createPool({
      host: "localhost",
      user: "root",
      port: '3306',
      password: "ProEx@2013",
      database: "upsi",
      // insecureAuth: true
    });
    // db.connect((err) => {
    //     if (err) throw err;
    //     console.log("MySql Connected");
    //   })
    // connection.connect((err)=> {
    //     if (err) throw err;
    //     console.log("Connected!");});
    // .then(() => console.log("connection Connected sucessfull"));
//   } catch (error) {
//     console.log("error", error);
//     console.log("could not connect to database");
//   }
// };
module.exports = connection;