
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resultNames', table => {
  table.increments('id')
  table.string('resultName').notNullable()
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resultNames')
};
