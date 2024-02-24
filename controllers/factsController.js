const knex = require("knex")(require("../knexfile"));

//get all facts
const factsList = async (_req, res) => {
  try {
    const allFacts = await knex.select("*").from("facts");
    res.status(200).json(allFacts);
  } catch {
    res.status(500).send("Error getting databases");
  }
};

module.exports = {
  factsList,
};
