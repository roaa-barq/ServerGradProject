const express = require("express");
require("./src/db/mongoose");
const userRouter = require("./src/routers/user");
const adminRouter = require("./src/routers/admin");
const packagesRouter = require("./src/routers/packages");
const connectDB = require("./src/db/mongoose");

var cors = require("cors");

const app = express();
connectDB();
app.use(cors());
const port = process.env.PORT || 3080;
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);
app.use(packagesRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});
