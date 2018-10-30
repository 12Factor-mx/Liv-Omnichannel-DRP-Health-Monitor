const fs = require('fs');
const csvtojsonV2 = require("csvtojson/v2"); 
const cv = require("csv-to-array")
var res2 = [];

var columns = ["column1", "column2", "column3","column4"];

const asyncForEach = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index, array)
    }
}


exports.parse = async (path, options ) => {
    
    var res3 = [];

    var files = fs.readdirSync(path);

    if (options.format.type == "CSV")
    {

        await asyncForEach(files, async (file) => {
            csvtojsonV2()
                .fromFile(path + "/" + file)
                .then((jsonObj) => {
                    res2[file] = jsonObj
                    console.log(jsonObj);
                   //return res2

                })
        });

        return (res2)
    } 

}

