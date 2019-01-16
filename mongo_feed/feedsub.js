//--- Drp -----------------------------------------------Juan

db.ecommercesubmondrp.drop()
db.weblogicsubmondrp.drop()
db.weblogicserverssubmondrp.drop()
db.endecasubmondrp.drop()
db.originsubmondrp.drop()
db.otdsubmondrp.drop()

db.ecommercesubmondrp.insert([{
    fecha: new Date(),
    _id: "WebLogicSuburbia",
    nombre: "WebLogic Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OriginSuburbia",
    nombre: "Origenes Suburbia",
    estado: "consistente",
    porcentaje: 100
},
  {
    fecha: new Date(),
    _id: "HardwareSuburbia",
    nombre: "Hardware Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "DatabaseSuburbia",
    nombre: "Database Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "EndecaSuburbia",
    nombre: "Endeca Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OTDSuburbia",
    nombre: "OTD Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerSuburbia",
    nombre: "LoadBalancer Suburbia",
    estado: "consistente",
    porcentaje: 100
  }
])

db.weblogicsubmondrp.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicDomainSuburbia",
    nombre: "WebLogic Domain Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicServersSuburbia",
    nombre: "WebLogic Servers Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicMachinesSuburbia",
    nombre: "WebLogic Machines Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicClusterSuburbia",
    nombre: "WebLogic Cluster Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
])

db.weblogicserverssubmondrp.insert(
  [{
    fecha: new Date(),
    _id: "sb-app-01",
    nombre: "Suburbia App 1",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-02",
    nombre: "Suburbia App 2",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-03",
    nombre: "Suburbia App 3",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-04",
    nombre: "Suburbia App 4",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-05",
    nombre: "Suburbia App 5",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-06",
    nombre: "Suburbia App 6",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-07",
    nombre: "Suburbia App 7",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-08",
    nombre: "Suburbia App 8",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-09",
    nombre: "Suburbia App 9",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-10",
    nombre: "Suburbia App 10",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-11",
    nombre: "Suburbia App 11",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-12",
    nombre: "Suburbia App 12",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "aux-5",
    nombre: "AUX5",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "suburbia-preview",
    nombre: "Suburbia preview",
    estado: "RUNNING"
  }
])

