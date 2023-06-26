const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Model/User");
require("dotenv").config({ paht: "/.env" });

const username = process.env["DATABASE_USERNAME"];
const password = process.env["DATABASE_PASSWORD"];

const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.fj5wuhm.mongodb.net/data`;
const loginRoute = require("./Routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(loginRoute);

mongoose
  .connect(MONGODB_URI)
  .then((res) =>
    app.listen(4000, () => console.log("server is running on port 4000"))
  )
  .catch((e) => console.log(e.message));
