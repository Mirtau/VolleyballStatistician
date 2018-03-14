
exports.seed = function(knex, Promise) {

      // Inserts seed entries
      return knex('resultNames').insert([
        {id: 1, resultName: 'ace'},
        {id: 2, resultName: 'kill'},
        {id: 3, resultName: 'execellent'},
        {id: 4, resultName: 'in play'},
        {id: 5, resultName: 'fault'},
        {id: 6, resultName: 'standard'},
        {id: 7, resultName: 'execellent'},
        {id: 8, resultName: 'block'},
        {id: 9, resultName: 'dig'},
        {id: 10, resultName: 'touch'}
      ])

    .then(function() {
  return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
  })
}
