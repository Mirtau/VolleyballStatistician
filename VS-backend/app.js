'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = express.Router()
const routes = require('./routes')
const knex = require('knex')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || '3001'

app.use('/', routes)

// app.use(function(req, res, next) {
//   var err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}
//
//   // render the error page
//   res.status(err.status || 500).send({err})
//   // res.render('error');
// })
// app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//
//   res.sendStatus(406);
// })

// app.use((_req, res) => {
//   res.sendStatus(404);
// })

app.listen(port, ()=> {
  console.log(`you are listening on ${port}`)
})
module.exports = app
