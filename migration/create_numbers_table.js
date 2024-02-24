/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("facts", (table) => {
    table.increments("id").primary();
    table.string("numerical").notNullable();
    table.string("thokNaath").notNullable();
    table.string("english").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("facts");
};
