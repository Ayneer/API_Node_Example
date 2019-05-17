const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    nombre: String,
    numero: Number,
    email: String,
    edad: Number
});

module.exports = mongoose.model('documentos', documentSchema);