const express = require('express'); 

const router = express.Router(); 

  

const points_controller= require('../controllers/pointsController'); 

  

router.post('/point', points_controller.points_create); 

router.get('/point', points_controller.points_getbyidassignement); 

router.put('/point/:id', points_controller.points_update); 

router.delete('/point/:id', points_controller.points_delete); 

  

module.exports= router; 