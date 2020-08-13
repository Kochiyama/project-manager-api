const Knex = require("knex");

module.exports.up = async function up(knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("title");
  });
};

module.exports.down = async function down(knex) {
  return knex.schema.dropTable("projects");
};
