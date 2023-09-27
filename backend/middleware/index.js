const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.send({
      message: "Token Required",
      login: false,
      status: 401,
    });
    return;
  }
  const isVerified = jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.send({
        message: "Invalid Token",
        login: false,
        status: 401
      });
    } else {
      req.authorized = {
        message: "Valid Token",
        login: true,
        status: 200,
        user,
      };
      next();
    }
  });
};

module.exports = { verifyUser };
