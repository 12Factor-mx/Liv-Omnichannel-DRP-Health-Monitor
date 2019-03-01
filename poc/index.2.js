var svnUltimate = require('node-svn-ultimate')

//var obj = svnUltimate.util.parseUrl('svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration');
 //clearconsole.log(obj)


var src = "svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration"
var dst = '/home/mdiazm/Downloads/2'

 
function exportSVN() {


   return new Promise((resolve, reject) => {


    console.log("Executing SVN export of " + src)
     svnUltimate.commands.export(
       src,
       dst, {
         username: "edfariasn", // same as --username
         password: "4rg3nt1n4", // same as --password
         params: ['--force'],
         quiet: true,

          }, 
          function (err,data) {
           if(!err)
             return resolve('export suceed at ' + dst)
           else
             return reject(err)
            })
    })

}

async function exportSVN1() {

     return await exportSVN();
}

exportSVN1().then((res) => { console.log(res)}).catch( (err)=> {console.log(err)})
