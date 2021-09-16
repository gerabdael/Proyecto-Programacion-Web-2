const express = require('express'); 

const router = express.Router(); 

  

const message_controller= require('../controllers/messageController'); 

  

router.post('/message', message_controller.message_create); 

router.get('/message:id', message_controller.message_getbyiduser); 

router.get('/message:id', message_controller.message_getbysubject); 

  

module.exports= router; 