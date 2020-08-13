const Knex = require("knex");

module.exports.up = async function up(knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("project_id");
    table.string("task");
  });
};

module.exports.down = async function down(knex) {
  return knex.schema.dropTable("tasks");
};
