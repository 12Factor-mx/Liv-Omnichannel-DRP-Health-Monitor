var fs = require('fs');

function fileNameSplitter(path, options) {

    var files = getFiles(path);
    var res = splitFiles(files, options);

    return res;
}

function getFiles(path) {

    var files = fs.readdirSync(path);

    return files;
}

function splitFiles(files, options) {
    var splitFileResult = []
    var returningArray = [];

    files.forEach(function (file) {

        options.parts.forEach(function (part) {
            if (part.end == "") {
                splitedString = file.substring(part.start);
            } else {
                splitedString = file.substring(part.start, part.end);
            }
            
            splitFileResult[part.into] = splitedString

        }, this);

        returningArray[file] = splitFileResult;
        splitFileResult = []

    }, this);

    return returningArray
}

module.exports = fileNameSplitter

