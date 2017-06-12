
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/meanDB'
mongoose.connect(mongoDB);
var db = mongoose.connection;
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var Space = require('./models/space');

app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/spaces', function (req, res) {
  res.send('Hello World!')
  Space.find({}, function(err, spaces) {
    console.log(spaces[1].name);
  });
});

app.get('/spaces/new', function(req, res) {
  res.render('spaces', {title: 'List a space', message: 'list your space!'})
})

app.post('/spaces', function(req, res) {
  var space = new Space({ name: req.body.name});
  space.save(function() {
    res.redirect('/spaces');
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
