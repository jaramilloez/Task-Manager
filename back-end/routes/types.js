const express = require("express");
const { Type } = require("../models/types");

const router = express.Router();
router.get("/", async (req, res) => {
  const type = await Type.find();
  res.send(type);
});

module.exports = router;
