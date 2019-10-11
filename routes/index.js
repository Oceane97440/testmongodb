var router = require('express').Router();

var calcController = require('../controllers/calcController')

router.get('/', calcController.list);
router.post('/add', calcController.save);

module.exports = router;