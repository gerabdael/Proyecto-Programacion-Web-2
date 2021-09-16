const express = require('express'); 

const router = express.Router(); 

  

const level_controller= require('../controllers/levelsControler'); 

  

router.post('/level', level_controller.level_create); 

router.get('/level:id', level_controller.level_getbyidassignement); 

  

module.exports= router; 