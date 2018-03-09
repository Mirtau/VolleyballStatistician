
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', table => {
  table.increments('id')
  table.integer('user_id').notNullable()
  table.integer('season_id').notNullable()
  table.integer('game_id').notNullable()
  table.string('name').notNullable()
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')

};
