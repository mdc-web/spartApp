const router = require('express').Router();
const exoController = require('../controllers/exo.controller');

router.get('/', exoController.readExo);
router.post('/', exoController.createExo);
router.put('/:id', exoController.updateExo);
router.delete('/:id', exoController.deleteExo);

module.exports = router;