// server.js
const express = require('express');
require('dotenv').config();
const businessLogic = require('./index');

const app = express();
app.use(express.json());


app.post('/postales/api/v1/create/postal', (req, res) => {
    const newItem = req.body.name;  //{name:nombreindice} 
    const response = businessLogic.createFichaPostal(newItem); 
    res.json(response);
 });

 
app.get('/', (req, res) => {
    console.log("diony");
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

function startServer(PORT = process.env.PORT) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = {
    startServer
};
