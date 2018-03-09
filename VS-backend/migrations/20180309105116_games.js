
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
  table.increments('id')
  table.string('opponent').notNullable()
  table.date('date').notNullable()
  table.integer('season_id').notNullable()
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')

};
