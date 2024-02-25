// const knex = require("knex")(require("../knexfile"));

// //get all anatomy
// const anatomyList = async (_req, res) => {
//   try {
//     const allAnatomy = await knex.select("*").from("anatomy");
//     res.status(200).json(allAnatomy);
//   } catch {
//     res.status(500).send("Error getting databases");
//   }
// };

// module.exports = {
//   anatomyList,
// };
