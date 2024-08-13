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

  // Check if the email already exists
  const existingUser = await usermodel.findOne({ email });

  if (existingUser) {
    return res.status(400).send("Email already exists");
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, result) => {
      let user = await usermodel.create({
        username,
        email,
        password: result,
        age,
      });

      let token = jwt.sign({ email }, "Secret");
      res.cookie("token", token);
      res.status(201).redirect(`/user/${username}`);
    });
  });
});
app.get("/user/:username",(req,res)=>{
  res.render("user",{name:req.params.username})
})

app.post('/logout',(req,res)=>{
  res.cookie("token","")
  res.redirect("/")
})

app.  Q`
Q
get("/login",(req,res)=>{







  res.render("login")

})
app.post("/login",(req,res)=>{
\ \
  Q\1\`  \1`/                                 `\qwbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb5\\1olt;\  
  Q1\Q  
      
  
      \
      
        
  
        
        
      
  
    Q`
        \lt695o97u8u8iq1      
})

app.listen(3000);
