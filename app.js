const express = require('express');
const app = express();
const http = require("http");
const mongoose = require('mongoose');

const mongodb = mongoose.connection;
mongodb.on('error', console.error);
mongodb.once('open', () => {
    console.log('Connected to mongd server');
});


const mongoUrl = 'mongodb+srv://user:1234@bowlingcluster.1ojif.gcp.mongodb.net/bowling_prj?retryWrites=true&w=majority';
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(mongoUrl, mongoOptions);

require("./route")(app);

const server = http.createServer(app);
const PORT = 3333;

server.listen(PORT, () => {
    console.info(`API-SERVER Listening on Port ${PORT}`);
})