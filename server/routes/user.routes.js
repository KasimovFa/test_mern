const Router = require('express');
const userController = require('../controllers/UserController');
const router = new Router();

router.get('', userController.getUser);
router.post('', userController.createUser);
router.post('/edit', userController.editUser);
router.get('/sort', userController.sort);
router.get('/search', userController.search);

module.exports = router;