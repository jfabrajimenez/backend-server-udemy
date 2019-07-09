// Requires
var express = require('express');


// Inicializar variables
var app = express();
var mongoose = require('mongoose');


//Conexión a la BBDD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});


//Rutas
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Exress server escuchando en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});