/**
 * Funciones para obterner información de consistenacia para el
 * ATG Layering de los ambientes Liverpool 
 * 
 * Miguel Díaz - mdiazm01@liverpool.com.mx
 * 
 */

// Vendors Modules 
var loki = require('lokijs')
var _ = require('lodash');
var fs = require('fs');
var jsdiff = require('diff');

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
async function updateSHA1_ecommerce_v11_3_env_configuration() {
  var collection = "ecommerce_v11_3_env_configuration"
  return new Promise((resolve, reject) => {
    svn.exportTo(svnUrl, to, options).then(function (r) {
      console.log(r);
      sha1.create(to).then((sha1Files) => {
        console.log(sha1Files);
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


/** function updateSHA1_Diff_SVNPROD_vs_SVNPRODHA()
 * 
 * Tener en Mongo las diferecias de checksum entre SVNPROD y SVNPRODHA
 * 
 * Regresa:
 * 
 * 1) Promesa con el estado de la transacción
 * 
 * Lógica:
 * 
 * 1) Exporta el SVN repo 'ecommerce_v11_3/branches/environment/env-configuratio' a /tmp/liv_atg_layering_config
 * 2) Crea una base de datos loki (fast 100% javascript in-memory key:value database)
 * 3) Crea las tablas/coleccines loki PROD y PRODHA
 * 4) Llena las tablas PROD y PORDHA con los datos de /tmp/liv_atg_layering_config y el checksum de cada archivo
 * 5) Itera sobre PROD buscando los archivos de PRODHA 
 * 6) Calcula las diferencias de checksum y los archivos no existentes
 * 7) Elimina la llave $loki del cálculo de diferencias (mongo no permite documentos con llaves que comienzan con $)
 * 8) Persiste el cálculo de difenercias
 * 
 */

async function updateSHA1_Diff_SVNPROD_vs_SVNPRODHA() {
  return new Promise(async (resolve, reject) => {
    let lokiDB = new loki('loki.json')
    k = 0
    s = 0
    t = 0
    svn.exportTo(svnUrl, to, options).then( (exportRes) => {
      let e = exportRes
      createLokiCollectionProd(lokiDB).then((lokiCollectionProd) => {
        let lcprd = lokiCollectionProd
        sha1.create(to + '/PROD/').then((sha1Files) => {
          let prodSHA1Files = sha1Files
          insertLokiCollectionProd(lcprd, prodSHA1Files).then((loadedLokiCollectionProd) => {
            let llcprd = loadedLokiCollectionProd
            // console.log("loadedLokiCollectionProd ouside :" + JSON.stringify(llcprd.data, undefined, 2))
            createLokiCollectionProdHA(lokiDB).then((lokiCollectionProdHA) => {
              let lcprdHA = lokiCollectionProdHA
              sha1.create(to + '/PRODHA/').then((sha1FilesHA) => {
                let prodSHA1FilesHA = sha1FilesHA
                insertLokiCollectionProdHA(lcprdHA, prodSHA1FilesHA).then((loadedLokiCollectionProdHA) => {
                  let llcprdHA = loadedLokiCollectionProdHA
                  //console.log("loadedLokiCollectionProdHA ouside :" + JSON.stringify(llcprdHA.data, undefined, 2))
                  findAllLokiCollectionProd(llcprd).then((prod) => {
                    let prd = prod
                    //console.log("prod ouside :" + JSON.stringify(prd, undefined, 2))
                    genereate_SHA1_Diff_SVNPROD_vs_SVNPRODHA(prd, lcprdHA).then((diff) => {
                      let d = diff
                      //console.log(JSON.stringify(diff, undefined, 2))
                      removeLoki(d).then((cleanDiff) => {
                        let clean = cleanDiff
                        //console.log(JSON.stringify(cleanDiff, undefined, 2))
                        db.insertWithDropCreate('SHA1_Diff_SVNPROD_vs_SVNPRODHA', clean).then((insertRes) => {
                          //console.log(JSON.stringify(insertRes, undefined, 2))
                          resolve(insertRes)
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

//-------------------------------------
// Helper Functions
//-------------------------------------

// If OK promises returs a loki collection
//async function calculate_SHA1_Diff_SVNPROD_vs_SVNPRODHA() {


async function genereate_SHA1_Diff_SVNPROD_vs_SVNPRODHA(prod, LokiCollectionProdHA) {

  return new Promise(async (resolve, reject) => {
; 
    let Diff = [];
    k = 0; s = 0; t = prod.length; 
    await asyncForEach(prod, (item) =>{
      findOneLokiCollectionProdHA(LokiCollectionProdHA, "pathSVN", item.pathSVN).then((prodHA) => {
        function getDiffsLoop(){
          return new Promise(async (resolve, reject) =>{
            if (prodHA === undefined) {
              //console.log("La llave %s de PROD no existe en PRODHA", item.pathSVN);
              k++
              var r1 = {
                "error": {
                  "errorType": "Archivo de SVNPROD no existe en SVNHAPROD",
                  "path": item.pathSVN
                }
              }
              Diff.push(r1)
            } else if (item.sha1SVN != prodHA.sha1SVN) {
              //console.log("El checksum de %s no coincide", item.pathSVN)
              var src1 = to + '/PROD/' + item.pathSVN.substring(1)
              var src2 = to + '/PRODHA/' + prodHA['pathSVN'].substring(1)
              var fileSrc1 = fs.readFileSync(src1, "utf8");
              var fileSrc2 = fs.readFileSync(src2, "utf8");
              var diff = await jsdiff.diffChars(fileSrc1, fileSrc2);
              s++
              var r2 = {
                "error": {
                  "errorType": "El cehcksum no concide",
                  "path": item.pathSVN,
                  "PROD": item,
                  "PRODHA": prodHA,
                  "filePROD": fileSrc1,
                  "filePRODHA": fileSrc2,
                  "dif": diff,
                } 
              }
              Diff.push(r2)
            } else {}
          })
        }
      getDiffsLoop().then((calculatedDiff) => {
        Diff.push(calculatedDiff)
      })
    })
    }) 
    Diff.push({
      "error": {
        "errorType": "resumen",
        "archivosEnPROD": t,
        "ArchivosPRODnoEnPRODHA": k,
        "ArchivosPRODconDifChecksumEnPRODHA": s,
        "DateTime": Date(Date.now()).toLocaleString('es-MX')
      }
    })
    resolve(Diff)
  });
}

//Removes the '$loki' key
async function removeLoki(obj) {
  return new Promise((resolve, reject) => {
    resolve(utils.deepOmit(obj, ["$loki"]))
  })
}

async function createLokiCollectionProd(lokiDB) {
  let dB = lokiDB
  return new Promise((resolve, reject) => {
    resolve(dB.addCollection("PROD", {
      unique: ['pathSVN'],
      indices: ['sha1SVN']
    }))
  })
}

async function createLokiCollectionProdHA (lokiDB)  {
  let dB = lokiDB
  return new Promise((resolve, reject) => {
    resolve(dB.addCollection("PRODHA", {
      unique: ['pathSVN'],
      indices: ['sha1SVN']
    }))
  })
}

async function insertLokiCollectionProd(lokiCollectionProd, pordData) {
  return new Promise((resolve, reject) => {
    lokiCollectionProd.insert(pordData)
    resolve(lokiCollectionProd)
  })
}

async function insertLokiCollectionProdHA(lokiCollectionProdHA, pordDataHA) {
  return new Promise((resolve, reject) => {
    lokiCollectionProdHA.insert(pordDataHA)
    resolve(lokiCollectionProdHA)
  })
}

async function findAllLokiCollectionProd(lokiCollectionProd) {
  return new Promise((resolve, reject) => {
    var prod = lokiCollectionProd.find()
    resolve(prod)
  })
}

async function findOneLokiCollectionProdHA(lokiCollectionProd, key, value) {
  return new Promise((resolve, reject) => {
    var doc = lokiCollectionProd.by(key, value)
    resolve(doc)
  })
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

// ------------------------------------
// Expoose public functions here
//-------------------------------------
exports.updateSHA1_ecommerce_v11_3_env_configuration = updateSHA1_ecommerce_v11_3_env_configuration;
exports.updateSHA1_Diff_SVNPROD_vs_SVNPRODHA = updateSHA1_Diff_SVNPROD_vs_SVNPRODHA;
