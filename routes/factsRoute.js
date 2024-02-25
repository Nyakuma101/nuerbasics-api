const express = require("express");
const router = express.Router();
const fs = require("fs");

//GET facts route
router.route("/").get((req, res) => {
  try {
    const factsData = JSON.parse(fs.readFileSync("./data/facts.json"));
    return res.status(200).json(factsData);
  } catch (error) {
    res.status(400).json({ message: "Error Retrieving Facts Data", error });
  }
});

module.exports = router;
