const express = require("express");
const router = express.Router();
const fs = require("fs");

//GET anatomy route
router.route("/").get((req, res) => {
  try {
    const anatomyData = JSON.parse(fs.readFileSync("./data/anatomy.json"));
    return res.status(200).json(anatomyData);
  } catch (error) {
    res.status(400).json({ message: "error retrieving anatomy data", error });
  }
});

module.exports = router;
