var parser = require('./parser.js')
//var myParser = new parser();

var optionsEndeca = {
    parts: [
        { start: "0", end: "3", into: "Endeca_bussines" },
        { start: "3", end: "6", into: "Enedeca_env" },
        { start: "6", end: "17", into: "Endeca_date" },
        { start: "18", end: "", into: "Enedeca_server" }
    ]
};

var resultEndecaSplit = [];
 
resultEndecaSplit = parser.parse('./files', optionsEndeca);
//console.log("res = "+  this.resultEndecaSplit)
console.log("res" + parser.parse('./files', optionsEndeca));
//console.log(resultEndecaSplit)

