/**
 * Funciones para obterner informacion de consistenacia para el
 * ATG Layering de los mabientes Liverpool 
 * 
 */

// Vendors Modules 
var loki = require('lokijs')
var _ = require('lodash');


// My Modules
var svn = require('./svn') 
var sha1 = require('./sha1') 
var db = require('./db') 
var utils = require('./utils')

// vars, lets & consts
var svnUrl = "svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration"
var to = '/tmp/liv_atg_layering_config'
var options = {
  username: "edfariasn",
  password: "4rg3nt1n4",
  params: ['--force'],
  quiet: true,
};


//-------------------------------------
// Exportable Functions
//-------------------------------------

/** function updateSHA1_ecommerce_v11_3_env_configuration()
 * 
 * Tener en Mongo los checksums de los archivos del repo de SVN para
 * el layering de ATG (Source of True / Fuente de la Verdad)
 * 
 * Regresa:
 * 
 * 1) Promesa con el estado de la transacción
 * 
 * Lógica:
 * 
 * 1) exporta el SVN repo 'ecommerce_v11_3/branches/environment/env-configuratio' a /tmp/liv_atg_layering_config
 * 2) obtiene los checksums SHA1 de los archivos / tmp / liv_atg_layering_config
 * 3) inserta las rutas y los respectivos checksum en la coleccion ecommerce_v11_3_env_configuration
 * 
 */
function updateSHA1_ecommerce_v11_3_env_configuration() {

  var collection = "ecommerce_v11_3_env_configuration"

  return new Promise((resolve, reject) =>{

    // Exporta el repo SVN
    svn.exportTo(svnUrl, to, options).then(function (r) {
      console.log(r);
      // Calcula los checksums
      sha1.create(to).then((sha1Files) => {
        // Presiste en Mongo
        db.insertWithDropCreate(collection, sha1Files).then((r) => {
          console.log(r);
          resolve(r);
        }).catch((e) => {
          console.log("Insert Error: " + e);
          reject(r);
        })
      }).catch((e) => {
        console.log("Create Error: " + e);
        reject(r);
      })
    }).catch((e) => {
      console.log("Export Error:" + e)
      reject(r);
    })
  })
}


/** function get_SHA1_Diff_SVNPROD_vs_SVNHAPROD()
 * 
 * Tener en Mongo las diferecias de checksum entre PROD y HAPROD
 * 
 * Regresa:
 * 
 * 1) Promesa con el estado de la transacción
 * 
 * Lógica:
 * 
 * 1) exporta el SVN repo 'ecommerce_v11_3/branches/environment/env-configuratio' a /tmp/liv_atg_layering_config
 * 2) 
 * 3) 
 * 
 */

function get_SHA1_Diff_SVNPROD_vs_SVNVHAPROD()
{
  var collection = "SHA1_Diff_SVNPROD_vs_SVNVHAPROD"

  return new Promise((resolve, reject) =>{

     svn.exportTo(svnUrl, to, options).then(function (r) {
        calculate_SHA1_Diff_SVNPROD_vs_SVNPRODHA().then((diffData) => {
          //console.log(JSON.stringify(diffData, undefined, 2))
          removeLoki(diffData).then((cleanData)=>{
            console.log(JSON.stringify(cleanData,undefined,2));
            db.insertWithDropCreate(collection, cleanData).then((insertResult) => {
              console.log(insertResult);
              resolve(insertResult);
            }).catch((e) => {
              console.log("Insert Error: " + e);
              reject(r);
          })
          }).catch((e) => {
            console.log("Clean Error: " + e);
            reject(r);
          })

        }).catch((e) => {
          console.log("Calculate Error:" + e)
          reject(r);
        })
     }).catch((e) => {
        console.log("Export Error:" + e)
        reject(r);
     })
  })
}


//-------------------------------------
// Helper Functions
//-------------------------------------

// If OK promises returs a loki collection
async function calculate_SHA1_Diff_SVNPROD_vs_SVNPRODHA ()
{
  var lokyDB = new loki('loki.json')

  var PROD = lokyDB.addCollection('PROD', {
    unique: ['pathSVN'], indices: ['sha1SVN']
  })

  var PRODHA = lokyDB.addCollection('PRODHA', {
     unique: ['pathSVN'],
     indices: ['sha1SVN']
   })

   var Diff = []

  return new Promise((resolve, reject) => {
     
    k = 0
    s = 0
    t = 0

    sha1.create(to + "/PROD").then((sha1FilesPROD) =>{
      try {
        PROD.insert(sha1FilesPROD)
          sha1.create(to + "/PRODHA" ).then((shaFilesPRODHA) =>{
            try{
              PRODHA.insert(shaFilesPRODHA)
              var Prod= PROD.find()
                            
              t = Prod.length
              for (var i = 0; i < t; i++)
              {
                var doc = PRODHA.by("pathSVN", Prod[i].pathSVN)
                if(doc === undefined){
                  console.log("La llave %s de PROD no existe en PRODHA", Prod[i].pathSVN);
                  Diff.push({"error": {"errorType":"Archivo de SVNPROD no existe en SVNHAPROD", "path": Prod[i].pathSVN}} )
                  k++
                }
                else if (Prod[i].sha1SVN != doc.sha1SVN)
                {
                    console.log("El checksum de %s no coincide", Prod[i].pathSVN)
                    console.log("PROD %s: ", JSON.stringify(Prod[i],undefined,2))
                    console.log("PRODHA %s:", JSON.stringify(doc,undefined,2))
                    Diff.push({
                      "error": {
                        "errorType": "El checksum no coincide",
                        "path": Prod[i].pathSVN,
                        "PROD": Prod[i],
                        "PRODHA": doc
                      }
                    })
                    s++
                }
                else
                {

                }
              }
              console.log("%s archivos en PROD", t)
              console.log("%s Archivos PROD no estan en PRODHA", k)
              console.log("%s Archivos PROD con diferente checksum en PRODHA", s)
              Diff.push({
                "error": {
                  "errorType": "resumen",
                  "archivosEnPROD": t,
                  "ArchivosPRODnoEnPRODHA":k,
                  "ArchivosPRODconDifChecksumEnPRODHA": s,
                  "DateTime": Date(Date.now()).toLocaleString('es-MX')
                }
              })

              resolve(Diff)

            }catch(err){
              reject(err)
            }
          }).catch((err) => { reject(err) })
      }catch(err){
        reject(err)
      }
    }).catch((err) => { reject(err) })
  })  

}



//Removes the '$loki' key
async function removeLoki(obj)
{
  return new Promise((resolve, reject) => {
    resolve(utils.deepOmit(obj,["$loki"]))
  })
}

// ------------------------------------
// Expoose public functions here
//-------------------------------------
exports.updateSHA1_ecommerce_v11_3_env_configuration = updateSHA1_ecommerce_v11_3_env_configuration;
exports.get_SHA1_Diff_SVNPROD_vs_SVNVHAPROD = get_SHA1_Diff_SVNPROD_vs_SVNVHAPROD;

