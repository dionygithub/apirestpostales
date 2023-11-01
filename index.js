const axios = require('axios');
const https = require('https');
require('dotenv').config();
const server = require('./server');


module.exports.createFichaPostal = async function(name) { 
    console.log(name);
}


server.startServer(process.env.PORT);