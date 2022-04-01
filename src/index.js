const http = require('http');
const express = require('express');
const { router } = require('./router');

const app = express();
app.use(router);

const server = http.createServer(app);
server.listen(8080, () => {
  console.log('listening');
});

module.exports = { app };
