const express = require('express');
const router = express.Router();

const assignement_controller= require('../controllers/assigmenetController');

router.post('/assignement', assignement_controller.assignement_create);
router.get('/assignement', assignement_controller.assigment_get);
router.delete('/assignement/:id', assignement_controller.assigment_delete);

module.exports= router;