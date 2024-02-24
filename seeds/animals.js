/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("plants").insert([
    [
      {
        Id: 0,
        thokNaath: "kuɔ̱ɔ̱t",
        english: "cat",
      },
      {
        Id: 1,
        thokNaath: "rɔw",
        english: "hippoptamus",
      },
      {
        Id: 2,
        thokNaath: "lony",
        english: "lion",
      },
      {
        Id: 3,
        thokNaath: "nyaŋ",
        english: "crocodile",
      },
      {
        Id: 4,
        thokNaath: "tuaar",
        english: "bee",
      },
      {
        Id: 5,
        thokNaath: "jio̱k",
        english: "dog",
      },
      {
        Id: 6,
        thokNaath: "kacik",
        english: "donkey",
      },
      {
        Id: 7,
        thokNaath: "guɔ̱r",
        english: "elephant",
      },
      {
        Id: 8,
        thokNaath: "diɛɛr",
        english: "cricket",
      },
      {
        Id: 9,
        thokNaath: "yew",
        english: "catfish",
      },
      {
        Id: 10,
        thokNaath: "luth",
        english: "mudfish",
      },
      {
        Id: 11,
        thokNaath: "riel",
        english: "eel",
      },
      {
        Id: 12,
        thokNaath: "ti̱el",
        english: "fish",
      },
      {
        Id: 13,
        thokNaath: "wuut",
        english: "ostrich",
      },
      {
        Id: 14,
        thokNaath: "tuɔ̱t",
        english: "goose",
      },
      {
        Id: 15,
        thokNaath: "miit",
        english: "firefly",
      },
      {
        Id: 16,
        thokNaath: "manpalɛ̈k",
        english: "hen",
      },
      {
        Id: 17,
        thokNaath: "käät",
        english: "hawk",
      },
      {
        Id: 18,
        thokNaath: "guɛk",
        english: "frog",
      },
      {
        Id: 19,
        thokNaath: "kerker",
        english: "lizard",
      },
      {
        Id: 20,
        thokNaath: "",
        english: "",
      },
    ],
  ]);
};
