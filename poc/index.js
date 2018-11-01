const axios = require("axios")

const fileNameSplitter = require('./fileNameSplitter')
const fileContentParser = require('./fileContenParser')
const asyncForEach = require("./asyncForEach")

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
var resultEndecaFileContent = [];
var colname = ""



fileNameSplitter.fileNameSplitter('./files', optionsEndecaFileNameSplit).then((result) =>{
    
    resultEndecaFileNameSplit = result
    
    fileContentParser('./files').then((result) => {
    
        {// arma el nombre de  de la colección
        asyncForEach(resultEndecaFileNameSplit, (item) => {
            colname = item.parts[0].partName.substring(0, item.parts[0].partName.indexOf("_"))
            for (var i = 0; i < item.parts.length; i++ )
            {
                if (item.parts[i].partName.substring(item.parts[i].partName.indexOf("_") + 1) == "bussines")
                {
                    colname = colname + item.parts[i].partValue + "mon"
                }
                if (item.parts[i].partName.substring(item.parts[i].partName.indexOf("_") + 1) == "env") {
                    colname = colname + item.parts[i].partValue
                }
            }
            colname = colname.toLowerCase();
            console.log(colname)
        })}
        
        {// get dr la collecion

            asyncForEach(resultEndecaFileNameSplit, (item) => {

                axios.get('http://localhost:9001/' + colname)
                .then(function (response) {
                    this.loading = false;
                    this.rootmondrp = response.data;
                }.bind(this))
                .catch(e => {
                    this.loading = false;
                })       
            })
            
        }// ------------------
    
       


          
        
    })

    console.log("file name split result", result)
    resultEndecaFileNameSplit.forEach((item, i) => {
        var j = ++i
        console.log(j + ") Para " + item.fileName + " el contenido es: " + JSON.stringify(item.parts, undefined, 2) + "\n")
    })
    console.log(resultEndecaFileNameSplit)
    
    console.log("file content result", JSON.stringify(result, undefined, 2))
    resultEndecaFileContent.forEach((item, i) => {
        var j = ++i
        console.log(j + ") Para " + item.fileName + " el contenido es: " + JSON.stringify(item.fileContent, undefined, 2) + "\n")
    })
    console.log(resultEndecaFileContent)

})
