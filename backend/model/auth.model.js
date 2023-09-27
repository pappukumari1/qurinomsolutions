const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

const postData = async (user) => {
  let result = await userModel.create(user);
  console.log("result=before=",result);
 
  console.log("result=after=",result);
 
  return result;
};

const getData = async (user) => {
  const result = await userModel.findOne({ email: user });
  return result;
};

module.exports = { postData, getData };
