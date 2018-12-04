const axios = require("axios")

const fs = require('fs')
const fileNameSplitter = require('./fileNameSplitter')
const fileContentParser = require('./fileContenParser')
const asyncForEach = require("./asyncForEach")


const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

var optionsEndecaFileNameSplit = JSON.parse(fs.readFileSync(process.argv[3], "utf8"));

var resultEndecaFileNameSplit = [];
var resultEndecaFileContent = [];
var collectionName = ""
var serverName = ""
var Servicio = ""
var Componente = ""
var Porcentaje = ""


fileNameSplitter.fileNameSplitter(process.argv[2], optionsEndecaFileNameSplit).then((result) =>{
    
    resultEndecaFileNameSplit = result
    
    fileContentParser(process.argv[2]).then((result) => {
    
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
                        collectionName = collectionName + item.parts[i].partValue.toLowerCase() + "mon"
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

            
            var serverValueList = []; 
            for (var line = 0; line < linesPerFile ; line++)  
            {
                 
                var record = resultEndecaFileContent[file].fileContent[line]    
                var componentValueList = []; 
                
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
                                componentValueList.push(parseInt(Porcentaje))
                                
                                var uri = 'http://localhost:9001/' +
                                    collectionName + "/" +
                                    serverName + "/" +
                                    Servicio + "/" +
                                    Componente

                                estado = (Porcentaje == "100" ? "consistente" : "inconsistente");
   
                                console.log(uri + "Procentaje: " + Porcentaje + "Estado: " + estado)

                                 axios.post(uri, { "porcentaje": Porcentaje.toString(), "estado": estado})
                                    .then(function (response)
                                     {
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
                
                var estado = ""
                if (componentValueList.length > 0){

                    estado = (average(componentValueList) == 100 ? "consistente" : "inconsistente");


                    console.log("promedio servicio:" + average(componentValueList))
                     serverValueList.push(average(componentValueList))

                    uri = 'http://localhost:9001/' +
                        collectionName + "/" +
                        serverName + "/" +
                        Servicio


                    axios.post(uri, { "porcentaje": average(componentValueList).toString(), "estado": estado })
                        .then(function (response) {
                            console.log(response)
                        }.bind(this))
                        .catch(e => {
                            console.log(e)
                        })    
                }
                
            }
            file++
            console.log("pronedio servidor:" + average(serverValueList))
            estado = (average(serverValueList) == 100 ? "consistente" : "inconsistente");

            uri = 'http://localhost:9001/' +
                collectionName + "/" +
                serverName 

            axios.post(uri, { "porcentaje": average(serverValueList).toString(), "estado": estado })
                .then(function (response) {
                    console.log(response)
                }.bind(this))
                .catch(e => {
                    console.log(e)
                })   
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
