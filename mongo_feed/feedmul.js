//--- Drp -----------------------------------------------Juan

db.ecommercemulmondrp.drop()
db.weblogicmulmondrp.drop()
db.weblogicserversmulmondrp.drop()
db.endecamulmondrp.drop()
db.originmulmondrp.drop()
db.otdmulmondrp.drop()

db.ecommercemulmondrp.insert([{
    fecha: new Date(),
    _id: "WebLogicMultisitios",
    nombre: "WebLogic Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OriginMultisitios",
    nombre: "Origenes Multisitios",
    estado: "consistente",
    porcentaje: 100
},
  {
    fecha: new Date(),
    _id: "HardwareMultisitios",
    nombre: "Hardware Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "DatabaseMultisitios",
    nombre: "Database Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "EndecaMultisitios",
    nombre: "Endeca Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OTDMultisitios",
    nombre: "OTD Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerMultisitios",
    nombre: "LoadBalancer Multisitios",
    estado: "consistente",
    porcentaje: 100
  }
])

db.weblogicmulmondrp.insert(
  [{
    fecha: new Date(),
    _id: "WeblogicDomainMultisitios",
    nombre: "Weblogic Domain Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WeblogicServersMultisitios",
    nombre: "Weblogic Servers Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WeblogicMachinesMultisitios",
    nombre: "Weblogic Machines Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "Weblogic Cluster Multisitios",
    nombre: "WebLogic Cluster Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
])

db.weblogicserversmulmondrp.insert([{
    fecha: new Date(),
    _id: "AdminServer",
    nombre: "AdminServer",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "App-01",
    nombre: "App-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "App-02",
    nombre: "App-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Aux-03",
    nombre: "Aux-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Bot-MS",
    nombre: "Bot-MS",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Csc-01",
    nombre: "Csc-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Proxy-01",
    nombre: "Proxy-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store01-eCommerce-Multisitios-Drp",
    nombre: "Store-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store02-eCommerce-Multisitios-Drp",
    nombre: "Store-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store03-eCommerce-Multisitios-Drp",
    nombre: "Store-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-04",
    nombre: "Store-04",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-05",
    nombre: "Store-05",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-06",
    nombre: "Store-06",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-07",
    nombre: "Store-07",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-08",
    nombre: "Store-08",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-09",
    nombre: "Store-09",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-10",
    nombre: "Store-10",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-11",
    nombre: "Store-11",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-12",
    nombre: "Store-12",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-13",
    nombre: "Store-13",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-14",
    nombre: "Store-14",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-15",
    nombre: "Store-15",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-16",
    nombre: "Store-16",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-17",
    nombre: "Store-17",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-18",
    nombre: "Store-18",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-19",
    nombre: "Store-19",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-20",
    nombre: "Store-20",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-21",
    nombre: "Store-21",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-22",
    nombre: "Store-22",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-23",
    nombre: "Store-23",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-24",
    nombre: "Store-24",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-25",
    nombre: "Store-25",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-26",
    nombre: "Store-26",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-27",
    nombre: "Store-27",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-28",
    nombre: "Store-28",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-29",
    nombre: "Store-29",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-01",
    nombre: "Store-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-02",
    nombre: "Store-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-03",
    nombre: "Store-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-04",
    nombre: "Store-04",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-05",
    nombre: "Store-05",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-previwe",
    nombre: "Store-MS-preview",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-preview",
    nombre: "Store-preview",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Ws-01",
    nombre: "ws-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Ws-02",
    nombre: "ws-02",
    estado: "RUNNING"
  }
])

db.endecamulmondrp.insert(
  [
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea11(172.16.212.156)",nombre: "qroexahea11(172.16.212.156)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea11(172.16.212.156)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea11(172.16.212.156)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea11(172.16.212.156)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea09(172.17.212.139)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea09(172.17.212.139)"}
    ,
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea10(172.16.212.155)",nombre: "qroexahea10(172.16.212.155)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea10(172.16.212.155)-Servicio-ITL",nombre: "ITL",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea10(172.16.212.155)-Servicio-ITL-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea10(172.16.212.155)-Servicio-ITL-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea10(172.17.212.140)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea10(172.17.212.140)"}
    ,
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea12(172.16.212.157)",nombre: "qroexahea12(172.16.212.157)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea12(172.16.212.157)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea12(172.16.212.157)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-qroexahea12(172.16.212.157)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea12(172.17.212.130)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea12(172.17.212.130)"}
  ])

db.originmulmondrp.insert(
  [
    {
      fecha: new Date(),
      _id: "OriginMultisitios",
      nombre: "Origin",
      origins: [
      {
        fecha: new Date(),
        _id: "OriginMultisitios-OrigenA",
        nombre: "OrigenA",
        estado: "consistente",
        porcentaje: 100,
      },
      ],
      estado: "consistente",
      porcentaje: 100
    },
  ]
)

