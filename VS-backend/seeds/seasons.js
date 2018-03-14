
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('seasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('seasons').insert([
        {id: 1, user_id: 2, date: '12/03/2018', team: 'apple blossoms'},
        {id: 2, user_id: 1, date: '12/03/2018', team: 'tulip steams'},
        {id: 3, user_id: 3, date: '12/03/2018', team: 'Snake Charmers'}
      ]);
    });
};
