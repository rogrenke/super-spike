
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://localhost/meanDB'
// mongoose.connect(mongoDB);
// var db = mongoose.connection;
const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/spaces/new', function(req, res) {
  res.render('spaces', {title: 'List a space', message: 'list your space!'})
})

app.post('/spaces', function(req, res) {
  console.log(req.body)
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
