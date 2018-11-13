const fs = require('fs');
const csvtojsonV2 = require("csvtojson/v2");
const asyncForEach = require("./asyncForEach")

var responseFileContent = []

function parse(path)
{
   var files = fs.readdirSync(path);
 
   return parseCSV(files, path).then(() =>
   {
       return responseFileContent
   });

}

const parseCSV = async (files, path) =>
{
    await asyncForEach(files, async (fileName,index,array) => 
    {
        await csvtojsonV2()
            .fromFile(path + "/" + fileName)
            .then((fileContentAsJson) => {
                var newJsonObject = new Object();
                newJsonObject.fileName = fileName;
                newJsonObject.fileContent = fileContentAsJson
                responseFileContent.push(newJsonObject)
            })
    })
}

module.exports = parse