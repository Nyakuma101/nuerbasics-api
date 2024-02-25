const express = require("express");
const router = express.Router();
const fs = require("fs");

//GET plants route
router.route("/").get((req, res) => {
  try {
    const plantsData = JSON.parse(fs.readFileSync("./data/plants.json"));
    return res.status(200).json(plantsData);
  } catch (error) {
    res.status(400).json({ message: "Error Retrieving Plants Data", error });
  }
});

module.exports = router;
