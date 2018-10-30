const fileNameSplitter = require('./fileNameSplitter')
const fs = require('fs');
const path = './files'
const csvtojsonV2 = require("csvtojson/v2");
var res22 = new Array()
var ress22 = []


//const fileContentParser = require('./fileContenParser')

const Parse = require('./fileContenParser')


var optionsEndecaFileNameSplit = {
    parts: [
        { start: "0", end: "3", into: "Endeca_bussines" },
        { start: "3", end: "6", into: "Enedeca_env" },
        { start: "6", end: "17", into: "Endeca_date" },
        { start: "18", end: "", into: "Enedeca_server" }
    ]
};

var optionsEndecaFileContentParser = {
    format: {
        type: "CSV",
        hasHeader: false,
        useHederForVars: false,
        layout: [
            { column: "1", into: "Servicio"},
            { column: "2", into: "Puerto"},
            { column: "3", into: "Estado puerto"},
            { column: "4", into: "Estado log"}
        ]
    }
};

var resultEndecaFileNameSplit = [];
var resultEndecaFileContentParser = []

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const start = async (fls, pth) => {
    var res = [];
    await asyncForEach(fls, async (file)=> {
        
        await csvtojsonV2()
            .fromFile(pth + "/" + file)
            .then((jsonObj) => {
                res = JSON.stringify(jsonObj)
                //ress22[file] = new Object()
                //res22.push(res)
                //res22[file] = new Object(jsonObj);
                //res22[new Object(file)] = new Object(jsonObj)
                //console.log(jsonObj);
                //console.log(res2);
                //return res2

            }, this)   
        //ress22.push(file)
        ress22[file] = res
        res = []

    },this)


}

resultEndecaFileNameSplit = fileNameSplitter('./files', optionsEndecaFileNameSplit);
console.log("Final result", resultEndecaFileNameSplit)

var files = fs.readdirSync(path);

start(files, './files').then(() => {
    console.log(ress22)
    console.log(JSON.stringify(ress22, undefined, 2))

})