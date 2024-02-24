/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("plants").insert([
    {
      Id: 0,
      numerical: 0,
      thokNaath: "baŋ",
      english: "zero",
    },
    {
      Id: 1,
      numerical: 1,
      thokNaath: "kɛl",
      english: "one",
    },
    {
      Id: 2,
      numerical: 2,
      thokNaath: "rɛw",
      english: "two",
    },
    {
      Id: 3,
      numerical: 3,
      thokNaath: "diɔ̱k",
      english: "three",
    },
    {
      Id: 4,
      numerical: 4,
      thokNaath: "ŋuaan",
      english: "four",
    },
    {
      Id: 5,
      numerical: 5,
      thokNaath: "dhiec",
      english: "five",
    },
    {
      Id: 6,
      numerical: 6,
      thokNaath: "bäkɛl",
      english: "six",
    },
    {
      Id: 7,
      numerical: 7,
      thokNaath: "bärɔw",
      english: "seven",
    },
    {
      Id: 8,
      numerical: 8,
      thokNaath: "bädäk",
      english: "eigth",
    },
    {
      Id: 9,
      numerical: 9,
      thokNaath: "bäŋuan",
      english: "nine",
    },
    {
      Id: 10,
      numerical: 10,
      thokNaath: "wäl",
      english: "ten",
    },
    {
      Id: 11,
      numerical: 11,
      thokNaath: "wäl kɛl",
      english: "eleven",
    },
    {
      Id: 12,
      numerical: 12,
      thokNaath: "wäl rɛw",
      english: "twelve",
    },
    {
      Id: 13,
      numerical: 13,
      thokNaath: "wäl diɔ̱k",
      english: "thirteen",
    },
    {
      Id: 14,
      numerical: 14,
      thokNaath: "wäl ŋuaan",
      english: "fourteen",
    },
    {
      Id: 15,
      numerical: 15,
      thokNaath: "wäl dhiec",
      english: "fifteen",
    },
    {
      Id: 16,
      numerical: 16,
      thokNaath: "wäl bäkɛl",
      english: "sixteen",
    },
    {
      Id: 17,
      numerical: 17,
      thokNaath: "wäl bärɔw",
      english: "seventeen",
    },
    {
      Id: 18,
      numerical: 18,
      thokNaath: "wäl bädäk",
      english: "eigthteen",
    },
    {
      Id: 19,
      numerical: 19,
      thokNaath: "wäl bäŋuan",
      english: "nineteen",
    },
    {
      Id: 20,
      numerical: 20,
      thokNaath: "jɛn rɛw",
      english: "twenty",
    },
  ]);
};
