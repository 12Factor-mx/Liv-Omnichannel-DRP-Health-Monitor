var fs = require('fs');
var path = require('path');
var _ = require('lodash');

async function deletePathContent(directory) {
  return new Promise((res, rej) => {

    fs.readdir(directory, (err, files) => {
      if (err) rej(err);

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) rej(err);
        });
      }
      res()
    });
  })
}


//https://stackoverflow.com/questions/39085399/lodash-remove-items-recursively
function deepOmit(obj, keysToOmit) {
  var keysToOmitIndex = _.keyBy(Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit]); // create an index object of the keys that should be omitted

  function omitFromObject(obj) { // the inner function which will be called recursivley
    return _.transform(obj, function (result, value, key) { // transform to a new object
      if (key in keysToOmitIndex) { // if the key is in the index skip it
        return;
      }

      result[key] = _.isObject(value) ? omitFromObject(value) : value; // if the key is an object run it through the inner function - omitFromObject
    })
  }
   return omitFromObject(obj);
}

exports.deletePathContent = deletePathContent
exports.deepOmit = deepOmit