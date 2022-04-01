const ExcelJS = require('exceljs');

const excelify = async (rows) => {
  const workbook = new ExcelJS.stream.xlsx.WorkbookWriter();
  workbook.creator = 'Spreadsheeter';
  const sheet = workbook.addWorksheet('Sheet1');
  rows.forEach((row) => {
    sheet.addRow(row).commit();
  });
  sheet.commit();
  await workbook.commit();
  return workbook.stream.read();
};

module.exports = { excelify };
