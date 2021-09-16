const express = require('express');
const router = express.Router();

const category_controller= require('../controllers/categoryController');

router.post('/category', category_controller.category_create);

module.exports= router;