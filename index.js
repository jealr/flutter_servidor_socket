
const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node server  [ https://www.npmjs.com/package/socket.io ]
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


//path publico 
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );

//
// Servidor escuchando socket en el puerto 3000
//
server.listen( process.env.PORT, ( err ) => {

    if( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});