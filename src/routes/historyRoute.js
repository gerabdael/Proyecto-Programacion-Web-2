const express = require('express'); 

const router = express.Router(); 

  

const history_controller= require('../controllers/historyController'); 

  

router.post('/history', history_controller.history_create); 

router.get('/history/:id', history_controller.history_getbyiduser); 

  

module.exports= router; 