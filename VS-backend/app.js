var express = require('express')
var app = express()
var port = process.env.PORT || '3001'

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})




app.listen(port, ()=> {
  console.log(`you are listening on ${port}`)
})
module.exports = app
