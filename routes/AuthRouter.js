const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const validaHeader = require('../middlewares/validaHeader')
router.post('/registrar', AuthController.registrar);
router.post('/login', AuthController.login);
router.post('/delete/:id', AuthController.delete);
router.put('/update/:id', AuthController.update);
router.get('/contato', validaHeader, AuthController.contato)

module.exports = router;