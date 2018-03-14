
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, user_id: '1', season_id: 1, game_id: 2, pname: 'Bobby Sue'},
        {id: 2, user_id: '2', season_id: 1, game_id: 1, pname: 'Sue Ellen'},
        {id: 3, user_id: '1', season_id: 1, game_id: 2, pname: 'John Boy'}
      ]);
    });
};
