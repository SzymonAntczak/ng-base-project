const fs = require('fs');
const async = require('async');
const package = require("./package.json");

let getParam = function(name) {
  let result;
  process.argv.forEach(function(val) {
    if (val.includes(name + '=')) {
      result = val.replace(name + '=', '');
      return false;
    }
  });

  return result;
}


tmpParam = getParam('api');
let api = !!tmpParam ? tmpParam : '';

tmpParam = getParam('version');
let version = !!tmpParam ? tmpParam : package.version;

const envTypes = ['', '.prod'];

async.each(envTypes, function (file, callback) {
  environmentFile = `
    export const environment = {
      production: ${file == '.prod'},
      api: '${api}',
      version: '${version}',
      development: ${file != '.prod'}
    };
  `;

  fs.writeFile('./src/environments/environment' + file + '.ts', environmentFile, function (err) {
      err
        ? console.log(err)
        : console.log('environment' + file + '.ts was updated.');

      callback();
  });
}, function (err) {

  if (err) {
      console.log('A file failed to process');
  }
  else {
    console.log('Environment files created!');
    console.log('Build version set: ' + version);
  }
});
