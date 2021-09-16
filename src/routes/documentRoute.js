const express = require('express');
const router = express.Router();

const document_controller= require('../controllers/documentController');

router.post('/document', document_controller.document_create);
router.get('/document/:id', document_controller.document_getbyid);

module.exports= router;