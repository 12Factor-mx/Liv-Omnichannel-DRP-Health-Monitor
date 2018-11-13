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
            { column: "3", into: "Componente_Port"},
            { column: "4", into: "Componenete_Log"}
        ]
    }
};

var resultEndecaFileNameSplit = [];
var resultEndecaFileContent = [];
var collectionName
var serverName = ""
var collectionNameList = []
var Servicio = ""
var Componente = ""
var Porcentaje = ""


fileNameSplitter.fileNameSplitter('./files', optionsEndecaFileNameSplit).then((result) =>{
    
    resultEndecaFileNameSplit = result
    
    fileContentParser('./files').then((result) => {
    
        resultEndecaFileContent = result

        {// arma el nombre de  de la colección

        var file = 0
        asyncForEach(resultEndecaFileNameSplit, (item) => {

            collectionName = item.parts[0].partName.substring(0, item.parts[0].partName.indexOf("_"))
            for (var i = 0; i < item.parts.length; i++ )
            {
                if (item.parts[i].partName.substring(item.parts[i].partName.indexOf("_") + 1) == "bussines")
                {
                    if (item.parts[i].partValue == 'LIV'){
                        collectionName = collectionName + 'l' + "mon"    
                    }else{
                        collectionName = collectionName + item.parts[i].partValue + "mon"
                    }
                }
                if (item.parts[i].partName.substring(item.parts[i].partName.indexOf("_") + 1) == "env") {
                    collectionName = collectionName + item.parts[i].partValue
                } 
                if(item.parts[i].partName.substring(item.parts[i].partName.indexOf("_") + 1) == "server") {
                    serverName = item.parts[i].partValue
                }
            }

            collectionName = collectionName.toLowerCase();
            console.log(collectionName)

            console.log(resultEndecaFileContent[file])
            var linesPerFile = resultEndecaFileContent.length


     
            for (var line = 0; line < linesPerFile ; line++)  
            {
                        
                var record = resultEndecaFileContent[file].fileContent[line]    
                

                for (var property in record) {

                    if (record.hasOwnProperty(property)) {

                        var prop = property.substring(0, property.indexOf("_") <= 0 ? property.length : property.indexOf("_"))
                   
                        switch (prop) {
                            case "Servicio":
                                Servicio = record[property]
                                break;
                            case "Componente":
                                Componente = property.split("_")[1]
                                Porcentaje = record[property]     
                                
                                var uri = 'http://localhost:9001/' +
                                    collectionName + "/" +
                                    serverName + "/" +
                                    Servicio + "/" +
                                    Componente

                                console.log(uri + " " + Porcentaje)

                                axios.post(uri, { "porcentaje": Porcentaje })
                                    .then(function (response) {
                                        console.log(response)
                                        
                                    }.bind(this))
                                    .catch(e => {
                                        console.log(e)
                                        
                                    })
                                break;
                            default:
                            {
                                ;
                            }
                                
                        }
                    }
                }
                
/*                 var uri = 'http://localhost:9001/' + 
                                                    collectionName + "/" + 
                                                    serverName     + "/" + 
                                                    Servicio       + "/" + 
                                                    Componente
                
                axios.post(uri, {"porcentaje":Porcentaje})
                    .then(function (response) {
                        console.log(response)
                        file++
                    }.bind(this))
                    .catch(e => {
                        console.log(e)
                        file++
                })    
 */            }
            file++
        })}
 
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
