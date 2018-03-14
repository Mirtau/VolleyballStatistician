
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('stats').insert([
        {id: 1, player_id: 2, season_id: 1, game_id: 3, statName_id: 5, resultName_id: 4},
        {id: 2, player_id: 1, season_id: 2, game_id: 1, statName_id: 2, resultName_id: 3},
        {id: 3,  player_id: 3, season_id: 3, game_id: 2, statName_id: 6, resultName_id: 1}
      ]);
    });
};
