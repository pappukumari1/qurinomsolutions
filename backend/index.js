const express = require("express");
const cors = require("cors");
const AuthRoute = require("./routes/auth.route");
const PostRoute = require("./routes/posts.routes");
require("dotenv").config();
require("./connectDB")
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/uploads", express.static("uploads"))
app.use("/", AuthRoute);
app.use("/post", PostRoute);

app.listen(process.env.PORT, () => {
  console.log(`server ${process.env.PORT}`);
});
