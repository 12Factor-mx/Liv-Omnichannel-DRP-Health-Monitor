var fs = require('fs');
var f1 = 1
var f1 = []
global.splitedFiles = [];



   //var FileParsedResult = [];
   
   exports.parse = function (path, options)
   {
       //console.log("Function parser ")
       //console.log("Function parser parameter path: "  + path)
       //console.log("Function parser parameter options: " + JSON.stringify(options, undefined, 2))
      
       var files = getFiles(path); 
       var b = splitFiles(files, options);

       //b = splitFiles(files, options);


      
       console.log("kdkdd " + this.b)

       //FileParsedResult = splitedFiles; 

       return b ;
   }

   function f1 ()
   {
       return "no mames"
   }
    

function getFiles(path){
    var files = fs.readdirSync(path);
    var totalFiles = files.length;

    return files;
}

function splitFiles(files, options)
{

    let splitFileResult = [];
    let splitedString = "";
    //var f1 = 1;

    
   
    //console.log("options: " + options)
    //console.log("files: " + files)

    files.forEach(function (file) { 

        //console.log("file: " + file);

        options.parts.forEach(function (part){
  
            // console.log(part.start)
            // console.log(part.end)
            // console.log(part.into)
            
          if(part.end == "") {
              splitedString = file.substring(part.start);
          } else {
              splitedString = file.substring(part.start, part.end);

          }
            
           // console.log("    ")
           // console.log('inicio ------------------')
           splitFileResult[part.into] = splitedString
           // console.log(splitFileResult[part.into])
           // console.log('fin ------------------') 


        });
        

        global.splitedFiles[file] = splitFileResult;
    
        //f1 = splitedFiles[file]
        console.log("inicio ----");
        console.log(splitedFiles);
        console.log("fin ----" + JSON.stringify(global.splitedFiles[file]));
        f1++;
        f2 = global.splitedFiles
        
    });
    
    console.log("ksksks" + f1 + f2);
    return f1

}

