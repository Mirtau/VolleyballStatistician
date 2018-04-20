const express = require('express')
const router = express.Router()
const knex = require('../knex')

router.get('/players', function(req, res, next) {
  return  knex('players')
  .join('users', 'users.id', '=', 'players.user_id')
  .select('players.pname', 'users.name')
  .then(data => {
    res.status(200).send({data})
  })
  .catch(err => {next(err)})
})
router.get('/stats', function(req, res, next) {
  knex('stats')
  .join('statNames', 'statNames.id', '=', 'stats.statName_id')
  .join('players', 'players.id', '=', 'stats.player_id')
  .join('games', 'games.id', '=', 'stats.game_id')
  .join('resultNames', 'resultNames.id', '=', 'stats.resultName_id')
  .join('seasons', 'seasons.id', '=', 'stats.season_id')
  .select('statNames.statName', 'resultNames.resultName', 'players.pname', 'games.opponent', 'seasons.team')
  .then(data => {
    console.log(data);
    res.status(200).send({data})
  })
  .catch(err => {next(err)})
})
router.get('/users', function(req, res, next) {
  knex('users')
  .then(data => {

    res.status(200).send({data})
  })
  .catch(err => {next(err)})
})
router.post('/users', function(req, res, next) {
  knex('users')
  .insert(req.body)
  .returning('id')
  .then(data=> {
res.status(200).send({data})
})
  .catch(err => {next(err)})
  })

router.post('/players', function(req, res, next) {
  knex('players')
  .insert(req.body)
  .then(data => {
    res.status(200).send({data})
  })

  .catch(err => {next(err)})
})
module.exports = router
