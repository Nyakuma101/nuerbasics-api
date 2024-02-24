/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("plants").insert([
    [
      {
        Id: 0,
        thokNaath: "wum",
        english: "nose",
      },
      {
        Id: 1,
        thokNaath: "wi̱c",
        english: "head",
      },
      {
        Id: 2,
        thokNaath: "waŋ",
        english: "eye",
      },
      {
        Id: 3,
        thokNaath: "ti̱k",
        english: "chin",
      },
      {
        Id: 4,
        thokNaath: "thok",
        english: "mouth",
      },
      {
        Id: 5,
        thokNaath: "nhiam",
        english: "face",
      },
      {
        Id: 6,
        thokNaath: "mi̱em",
        english: "hair",
      },
      {
        Id: 7,
        thokNaath: "puɔ̱ny",
        english: "body",
      },
      {
        Id: 8,
        thokNaath: "ji̱th",
        english: "ear",
      },
      {
        Id: 9,
        thokNaath: "cio̱o̱k",
        english: "leg, foot",
      },
      {
        Id: 10,
        thokNaath: "muɔ̱l",
        english: "knee",
      },
      {
        Id: 11,
        thokNaath: "tet",
        english: "hand",
      },
      {
        Id: 12,
        thokNaath: "yɛ̈t",
        english: "finger",
      },
      {
        Id: 13,
        thokNaath: "ci̱el",
        english: "elbow",
      },
      {
        Id: 14,
        thokNaath: "rɔ̱th",
        english: "armpit",
      },
      {
        Id: 15,
        thokNaath: "jic",
        english: "stomach",
      },
      {
        Id: 16,
        thokNaath: "nhiam",
        english: "face",
      },
      {
        Id: 17,
        thokNaath: "wi̱c",
        english: "head",
      },
      {
        Id: 18,
        thokNaath: "ŋith",
        english: "brain",
      },
      {
        Id: 19,
        thokNaath: "lɔc",
        english: "heart",
      },
      {
        Id: 20,
        thokNaath: "",
        english: "",
      },
    ],
  ]);
};
