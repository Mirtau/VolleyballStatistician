
exports.up = function(knex, Promise) {
  return knex.schema.createTable('statNames', table => {
  table.increments('id')
  table.string('statName').notNullable()

})

}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statNames')

}
