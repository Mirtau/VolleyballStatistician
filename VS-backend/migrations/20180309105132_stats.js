
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', table => {
  table.increments('id')
  table.integer('player_id').notNullable()
  table.integer('season_id').notNullable()
  table.integer('game_id').notNullable()
  table.integer('statName_id').notNullable()
  table.string('resultName_id').notNullable()
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats')

};
