const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const Packages = require("../models/packages");
const auth = require("../middleware/authPackages");

router.get("/AllPackages", async (req, res) => {
  try {
    const packages = await Packages.find({});
    res.send(packages);
  } catch (e) {
    res.status(500).send;
  }
});

module.exports = router;
