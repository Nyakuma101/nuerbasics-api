const express = require("express");
const router = express.Router();
const fs = require("fs");

//GET numbers route
router.route("/").get((req, res) => {
  try {
    const numbersData = JSON.parse(fs.readFileSync("./data/numbers.json"));
    return res.status(200).json(numbersData);
  } catch (error) {
    res.status(400).json({ message: "Error Retrieving numbers Data", error });
  }
});

module.exports = router;
