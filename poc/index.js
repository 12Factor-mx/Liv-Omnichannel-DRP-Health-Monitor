var fileNameSplitter = require('./fileNameSplitter')


var optionsEndecaFileNameSplit = {
    parts: [
        { start: "0", end: "3", into: "Endeca_bussines" },
        { start: "3", end: "6", into: "Enedeca_env" },
        { start: "6", end: "17", into: "Endeca_date" },
        { start: "18", end: "", into: "Enedeca_server" }
    ]
};

var resultEndecaFileNameSplit = [];
 
resultEndecaFileNameSplit = fileNameSplitter('./files', optionsEndecaFileNameSplit);
console.log("Final result", resultEndecaFileNameSplit)