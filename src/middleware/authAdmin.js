const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisisme new course");
    console.log(decoded._id);
    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    console.log(admin);

    if (!admin) {
      throw new Error("admin auth faild");
    }
    req.token = token;
    req.admin = admin;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
