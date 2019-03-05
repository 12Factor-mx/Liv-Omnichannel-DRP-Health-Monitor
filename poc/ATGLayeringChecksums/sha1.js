const fs = require('fs'),
  path = require('path'),
  checksum = require('checksum');


async function readDirRecursive(startDir) {
  const readDirQueue = [],
    fileList = [];

  function readDir(dir) {
    function getItemList(readDir) {
      return new Promise((resolve, reject) => {
        fs.readdir(readDir, (err, itemList) => {
          if (err) {
            return reject(err);
          }

          resolve(itemList.map((item) => path.resolve(readDir, item)));
        });
      });
    }

    function getItemListStat(itemList) {
      function getStat(itemPath) {
        return new Promise((resolve, reject) => {
          fs.stat(itemPath, (err, stat) => {
            if (err) {
              return reject(err);
            }

            resolve({
              itemPath,
              isDirectory: stat.isDirectory()
            });
          });
        });
      }

      return Promise.all(itemList.map(getStat));
    }

    function processItemList(itemList) {
      for (const {
          itemPath,
          isDirectory
        } of itemList) {

        if (isDirectory) {
          readDirQueue.push(itemPath);
          continue;
        }

        checksum.file(itemPath, function (err, sum) {
            fileList.push({
              "pathSVN": itemPath.replace(startDir, '.'),
              "sha1SVN": sum
            });
        })
        
      }

      if (readDirQueue.length > 0) {
        return readDir(readDirQueue.shift());
      }

      return fileList;
    }

    return getItemList(dir)
      .then(getItemListStat)
      .then(processItemList);
  }

   return readDir(startDir);
}


function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, function (err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);

      fs.stat(file, function (err, stat) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          //results.push(file);

          filewalker(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          checksum.file(file, function (err, sum) {
            results.push({
              "pathSVN": file.replace(dir, '.'),
              "sha1SVN": sum
            });
        })
          //results.push(file);

          if (!--pending) done(null, results);
        }
      });
    });
  });
};


exports.create = readDirRecursive;
