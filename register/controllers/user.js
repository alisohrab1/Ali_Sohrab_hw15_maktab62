const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const addUser = require("../tools/addUser");


exports.getRegister = (req, res, next) => {
  res.render("../views/register");
};

exports.postRegister = (req, res, next) => {
  //check inputs
  //req.body alone would result in **obj.hasOwnProperty is not a function** error . why ?
  if (!validate.validateRegister(JSON.parse(JSON.stringify(req.body)))) {
    return res.render("register", { msg: "Not Acceptable" });
  }
  //is unique
  findUser(req.body.username)
    .then((data) => {
      if (data !== null ) return res.status(400).send("duplicate user")
      addUser(req,res);
    })
    .catch((err) => {
      console.log(err);
      return res.render("register", { msg: "something went wrong" });
    });
};

exports.getLogin = (req, res, next) => {
  res.render("login");
};

exports.postLogin = (req , res , next) => {
  findUser(req.body.username)
  .then((data) => {
    if (data === null ) return res.status(400).send("invalid username or password");
    if (data.password !== req.body.password) return res.status(400).send("invalid username or password");
    console.log("login successful");
    res.send("login successful");
  })
  .catch((err) => {
    console.log(err);
    return res.render("register", { msg: "something went wrong" });
  });
  
}

exports.getProfile = (req,res,next) =>{
  findUser(req.params.username) 
  .then((data) => {
    res.render("profile", {user : data} )
  }).catch((err) => {
    res.status(400).send("something went wrong")
  })
}

