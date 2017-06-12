var Space = require('../models/space');

exports.space_create_get = function (req, res, next) {
  res.render('/spaces/new', {title: 'List a space', message: 'list your space!'})
};

exports.space_display_get = function (req, res, next) {
  res.render('/spaces', {title: 'All available spaces', message: 'select your space!'})
};

// app.get('/spaces', function (req, res) {
//   res.render('spaces', {title: 'All available spaces', message: 'select your space!'})
// })

exports.space_create_post = function (req, res, next) {

  var space = new Space({ name: req.body.name});

  space.save(function () {
    res.redirect('/spaces');
  });
};