db.endecasubmondrp.insert([
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)",nombre: "qroexahea16(172.16.212.31)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea16(172.17.212.190)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea16(172.16.212.31)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea16(172.17.212.190)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea16(172.17.212.190)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)",nombre: "qroexahea17(172.16.212.32)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea17(172.17.212.191)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea17(172.16.212.32)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea17(172.17.212.191)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea17(172.17.212.191)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)",nombre: "qroexahea18(172.16.212.33)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea18(172.17.212.192)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea18(172.16.212.33)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea18(172.17.212.192)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea18(172.17.212.192)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)",nombre: "qroexahea19(172.16.212.34)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-XM",nombre: "XM",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-XM-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-XM-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea19(172.17.212.193)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-CAS",nombre: "CAS",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-CAS-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-CAS-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea19(172.17.212.193)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-EACAdmin",nombre: "EACAdmin",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-EACAdmin-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-EACAdmin-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea19(172.17.212.193)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-AuthorMDEX",nombre: "AuthorMDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-AuthorMDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-qroexahea19(172.16.212.34)-Servicio-AuthorMDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea19(172.17.212.193)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea19(172.17.212.193)"}
])

  db.originsubmondrp.insert(
    [
      {
        fecha: new Date(),
        _id: "OriginSuburbia",
        nombre: "Origin",
        origins: [
          {
            fecha: new Date(),
            _id: "OriginSuburbia-OrigenA",
            nombre: "OrigenA",
            estado: "consistente",
            porcentaje: 100,
          },
          {
            fecha: new Date(),
            _id: "OriginSuburbia-OrigenB",
            nombre: "OrigenB",
            estado: "consistente",
            porcentaje: 100,
          },
        ],
        estado: "consistente",
        porcentaje: 100
      },
    ]
  )

  db.otdsubmondrp.insert([
    
  {
      fecha: new Date(),
      _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)",
      nombre: "qroexahot13(172.16.212.35)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot13(172.17.212.194)",
      servicios: [
        {
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS",
        nombre: "SBNodeJS",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot13(172.17.212.194)",
        componentes: [{
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-Http",
          nombre: "Http",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-Https",
          nombre: "Https",
          estado: "consistente",
          porcentaje: 100
        },{
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-AdminUrl",
          nombre: "AdminUrl",
          estado: "consistente",
          porcentaje: 100
        }
      ]
      
        }, {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot13(172.17.212.194)",
          componentes: [{
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          }, {
            fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          }, {
            fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-AdminUrl",
            nombre: "AdminUrl",
            estado: "consistente",
            porcentaje: 100
          }
          ]

        }]
  },// -----------------------------------------------------------------------

    {
      fecha: new Date(),
      _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)",
      nombre: "qroexahot14(172.16.212.36)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot14(172.17.212.195)",
      servicios: [
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot14(172.17.212.195)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }]
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot14(172.17.212.195)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        }
      ]
    }, // ---------------------------------------------------------------------------------------------
    {
      fecha: new Date(),
      _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)",
      nombre: "qroexahot15(172.16.212.37)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot15(172.17.212.196)",
      servicios: [
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot15(172.17.212.196)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }]
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot15(172.17.212.196)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        }
      ]
    }, // ---------------------------------------------------------------------------------------------
    {
      fecha: new Date(),
      _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)",
      nombre: "qroexahot16(172.16.212.38)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot16(172.17.212.197)",
      servicios: [{
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS",
        nombre: "SBNodeJS",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot16(172.17.212.197)",
        componentes: [{
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-Http",
          nombre: "Http",
          estado: "consistente",
          porcentaje: 100
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-Https",
          nombre: "Https",
          estado: "consistente",
          porcentaje: 100
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-AdminUrl",
          nombre: "AdminUrl",
          estado: "consistente",
          porcentaje: 100
        }
        ]
      },
      {
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp",
        nombre: "SBCreditApp",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot16(172.17.212.197)",
        componentes: [{
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp-Componente-Http",
          nombre: "Http",
          estado: "consistente",
          porcentaje: 100
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp-Componente-Https",
          nombre: "Https",
          estado: "consistente",
          porcentaje: 100
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp-Componente-AdminUrl",
          nombre: "AdminUrl",
          estado: "consistente",
          porcentaje: 100
        }
        ]
      }
      ]
    } // ---------------------------------------------------------------------------------------------


])


//--- Prd ------------------------------------------------

db.ecommercesubmonprd.drop()
db.weblogicsubmonprd.drop()
db.weblogicserverssubmonprd.drop()
db.endecasubmonprd.drop()
db.originsubmonprd.drop()
db.otdsubmonprd.drop()

db.ecommercesubmonprd.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicSuburbia",
    nombre: "WebLogic Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OriginSuburbia",
    nombre: "Origenes Suburbia",
    estado: "consistente",
    porcentaje: 100
},
  {
    fecha: new Date(),
    _id: "HardwareSuburbia",
    nombre: "Hardware Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "DatabaseSuburbia",
    nombre: "Database Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "EndecaSuburbia",
    nombre: "Endeca Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OTDSuburbia",
    nombre: "OTD Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerSuburbia",
    nombre: "LoadBalancer Suburbia",
    estado: "consistente",
    porcentaje: 100
  }
])

db.weblogicsubmonprd.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicDomainSuburbia",
    nombre: "WebLogic Domain Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicServersSuburbia",
    nombre: "WebLogic Servers Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicMachinesSuburbia",
    nombre: "WebLogic Machines Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WebLogicClusterSuburbia",
    nombre: "WebLogic Cluster Suburbia",
    estado: "consistente",
    porcentaje: 100
  },
])

db.weblogicserverssubmonprd.insert(
  [{
    fecha: new Date(),
    _id: "sb-app-01",
    nombre: "Suburbia App 1",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-02",
    nombre: "Suburbia App 2",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-03",
    nombre: "Suburbia App 3",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-04",
    nombre: "Suburbia App 4",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-05",
    nombre: "Suburbia App 5",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-06",
    nombre: "Suburbia App 6",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-07",
    nombre: "Suburbia App 7",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-08",
    nombre: "Suburbia App 8",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-09",
    nombre: "Suburbia App 9",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-10",
    nombre: "Suburbia App 10",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-11",
    nombre: "Suburbia App 11",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "sb-app-12",
    nombre: "Suburbia App 12",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "aux-5",
    nombre: "AUX5",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "suburbia-preview",
    nombre: "Suburbia preview",
    estado: "RUNNING"
  }
])