db.otdmulmondrp.insert([

  {
    fecha: new Date(),
    _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)",
    nombre: "qroexahot13(172.16.212.35)",
    estado: "consistente",
    porcentaje: 100,
    espejo: "mtyexapot13(172.17.212.194)",
    servicios: [{
      fecha: new Date(),
      _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS",
      nombre: "SBNodeJS",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot13(172.17.212.194)",
      componentes: [{
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-Http",
        nombre: "Http",
        estado: "consistente",
        porcentaje: 100
      }, {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-Https",
        nombre: "Https",
        estado: "consistente",
        porcentaje: 100
      }, {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBNodeJS-Componente-AdminUrl",
        nombre: "AdminUrl",
        estado: "consistente",
        porcentaje: 100
      }]

    }, {
      fecha: new Date(),
      _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp",
      nombre: "SBCreditApp",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot13(172.17.212.194)",
      componentes: [{
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-Http",
        nombre: "Http",
        estado: "consistente",
        porcentaje: 100
      }, {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-Https",
        nombre: "Https",
        estado: "consistente",
        porcentaje: 100
      }, {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot13(172.16.212.35)-Servicio-SBCreditApp-Componente-AdminUrl",
        nombre: "AdminUrl",
        estado: "consistente",
        porcentaje: 100
      }]

    }]
  }, // -----------------------------------------------------------------------

  {
    fecha: new Date(),
    _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)",
    nombre: "qroexahot14(172.16.212.36)",
    estado: "consistente",
    porcentaje: 100,
    espejo: "mtyexapot14(172.17.212.195)",
    servicios: [{
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS",
        nombre: "SBNodeJS",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot14(172.17.212.195)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBNodeJS-Componente-AdminUrl",
            nombre: "AdminUrl",
            estado: "consistente",
            porcentaje: 100
          }
        ]
      },
      {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp",
        nombre: "SBCreditApp",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot14(172.17.212.195)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot14(172.16.212.36)-Servicio-SBCreditApp-Componente-AdminUrl",
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
    _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)",
    nombre: "qroexahot15(172.16.212.37)",
    estado: "consistente",
    porcentaje: 100,
    espejo: "mtyexapot15(172.17.212.196)",
    servicios: [{
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS",
        nombre: "SBNodeJS",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot15(172.17.212.196)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBNodeJS-Componente-AdminUrl",
            nombre: "AdminUrl",
            estado: "consistente",
            porcentaje: 100
          }
        ]
      },
      {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp",
        nombre: "SBCreditApp",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot15(172.17.212.196)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot15(172.16.212.37)-Servicio-SBCreditApp-Componente-AdminUrl",
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
    _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)",
    nombre: "qroexahot16(172.16.212.38)",
    estado: "consistente",
    porcentaje: 100,
    espejo: "mtyexapot16(172.17.212.197)",
    servicios: [{
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS",
        nombre: "SBNodeJS",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot16(172.17.212.197)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-Https",
            nombre: "Https",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBNodeJS-Componente-AdminUrl",
            nombre: "AdminUrl",
            estado: "consistente",
            porcentaje: 100
          }
        ]
      },
      {
        fecha: new Date(),
        _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp",
        nombre: "SBCreditApp",
        estado: "consistente",
        porcentaje: 100,
        espejo: "mtyexapot16(172.17.212.197)",
        componentes: [{
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp-Componente-Http",
            nombre: "Http",
            estado: "consistente",
            porcentaje: 100
          },
          {
            fecha: new Date(),
            _id: "OtdMultisitiosServidores-qroexahot16(172.16.212.38)-Servicio-SBCreditApp-Componente-Https",
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

db.ecommercemulmonprd.drop()
db.weblogicmulmonprd.drop()
db.weblogicserversmulmonprd.drop()
db.endecamulmonprd.drop()
db.originmulmonprd.drop()
db.otdmulmonprd.drop()

db.ecommercemulmonprd.insert([
  {
    fecha: new Date(),
    _id: "WebLogicMultisitios",
    nombre: "WebLogic Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OriginMultisitios",
    nombre: "Origenes Multisitios",
    estado: "consistente",
    porcentaje: 100
},
  {
    fecha: new Date(),
    _id: "HardwareMultisitios",
    nombre: "Hardware Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "DatabaseMultisitios",
    nombre: "Database Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "EndecaMultisitios",
    nombre: "Endeca Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "OTDMultisitios",
    nombre: "OTD Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerMultisitios",
    nombre: "LoadBalancer Multisitios",
    estado: "consistente",
    porcentaje: 100
  }
])

db.weblogicmulmonprd.insert([
  {
    fecha: new Date(),
    _id: "WeblogicDomainMultisitios",
    nombre: "Weblogic Domain Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WeblogicServersMultisitios",
    nombre: "Weblogic Servers Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "WeblogicMachinesMultisitios",
    nombre: "Weblogic Machines Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
  {
    fecha: new Date(),
    _id: "Weblogic Cluster Multisitios",
    nombre: "WebLogic Cluster Multisitios",
    estado: "consistente",
    porcentaje: 100
  },
])

db.weblogicserversmulmonprd.insert(
  [{
    fecha: new Date(),
    _id: "AdminServer",
    nombre: "AdminServer",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "App-01",
    nombre: "App-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "App-02",
    nombre: "App-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Aux-03",
    nombre: "Aux-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Bot-MS",
    nombre: "Bot-MS",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Csc-01",
    nombre: "Csc-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Proxy-01",
    nombre: "Proxy-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store01-eCommerce-Multisitios-Drp",
    nombre: "Store-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store02-eCommerce-Multisitios-Drp",
    nombre: "Store-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "ManagedServer-Store03-eCommerce-Multisitios-Drp",
    nombre: "Store-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-04",
    nombre: "Store-04",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-05",
    nombre: "Store-05",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-06",
    nombre: "Store-06",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-07",
    nombre: "Store-07",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-08",
    nombre: "Store-08",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-09",
    nombre: "Store-09",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-10",
    nombre: "Store-10",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-11",
    nombre: "Store-11",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-12",
    nombre: "Store-12",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-13",
    nombre: "Store-13",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-14",
    nombre: "Store-14",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-15",
    nombre: "Store-15",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-16",
    nombre: "Store-16",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-17",
    nombre: "Store-17",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-18",
    nombre: "Store-18",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-19",
    nombre: "Store-19",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-20",
    nombre: "Store-20",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-21",
    nombre: "Store-21",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-22",
    nombre: "Store-22",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-23",
    nombre: "Store-23",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-24",
    nombre: "Store-24",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-25",
    nombre: "Store-25",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-26",
    nombre: "Store-26",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-27",
    nombre: "Store-27",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-28",
    nombre: "Store-28",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-29",
    nombre: "Store-29",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-01",
    nombre: "Store-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-02",
    nombre: "Store-02",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-03",
    nombre: "Store-03",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-04",
    nombre: "Store-04",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-05",
    nombre: "Store-05",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-MS-previwe",
    nombre: "Store-MS-preview",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Store-preview",
    nombre: "Store-preview",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Ws-01",
    nombre: "ws-01",
    estado: "RUNNING"
  },
  {
    fecha: new Date(),
    _id: "Ws-02",
    nombre: "ws-02",
    estado: "RUNNING"
  }
])

db.endecamulmonprd.insert(
  [
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea09(172.17.212.139)",nombre: "mtyexapea09(172.17.212.139)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea09(172.17.212.139)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea09(172.17.212.139)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea09(172.17.212.139)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea11(172.16.212.156)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea11(172.16.212.156)"}
    ,
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea10(172.17.212.140)",nombre: "mtyexapea10(172.17.212.140)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea10(172.17.212.140)-Servicio-ITL",nombre: "ITL",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea10(172.17.212.140)-Servicio-ITL-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea10(172.17.212.140)-Servicio-ITL-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea10(172.16.212.155)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea10(172.16.212.155)"}
    ,
    {fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea12(172.17.212.130)",nombre: "mtyexapea12(172.17.212.130)",servicios: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea12(172.17.212.130)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea12(172.17.212.130)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMultisitiosServidores-mtyexapea12(172.17.212.130)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea12(172.16.212.157)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea12(172.16.212.157)"}
  ])

db.originmulmonprd.insert(
  [
    {
      fecha: new Date(),
      _id: "OriginMultisitios",
      nombre: "Origin",
      origins: [
        {
          fecha: new Date(),
          _id: "OriginMultisitios-OrigenA",
          nombre: "OrigenA",
          estado: "consistente",
          porcentaje: 100,
        },
      ],
      estado: "consistente",
      porcentaje: 100
    }
  ]
)
db.otdmulmonprd.insert(
  [{
      fecha: new Date(),
      _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)",
      nombre: "mtyexapot13(172.17.212.194)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot13(172.16.212.35)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot13(172.16.212.35)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot13(172.16.212.35)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot13(172.17.212.194)-Servicio-SBCreditApp-Componente-AdminUrl",
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
      _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)",
      nombre: "mtyexapot14(172.17.212.195)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot14(172.16.212.36)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot14(172.16.212.36)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot14(172.16.212.36)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot14(172.17.212.195)-Servicio-SBCreditApp-Componente-AdminUrl",
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
      _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)",
      nombre: "mtyexapot15(172.17.212.196)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot15(172.16.212.37)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot15(172.16.212.37)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot15(172.16.212.37)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot15(172.17.212.196)-Servicio-SBCreditApp-Componente-AdminUrl",
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
      _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)",
      nombre: "mtyexapot16(172.17.212.197)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot16(172.16.212.38)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS",
          nombre: "SBNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot16(172.16.212.38)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp",
          nombre: "SBCreditApp",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot16(172.16.212.38)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMultisitiosServidores-mtyexapot16(172.17.212.197)-Servicio-SBCreditApp-Componente-AdminUrl",
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