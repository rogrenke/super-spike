var express = require('express')
var router = express.Router();

var space_controller = require('../controllers/spaceController.js')


router.get('/spaces/new', space_controller.space_create_get);

router.get('/spaces', space_controller.space_display_get);

router.post('/spaces', space_controller.space_create_post);

module.exports = router;
