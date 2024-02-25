// const knex = require("knex")(require("./knexfile"));
const express = require("express");
const cors = require("cors");
const anatomyRoute = require("./routes/anatomyRoute.js");
// const animalsRoute = require("./routes/animalsRoute.js");
// const factsRoute = require("./routes/animalsRoute.js");
// const numbersRoute = require("./routes/numbersRoute.js");
// const plantsRoute = require("./routes/plantsRoute.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

app.use("/anatomy", anatomyRoute);
// app.use("/animals", animalsRoute);
// app.use("/facts", factsRoute);
// app.use("/numbers", numbersRoute);
// app.use("/plants", plantsRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
