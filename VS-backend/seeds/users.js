
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Daddy WarBucks', email: 'Daddy@WarBucks.com', password: 'nobodyknows'},
        {id: 2, name: 'Red Forman', email: 'Red@that70s.com', password: 'password'},
        {id: 3, name: 'Mike Brady', email: 'Mike@architects.com', password: 'dogsname?'}
      ])
    })
    .then(function() {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id)FROM users))"
      )
    }
    )
}
