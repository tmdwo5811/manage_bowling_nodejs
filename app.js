const express = require('express');
const app = express();
const http = require("http");

require("./route")(app);

const server = http.createServer(app);
const PORT = 3333;

server.listen(PORT, () => {
    console.info(`API-SERVER Listening on Port ${PORT}`);
})