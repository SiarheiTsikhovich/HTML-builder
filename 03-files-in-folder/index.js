const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
if (err) throw err;
files.forEach(file => {
  file.isFile();
  if (file.isFile()){
    const nameFile = file.name.split('.')[0];
    const extensionFile = path.extname(file.name).substring(1);

    fs.stat(path.join(__dirname, `/secret-folder/${file.name}`), (err, stats) => {
      if (err) throw err;
      console.log(`${nameFile} - ${extensionFile} - ${(stats.size / 1024).toFixed(3)}kb`);
    });
  };
});
});

