
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, opponent: 'Death Spikers', date: '12/14/08', season_id: 1},
        {id: 2, opponent: 'Crazy Diggers', date: '12/25/08', season_id: 1},
        {id: 3, opponent: 'Lazy Cats', date: '12/31/08', season_id: 1}
      ]);
    });
};
