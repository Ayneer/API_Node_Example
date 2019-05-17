const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pruebaDB',{useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error to conections: '));
db.once('open', ()=>{
    console.log('Succesfull conection');
})

module.exports = mongoose;