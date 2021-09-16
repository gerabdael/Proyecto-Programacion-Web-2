const express = require('express');
const router = express.Router();

const certificate_controller= require('../controllers/certificateController');

router.post('/certificate', certificate_controller.certificate_create);

module.exports= router;