db.endecasubmonprd.insert([
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)",nombre: "mtyexapea16(172.17.212.190)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea16(172.16.212.31)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea16(172.17.212.190)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea16(172.16.212.31)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea16(172.16.212.31)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)",nombre: "mtyexapea17(172.17.212.191)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea17(172.16.212.32)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea17(172.17.212.191)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea17(172.16.212.32)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea17(172.16.212.32)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)",nombre: "mtyexapea18(172.17.212.192)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea18(172.16.212.33)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea18(172.17.212.192)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea18(172.16.212.33)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea18(172.16.212.33)"}
  ,
  {fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)",nombre: "mtyexapea19(172.17.212.193)",servicios: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-XM",nombre: "XM",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-XM-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-XM-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea19(172.16.212.34)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-CAS",nombre: "CAS",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-CAS-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-CAS-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea19(172.16.212.34)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-EACAdmin",nombre: "EACAdmin",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-EACAdmin-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-EACAdmin-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea19(172.16.212.34)"},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-AuthorMDEX",nombre: "AuthorMDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-AuthorMDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceSuburbiaServidores-mtyexapea19(172.17.212.193)-Servicio-AuthorMDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea19(172.16.212.34)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea19(172.16.212.34)"}
])

db.originsubmonprd.insert(
  [
    {
      fecha: new Date(),
      _id: "OriginSuburbia",
      nombre: "Origin",
      origins: [
        {
          fecha: new Date(),
          _id: "OriginSuburbia-OrigenA",
          nombre: "OrigenA",
          estado: "consistente",
          porcentaje: 100,
        },
        {
          fecha: new Date(),
          _id: "OriginSuburbia-OrigenB",
          nombre: "OrigenB",
          estado: "consistente",
          porcentaje: 100,
        },
      ],
      estado: "consistente",
      porcentaje: 100
    },
  ]
)

db.otdsubmonprd.insert
(
  [
    {
      fecha: new Date(),
      _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)",
      nombre: "mtyexapot13(172.17.212.194)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot13(172.16.212.35)",
      servicios: [
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot13(172.16.212.35)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            }, 
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            }, 
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
          }]
        },
        {
          fecha: new Date(),
          _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot13(172.16.212.35)",
          componentes: [
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdSuburbiaServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        }
      ]
    }, // -----------------------------------------------------------------------

      {
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)",
        nombre: "mtyexapot14(172.17.212.195)",
        estado: "consistente",
        porcentaje: 100,
        espejo: "qroexahot14(172.16.212.36)",
        servicios: [
          {
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS",
            nombre: "SBNodeJS",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot14(172.16.212.36)",
            componentes: [
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }]
          },
          {
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp",
            nombre: "SBCreditApp",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot14(172.16.212.36)",
            componentes: [
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }
            ]
          }
        ]
      }, // ---------------------------------------------------------------------------------------------
      {
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)",
        nombre: "mtyexapot15(172.17.212.196)",
        estado: "consistente",
        porcentaje: 100,
        espejo: "qroexahot15(172.16.212.37)",
        servicios: [
          {
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS",
            nombre: "SBNodeJS",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot15(172.16.212.37)",
            componentes: [
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }]
          },
          {
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp",
            nombre: "SBCreditApp",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot15(172.16.212.37)",
            componentes: [
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }
            ]
          }
        ]
      }, // ---------------------------------------------------------------------------------------------
      {
        fecha: new Date(),
        _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)",
        nombre: "mtyexapot16(172.17.212.197)",
        estado: "consistente",
        porcentaje: 100,
        espejo: "qroexahot16(172.16.212.38)",
        servicios: [{
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS",
            nombre: "SBNodeJS",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot16(172.16.212.38)",
            componentes: [{
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }
            ]
          },
          {
            fecha: new Date(),
            _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp",
            nombre: "SBCreditApp",
            estado: "consistente",
            porcentaje: 100,
            espejo: "qroexahot16(172.16.212.38)",
            componentes: [{
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-Http",
                nombre: "Http",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-Https",
                nombre: "Https",
                estado: "consistente",
                porcentaje: 100
              },
              {
                fecha: new Date(),
                _id: "OtdSuburbiaServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-AdminUrl",
                nombre: "AdminUrl",
                estado: "consistente",
                porcentaje: 100
              }
            ]
          }
        ]
      } // ---------------------------------------------------------------------------------------------
  ]
)