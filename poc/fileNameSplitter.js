const fs = require('fs');
const csvtojsonV2 = require("csvtojson/v2");

function fileNameSplitter(path, options) {

    var files = fs.readdirSync(path);;
    var res = splitFiles(files, options);

    return res;
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

