const express = require('express'); 

const router = express.Router(); 

  

const response_controller= require('../controllers/responseController'); 

  

router.post('/response', response_controller.response_create); 

router.get('/response/:id', response_controller.points_getbyidcomment); 

  

module.exports= router; 