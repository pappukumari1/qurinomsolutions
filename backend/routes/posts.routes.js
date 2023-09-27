const express = require("express");
const {
  getController,
  postController,
  deleteController,
  putController,
} = require("../controller/posts.controller");
const { verifyUser } = require("../middleware");

const route = express.Router();

route.get("/get",verifyUser, getController);

route.post("/",verifyUser,   postController);

route.put("/:id",verifyUser,  putController);

route.delete("/:id",verifyUser, deleteController);

module.exports = route;
