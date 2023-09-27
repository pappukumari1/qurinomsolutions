require("dotenv").config();

const {
  postData,
  deleteData,
  putData,
  getData,
} = require("../model/posts.model");

const getController = async (req, res) => {
  const result = await getData(req.authorized.user.id);
  res.send(result);
};

const postController = async (req, res) => {
  
  const result = await postData(req.body);
  res.send(result);
};

const deleteController = async (req, res) => {
  const result = await deleteData(req.params.id);
  res.send(result);
};

const putController = async (req, res) => {
  console.log("id: ", req.params.id);
  console.log("body: ", req.body);
  const result = await putData(req.params.id, req.body);
  res.send(result);
};

module.exports = {
  getController,
  postController,
  deleteController,
  putController,
};
