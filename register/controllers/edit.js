const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const updateUser = require("../tools/updateUser");
const deleteUser = require("../tools/deleteUser")
exports.putProfile = (req, res, next) => {
  //check inputs
  if (!validate.validateRegister(JSON.parse(JSON.stringify(req.body)))) {
    return res.render("register", { msg: "Not Acceptable" });
  }

  findUser(req.body.username)
  .then((data) => {
    if (data !== null && data.username !== req.body.userId) return res.status(400).send("duplicate user");
    updateUser(req,res);
  })
  .catch((err) => {
    console.log(err);
    return res.render("register", { msg: "something went wrong" });
  });
};


exports.deleteProfile = (req,res,next) => {
  deleteUser(req,res);
}