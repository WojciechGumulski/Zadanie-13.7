var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data) {
  var fileContent = data;
  fs.writeFile('nowytekst.txt', fileContent, function(err) {
    if (err) throw err;
    console.log("Plik zapisano!");
  }); 
});