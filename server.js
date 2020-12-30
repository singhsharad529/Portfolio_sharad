//Install express server
const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Portfolio'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);