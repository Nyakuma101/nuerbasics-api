/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("plants").insert([
    [
      {
        Id: 0,
        thokNaath: "yil",
        english: "waterlily",
      },
      {
        Id: 1,
        thokNaath: "thiɛl",
        english: "thistle",
      },
      {
        Id: 2,
        thokNaath: "jiath",
        english: "tree",
      },
      {
        Id: 3,
        thokNaath: "kaar",
        english: "branch",
      },
      {
        Id: 4,
        thokNaath: "kuɛ̈ɛ̈",
        english: "seed",
      },
      {
        Id: 5,
        thokNaath: "juac",
        english: "grass ",
      },
      {
        Id: 6,
        thokNaath: "lɔu",
        english: "bamboo",
      },
      {
        Id: 7,
        thokNaath: "bua̱w",
        english: "fruit tree",
      },
      {
        Id: 8,
        thokNaath: "kɔat",
        english: "tamarind",
      },
      {
        Id: 9,
        thokNaath: "no̱r",
        english: "palm tree",
      },
      {
        Id: 10,
        thokNaath: "ŋuer",
        english: "paperbark thorn",
      },
      {
        Id: 11,
        thokNaath: "rɔ̱k",
        english: "sycamore fig",
      },
      {
        Id: 12,
        thokNaath: "ŋɔ̱p",
        english: "mulberry",
      },
      {
        Id: 13,
        thokNaath: "thɔ̱w",
        english: "balsam",
      },
      {
        Id: 14,
        thokNaath: "rɔany",
        english: "stalk",
      },
      {
        Id: 15,
        thokNaath: "",
        english: "",
      },
      {
        Id: 16,
        thokNaath: "",
        english: "",
      },
      {
        Id: 17,
        thokNaath: "",
        english: "",
      },
      {
        Id: 18,
        thokNaath: "",
        English: "",
      },
      {
        Id: 19,
        thokNaath: "",
        English: "",
      },
      {
        Id: 20,
        thokNaath: "",
        English: "",
      },
    ],
  ]);
};
