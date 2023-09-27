const express = require("express");
require("dotenv").config();
const { postController, loginController } = require("../controller/auth.controller");
const { verifyUser } = require("../middleware");
const router = express.Router();

router.post("/signup", postController);
router.post("/signin", loginController);
router.get("/home", verifyUser, (req, res) => {
  res.send(req.authorized);
});
module.exports =  router ;
