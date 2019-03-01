var MongoClient = require('mongodb').MongoClient

var dbName = 'Liv_Ominchannel_DRP_Health_Monitor'
var url = 'mongodb://localhost:27017/' + dbName

var filename = '/tmp/checklist.chk'


MongoClient.connect(url, function (err, db) {
  if (err) {
    console.error('Problem connecting to database')
  } else {
    console.log('Connected correctly to server.')

    var lineReader = require('line-reader')
    var collectionSrcTxt = 'ecommerce_v11_3_env_configuration'
    var collectionDestTxt = 'ecommerce_v11_3_env_configuration_diff'

    var dbo = db.db()

    var collectionSrc = dbo.collection(collectionSrcTxt)
    var collectionDest = dbo.collection(collectionDestTxt)



    dbo.collection(collectionDestTxt).drop((e, r) => {
      console.log("Deleting")

      dbo.createCollection(collectionDestTxt, (e, r) => {
        console.log("creating")
        var lineNum = -1
        var headers = []
        var nDiff
        console.log("Start looking for difrences on ATG Layering")
        lineReader.eachLine(filename, function (line, last, cb) {
          lineNum++
          try {
            var split = line.split(',')
            var object = {}

            if (lineNum > 0) {
              for (var i = 0; i < split.length; i += 1) {
                object[headers[i]] = split[i]
              }

              collectionSrc.findOne({
                "pathSVN": object['pathSVR']
              }, (e, r) => {

                if (e) {
                  console.log("error : " + e)
                  throw err;
                }

                if (r.sha1SVN != object['sha1SVR']) {

                  nDiff++
                  console.log(" Diff # $s svn:$s file:$s", nDiff, r.sha1SVN, object['sha1SVR'])

                  var o = {
                    "path": r.pathSVN,
                    "diff": [{
                        "sha1SVN": r.sha1SVN
                      },
                      {
                        "pathSVN": r.pathSVN
                      },
                      {
                        "sha1SVR": object['sha1SVR']
                      },
                      {
                        "pathSVR": object['pathSVR']
                      },

                    ]
                  }
                  console.log("Object to insert:" + o);
                  collectionDest.insertOne(o, (e, r) => {
                    if (e) throw e;
                    console.log("1 document inserted: " + r);
                  })
                }
              });

              //collectionDest.insert(object, function (insertErr, insertObj) {
              //    if (insertErr) console.error(insertErr)
              //    if (lineNum % printLine === 0) console.log('Line ' + lineNum)
              if (last) {
                console.log('Done with ' + filename + ' (' + lineNum + ' records)')
                process.exit(0)
              } else {
                cb()
              }
              //})
            } else {
              headers = line.split(',')
              cb()
            }
          } catch (lineError) {
            console.error(lineError)
          }
        })
      })
    })
  }
})
