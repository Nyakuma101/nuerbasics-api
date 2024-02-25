const express = require("express");
const router = express.Router();
const fs = require("fs");

//GET animals route
router.route("/").get((req, res) => {
  try {
    const animalsData = JSON.parse(fs.readFileSync("./data/animals.json"));
    return res.status(200).json(animalsData);
  } catch (error) {
    res.status(400).json({ message: "Error Retrieving Animals Data", error });
  }
});

module.exports = router;
