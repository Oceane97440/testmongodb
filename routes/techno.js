var router = require('express').Router();
var technoController = require('../controllers/technoController')

router.get('/', technoController.index);

module.exports = router;