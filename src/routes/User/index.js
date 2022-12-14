const router = require('express').Router();

const userController = require('./controller');

router.get('/', userController.list);
router.post('/add', userController.save);
router.get('/update/:id', userController.edit);
router.post('/update/:id', userController.update);
router.get('/delete/:id', userController.delete);

module.exports = router;
