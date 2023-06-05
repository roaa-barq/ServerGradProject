const jwt = require("jsonwebtoken");
const Packages = require("../models/packages");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisisme new course");
    console.log(decoded.name);
    const packages = await Packages.findOne({
      name: decoded.name,
      "tokens.token": token,
    });

    console.log(packages);

    if (!packages) {
      throw new Error("packages auth faild");
    }
    req.token = token;
    req.packages = packages;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
