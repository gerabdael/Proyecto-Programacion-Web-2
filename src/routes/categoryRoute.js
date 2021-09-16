const express = require('express');
const router = express.Router();

const category_controller= require('../controllers/categoryController');

router.post('/category', category_controller.category_create);
router.get('/category/:id', category_controller.category_getbyid);
router.put('/category/:id', category_controller.category_update);
module.exports= router;