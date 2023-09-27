const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  thought: String,
  userId: mongoose.Schema.Types.ObjectId
});

const Post = mongoose.model("posts", postSchema);

const getData = async (userId) => {
  try {
    const response = await Post.find({userId});

    const length = await Post.find().count();

    return {
      response,
      message: "success",
      status: 200,
      length,
    };
  } catch (error) {
    return { response: error, message: "error", status: 400 };
  }
};

const postData = async (values) => {
  try {
    const response = await Post.create(values);
    return { response, message: "success", status: 200 };
  } catch (error) {
    return { response: error, message: "error", status: 400 };
  }
};

const deleteData = async (id) => {
  try {
    const response = await Post.findByIdAndDelete(id);
    return { response, message: "success", status: 200 };
  } catch (error) {
    return { response: error, message: "error", status: 400 };
  }
};

const putData = async (id, values) => {
  try {
    const response = await Post.findByIdAndUpdate(id, values);
    return { response, message: "success", status: 200 };
  } catch (error) {
    return { response: error, message: "error", status: 400 };
  }
};
module.exports = {
  postData,
  deleteData,
  putData,
  getData,
};
