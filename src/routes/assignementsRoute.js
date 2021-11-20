const express = require('express');
const router = express.Router();

const assignement_controller= require('../controllers/assigmenetController');
const checkJwt=  require('../middleware/checkJwt');

router.post('/assignement', assignement_controller.assignement_create);
router.get('/assignement', checkJwt,assignement_controller.assigment_get);
router.delete('/assignement/:id', assignement_controller.assigment_delete);

module.exports= router;