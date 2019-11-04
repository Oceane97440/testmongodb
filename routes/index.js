var router = require('express').Router();

var calcController = require('../controllers/calcController')

router.get('/', calcController.list);
router.post('/add', calcController.save);
router.get('/calcul/:id', calcController.calcul);


module.exports = router;