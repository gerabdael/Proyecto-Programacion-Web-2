const express = require('express');
const router = express.Router();

const assignement_controller= require('../controllers/assigmenetController');

router.post('/assignement', assignement_controller.assignement_create);

module.exports= router;