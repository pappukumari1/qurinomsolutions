const jwt = require("jsonwebtoken");
require("dotenv").config();
const { postData, getData } = require("../model/auth.model");

const postController = async (req, res) => {
  const user = await getData(req.body.email);
  if (!user) {
    const result = await postData(req.body);
    res.send({ result, status: 200 });
  } else {
    res.send({ message: "Email already registered", status: 400 });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.send({ message: "email and password required", login: false });
    return;
  }
  const result = await getData(email);

  if (!result || result.password !== password) {
    res.send({ message: "credential not matched", login: false });
    return;
  }
  const { firstName, lastName } = result;
  const token = jwt.sign(
    { id: result._id, email: result.email, name: firstName + " " + lastName },
    process.env.SECRET_KEY
  );
  res.send({ token, login: true });
};

module.exports = { postController, loginController };
