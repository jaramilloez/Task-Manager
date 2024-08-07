const express = require("express");
const { Severity } = require("../models/severities");

const router = express.Router();
router.get("/", async (req, res) => {
  const severity = await Severity.find();
  res.send(severity);
});

module.exports = router;
