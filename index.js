const express = require('express');
const bodyparser = require('body-parser');
require("./src/models/connection");

const assignement_router = require('./src/routes/assignementsRoute');
const category_router = require('./src/routes/categoryRoute');
const certificate_router = require('./src/routes/certificateRoute');
const comment_router = require('./src/routes/commentRoute');
const document_router = require('./src/routes/documentRoute');
const history_router = require('./src/routes/historyRoute');
const level_router = require('./src/routes/levelRoute');
const message_router = require('./src/routes/messageRoute');
const points_router = require('./src/routes/pointsRoute');
const response_router = require('./src/routes/responseRoute');
const user_router = require('./src/routes/userRoute');
const app = express();
const port= 3000;
app.use(bodyparser.json());

//rutas
app.use('/api',assignement_router);
app.use('/api',category_router);
app.use('/api',certificate_router);
app.use('/api',comment_router);
app.use('/api',document_router);
app.use('/api',history_router);
app.use('/api',level_router);
app.use('/api',message_router);
app.use('/api',points_router);
app.use('/api',response_router);
app.use('/api',user_router);

app.listen(port,()=>{
    console.log('hi'+ port);
}); 