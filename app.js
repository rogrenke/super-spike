const express = require('express')
const app = express()
app.set('view engine', 'pug')
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/meanDB'
mongoose.connect(mongoDB);
var db = mongoose.connection;
var space = require('./routes/space');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/spaces', space);

// app.get('/spaces', function (req, res) {
//   res.render('spaces', {title: 'All available spaces', message: 'select your space!'})
// })

// app.get('/spaces/new', function (req, res) {
//   res.render('spaces', {title: 'List a space', message: 'list your space!'})
// })



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
