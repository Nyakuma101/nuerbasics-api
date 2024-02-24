/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("plants").insert([
    [
      {
        Id: 0,
        facts:
          "Nuer, or Thok Naath (people's language), is a language of the West Nilotic branch of the Nilo-Saharan language family",
      },
      {
        Id: 1,
        facts:
          "Thok Naath spoken primarily in South Sudan and Ethiopia East Africa, Australia and the USA",
      },
      {
        Id: 2,
        facts:
          "The Nuer people belong to eight sections (or clans). These are Bul, Lek, Jikany, Jegai, Adok, Nyong, Ador, Gawaar and Lou",
      },
      {
        Id: 3,
        facts:
          "The varieties spoken by each section are conventionally grouped into two dialect clusters, known as Western Nuer and Eastern Nuer.",
      },
      {
        Id: 4,
        facts:
          "Eastern varieties of Nuer are spoken to the east of the White Nile in the Republic of South Sudan and in the Gambella region of Ethiopia. Eastern Nuer comprises four dialects: the Gawaar dialect spoken by the Gawaar section, the Lou dialect spoken by the Lou section, the Jikany dialect spoken by the Jikany in the east of South Sudan and Ethiopian Jikany, spoken in Gambella",
      },
      {
        Id: 5,
        facts:
          "The Jikany variety spoken in the east of South Sudan is also known as the Nasir dialect after the town of Nasir. The Jikany/Nasir dialect forms the basis for the orthography. The Ethiopian Jikany are said to speak an Eastern variety close to the Nasir dialect",
      },
    ],
  ]);
};
