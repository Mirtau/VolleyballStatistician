
exports.up = function(knex, Promise) {
  return knex.schema.createTable('seasons', table => {
  table.increments('id')
  table.integer('user_id').notNullable()
  table.date('date').notNullable()
  table.string('team')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seasons')

};
