const express = require("express"),
  cors = require("cors"),
  path = require("path"),
  morgan = require("morgan"),
  mysql = require("mysql2"),
  myConnection = require("express-myconnection"),
  bodyParser = require("body-parser");
require("dotenv").config();
const userRoutes = require("./routes/user");
// const connection = require("../src/connection");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      port: "3306",
      password: "ProEx@2013",
      database: "upsi",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRoutes);
app.get("/", async (req, res) => {
  // res.send("hello");
  res.json({ message: "Welcome to my application." });
});

app.listen(port, () => {
  console.log("connection is live on", port);
});
