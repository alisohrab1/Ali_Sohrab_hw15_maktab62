const express = require('express');
const router = express.Router();
const userController =  require('../controllers/user');
const editController = require("../controllers/edit");

router.get("/" ,(req, res) => res.render("../views/index"));

router.get("/register" , userController.getRegister);
router.post("/register" , userController.postRegister)

router.get("/login" , userController.getLogin);
router.post("/login", userController.postLogin);

router.get("/profile/:username" , userController.getProfile)
router.put("/profile/:username", editController.putProfile )
router.delete("/profile/:username" , editController.deleteProfile)


module.exports = router;