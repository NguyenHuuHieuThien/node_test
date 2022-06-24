var express = require('express');
var app = express();
var router = express.Router();
const newController = require('../app/controllers/newController');

router.get('/:slug', newController.show);
router.get('/', newController.news);

module.exports = router;
