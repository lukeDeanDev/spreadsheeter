const http = require('http');
const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerDoc')();

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/api-docs');
});
router.get('/hello', (req, res) => {
  res.send('Hello');
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, false, {}));

const app = express();
app.use(router);
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = http.createServer(app);
server.listen(8080, () => {
  console.log('listening');
});

module.exports = { app };
