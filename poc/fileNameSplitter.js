
const asyncForEach = require("./asyncForEach")
const fs = require('fs');

var responseFileNameSplited = []


function fileNameSplitter(path, options) {
    
    var files = fs.readdirSync(path);

    return splitFiles(files, options).then(()=>
    {
        return responseFileNameSplited
    });

}

async function slplitFileName(file, options){
    var partsArray = [];
    
    return asyncForEach(options.parts, async (part) => {
        if (part.end == "") {
            splitedString = file.substring(part.start);
        } else {
            splitedString = file.substring(part.start, part.end);
        }

        var partObject = new Object()
        partObject.partName = part.into
        partObject.partValue = splitedString
        partsArray.push(partObject)

        return partsArray

    })

}

const splitFiles = async (files, options) => {

    var partsArray = [];
    var objectFiles = new Object()
    objectFiles.files = new Array()

    await asyncForEach(files, async (file) => 
    {
        await asyncForEach(options.parts, async (part) => 
        {
            if (part.end == "") {
                splitedString = file.substring(part.start);
            } else {
                splitedString = file.substring(part.start, part.end);
            }

            var partObject = new Object()
            partObject.partName = part.into
            partObject.partValue = splitedString
            partsArray.push(partObject)

        })
 
        var partsObject = new Object()
        partsObject.fileName = file;
        partsObject.parts = partsArray;
        responseFileNameSplited.push(partsObject)
        partsArray = []
    })
}

exports.fileNameSplitter = fileNameSplitter
exports.slplitFileName = slplitFileName