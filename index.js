const fs = require('fs');
const pdfreader = require('pdfreader');

function somethingWentWrong(err) {
  console.log('Something went wrong', err);
}
function endOfPdf() {
  console.log('End of file -- SUCCESS');
  console.log(pdfText);
}

function parsePdf(pdfText) {
  const itens = pdfText.split(
    '_________________________________________________________________________________________'
  );
  console.log(itens);
}

let pdfText = '';
new pdfreader.PdfReader().parseFileItems('historicoescolarListar.pdf', function(
  err,
  item
) {
  if (err) somethingWentWrong(err);
  else if (!item) endOfPdf();
  else if (item.text) console.log(item);
  // pdfText += item.text + '\n';
});

// alternative https://www.npmjs.com/package/pdf-parse
