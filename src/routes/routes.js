const express = require('express');
const bodyParse = require('body-parser');
const Document = require('../models/document');

const routes = express.Router();

routes.use(bodyParse.urlencoded({extended:false}));//false is used to only accept key-value pairs.
routes.use(express.json());// this is to parser the data to JSON

routes.get('/documents', (req, res)=>{

    Document.find({},(err, docs)=>{
        if(err){
            res.status(500).send({message:"Error con la colección de la db."});
        }else{
            if(docs.length===0){
                res.status(404).send({message:"Colección vacia."});
            }else{
                res.status(200).send(docs);
            }
        }
    });

});

routes.post('/documents', (req, res)=>{
    let client = req.body;
    let document = new Document();
    document.nombre = client.nombre;
    document.numero = client.numero;
    document.email = client.email;
    document.edad = client.edad;
    
    document.save((err, doc)=>{
        if(err){
            res.status(500).send({message:"Error al intentar salvar el documento."});
        }else{
            res.status(200).send({
                respuesta:"El documento con nombre "+document.nombre+" y id: "+document._id+" fue añadido con exito."
            });
        }
    });
    
});

module.exports = routes;