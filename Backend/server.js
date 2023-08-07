const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Model/User");
const TeamMember = require("./Model/TeamMember");
const Resource = require("./Model/Resource");
const Blog = require("./Model/Blog");

require("dotenv").config({ paht: "/.env" });

const username = process.env["DATABASE_USERNAME"];
const password = process.env["DATABASE_PASSWORD"];
const port = process.env["PORT"];

const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.fj5wuhm.mongodb.net/test`;
const authRoute = require("./Routes/auth");
const teamRoute = require("./Routes/team");
const resourceRoute = require("./Routes/resource");
const blogRoute = require("./Routes/blog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(authRoute);
app.use(teamRoute);
app.use(resourceRoute);
app.use(blogRoute);

mongoose
  .connect(MONGODB_URI)
  .then((res) =>
    app.listen(port, () => console.log(`server is running on port ${port}`))
  )
  .catch((e) => console.log(e.message));
