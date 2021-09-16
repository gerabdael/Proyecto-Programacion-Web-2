const express = require('express');
const router = express.Router();

const user_controller= require('../controllers/userController');

router.post('/user', user_controller.user_create);
router.get('/user/:id', user_controller.user_getbyid);
router.delete('/user/:id', user_controller.user_delete);
module.exports= router;