const express = require('express');
const bodyparser = require('body-parser');
require("./src/models/connection");

const user_router = require('./src/routes/userRoute');
const app = express();
const port= 3000;
app.use(bodyparser.json());
//rutas
app.use('/api',user_router);

app.listen(port,()=>{
    console.log('hi'+ port);
}); 