const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
app.set("view engine", "ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const usermodel = require("./models/user");

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/Create", async (req, res) => {
  let { username, email, password, age } = req.body;
  let createduser = await usermodel.create({ username, email, password, age });
  
  
});

app.listen(3000);
