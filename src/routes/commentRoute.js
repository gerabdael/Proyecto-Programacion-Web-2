const express = require('express');
const router = express.Router();

const comment_controller= require('../controllers/commentController');

router.post('/comment', comment_controller.comment_create);
router.get('/comment', comment_controller.comment_get);
module.exports= router;