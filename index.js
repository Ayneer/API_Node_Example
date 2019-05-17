const express = require('express');
const routes = require('./src/routes/routes');
const config = require('./src/config/config');
require('./src/dataBase/database');

const app = express();

//middleware
app.use('/api', routes);

app.listen(config.port, () =>{
    console.log('Servidor on port '+config.port+', http://localhost:',config.port);
});