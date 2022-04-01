const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerDoc')();

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, false, {}));
router.get('/', (req, res) => {
  res.redirect('/api-docs');
});

router.get('/hello', (req, res) => {
  res.send('Hello');
});

router.post('/echo', (req, res) => {
  const payload = req.body;
  res.send(payload);
});

module.exports = { router };
