const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerDoc')();
const { excelify } = require('./excel');

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, false, {}));
router.get('/', (req, res) => {
  res.redirect('/api-docs');
});

router.post('/sheetify', express.json(), async (req, res) => {
  const input = req.body;
  const output = await excelify(input);
  // Sets content-disposition: attachment; filename="stuff.xlsx"
  // Sets content-type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  res.attachment('stuff.xlsx');
  res.send(output);
});

module.exports = { router };
