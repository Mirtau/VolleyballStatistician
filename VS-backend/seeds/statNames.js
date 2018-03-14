
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('statNames').insert([
        {id: 1, statName: 'Attack'},
        {id: 2, statName: 'Dig'},
        {id: 3, statName: 'Serve'},
        {id: 4, statName: 'Receive'},
        {id: 5, statName: 'Block'},
        {id: 6, statName: 'Set'}
      ])
    .then(function() {
  return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
  })
}
