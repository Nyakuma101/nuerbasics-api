const knex = require("knex")(require("../knexfile"));

//get all animals
const animalsList = async (_req, res) => {
  try {
    const allAnimals = await knex.select("*").from("animals");
    res.status(200).json(allAnimals);
  } catch {
    res.status(500).send("Error getting databases");
  }
};

module.exports = {
  animalsList,
};
