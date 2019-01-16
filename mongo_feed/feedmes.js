//--- Drp -----------------------------------------------Juan

db.ecommercemesmondrp.drop()
db.weblogicmesmondrp.drop()
db.weblogicserversmesmondrp.drop()
db.endecamesmondrp.drop()
db.originmesmondrp.drop()
db.otdmesmondrp.drop()

db.ecommercemesmondrp.insert([
    {
        fecha: new Date(),
        _id: "WebLogicMesa",
        nombre: "WebLogic Mesa",
        estado: "consistente",
        porcentaje: 100

    },
    {
        fecha: new Date(),
        _id: "OriginMesa",
        nombre: "Origenes Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "HardwareMesa",
        nombre: "Hardware Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "DatabaseMesa",
        nombre: "Database Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "EndecaMesa",
        nombre: "Endeca Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "OTDMesa",
        nombre: "OTD Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer Mesa",
        estado: "consistente",
        porcentaje: 100
    }
])

db.weblogicmesmondrp.insert([
    {
        fecha: new Date(),
        _id: "WebLogicDomainMesa",
        nombre: "WebLogic Domain Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicServersMesa",
        nombre: "WebLogic Servers Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicMachinesMesa",
        nombre: "WebLogic Machines Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicClusterMesa",
        nombre: "WebLogic Cluster Mesa",
        estado: "consistente",
        porcentaje: 100
    },
])

db.weblogicserversmesmondrp.insert([
    {
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
        _id: "ManagedServer-Store01-eCommerce-liverpool-Drp",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        fecha: new Date(),
        _id: "ManagedServer-Store02-eCommerce-liverpool-Drp",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        fecha: new Date(),
        _id: "ManagedServer-Store03-eCommerce-liverpool-Drp",
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

db.endecamesmondrp.insert([
    {fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)",nombre: "qroexahea15(172.16.212.71)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-XM",nombre: "XM",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-XM-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-XM-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea13(172.17.212.171)"},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-CAS",nombre: "CAS",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-CAS-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-CAS-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea13(172.17.212.171)"},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-EACAdmin",nombre: "EACAdmin",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-EACAdmin-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-EACAdmin-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea13(172.17.212.171)"},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-AuthorMDEX",nombre: "AuthorMDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-AuthorMDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea15(172.16.212.71)-Servicio-AuthorMDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea13(172.17.212.171)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea13(172.17.212.171)"}
    ,        
    {fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)",nombre: "qroexahea14(172.16.212.70)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea15(172.17.212.170)"},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea14(172.16.212.70)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea15(172.17.212.170)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea15(172.17.212.170)"}
    ,
    {fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)",nombre: "qroexahea13(172.16.212.69)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea14(172.17.212.169)"},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-qroexahea13(172.16.212.69)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "mtyexapea14(172.17.212.169)"},],estado: "consistente",porcentaje: 100,espejo: "mtyexapea14(172.17.212.169)"}
])

db.originmesmondrp.insert(
    [
        {
            fecha: new Date(),
            _id: "OriginMesa",
            nombre: "Origin",
            origins: [
            {
                fecha: new Date(),
                _id: "OriginMesa-OrigenA",
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
db.otdmesmondrp.insert(
  [{
      fecha: new Date(),
      _id: "OtdMesaServidores-qroexahot09(172.16.212.72)",
      nombre: "qroexahot09(172.16.212.72)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot09(172.17.212.172)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-GRNodeJS",
          nombre: "GRNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot09(172.17.212.172)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-GRNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-GRNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-GRNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-CCNodeJS",
          nombre: "CCNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot09(172.17.212.172)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-CCNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-CCNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot09(172.16.212.72)-Servicio-CCNodeJS-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-qroexahot10(172.16.212.73)",
      nombre: "qroexahot10(172.16.212.73)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot10(172.17.212.173)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-GRNodeJS",
          nombre: "GRNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot10(172.17.212.173)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-GRNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-GRNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-GRNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-CCNodeJS",
          nombre: "CCNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot10(172.17.212.173)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-CCNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-CCNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot10(172.16.212.73)-Servicio-CCNodeJS-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-qroexahot11(172.16.212.74)",
      nombre: "qroexahot11(172.16.212.74)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot11(172.17.212.174)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GRATG",
          nombre: "GRATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot11(172.17.212.174)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GRATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GRATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GRATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-CCATG",
          nombre: "CCATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot11(172.17.212.174)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-CCATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-CCATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-CCATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GREndeca",
          nombre: "GREndeca",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot11(172.17.212.174)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GREndeca-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot11(172.16.212.74)-Servicio-GREndeca-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-qroexahot12(172.16.212.75)",
      nombre: "qroexahot12(172.16.212.75)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapot12(172.17.212.175)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GRATG",
          nombre: "GRATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot12(172.17.212.175)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GRATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GRATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GRATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-CCATG",
          nombre: "CCATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot12(172.17.212.175)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-CCATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-CCATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-CCATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GEEndeca",
          nombre: "GEEndeca",
          estado: "consistente",
          porcentaje: 100,
          espejo: "mtyexapot12(172.17.212.175)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GEEndeca-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-qroexahot12(172.16.212.75)-Servicio-GEEndeca-Componente-AdminUrl",
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

//--- Prd ------------------------------------------------

db.ecommercemesmonprd.drop()
db.weblogicmesmonprd.drop()
db.weblogicserversmesmonprd.drop()
db.endecamesmonprd.drop()
db.originmesmonprd.drop()
db.otdmesmonprd.drop()

db.ecommercemesmonprd.insert([
    {
        fecha: new Date(),
        _id: "WebLogicMesa",
        nombre: "WebLogic Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "OriginMesa",
        nombre: "Origenes Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "HardwareMesa",
        nombre: "Hardware Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "DatabaseMesa",
        nombre: "Database Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "EndecaMesa",
        nombre: "Endeca Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "OTDMesa",
        nombre: "OTD Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer Mesa",
        estado: "consistente",
        porcentaje: 100
    }
])

db.weblogicmesmonprd.insert([
    {
        fecha: new Date(),
        _id: "WebLogicDomainMesa",
        nombre: "WebLogic Domain Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicServersMesa",
        nombre: "WebLogic Servers Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicMachinesMesa",
        nombre: "WebLogic Machines Mesa",
        estado: "consistente",
        porcentaje: 100
    },
    {
        fecha: new Date(),
        _id: "WebLogicClusterMesa",
        nombre: "WebLogic Cluster Mesa",
        estado: "consistente",
        porcentaje: 100
    },
])

db.weblogicserversmesmonprd.insert([
    {
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
        _id: "ManagedServer-Store01-eCommerce-liverpool-Prd",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        fecha: new Date(),
        _id: "ManagedServer-Store02-eCommerce-liverpool-Prd",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        fecha: new Date(),
        _id: "ManagedServer-Store03-eCommerce-liverpool-Prd",
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

db.endecamesmonprd.insert([
    {fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)",nombre: "mtyexapea13(172.17.212.171)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-XM",nombre: "XM",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-XM-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-XM-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea15(172.16.212.71)"},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-CAS",nombre: "CAS",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-CAS-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-CAS-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea15(172.16.212.71)"},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-EACAdmin",nombre: "EACAdmin",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-EACAdmin-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-EACAdmin-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea15(172.16.212.71)"},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-AuthorMDEX",nombre: "AuthorMDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-AuthorMDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea13(172.17.212.171)-Servicio-AuthorMDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea15(172.16.212.71)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea15(172.16.212.71)"}
    ,
    {fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)",nombre: "mtyexapea15(172.17.212.170)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea14(172.16.212.70)"},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea15(172.17.212.170)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea14(172.16.212.70)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea14(172.16.212.70)"}
    ,
    {fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)",nombre: "mtyexapea14(172.17.212.169)",servicios: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-MDEX",nombre: "MDEX",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-MDEX-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-MDEX-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea13(172.16.212.69)"},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-EACAgent",nombre: "EACAgent",estado: "consistente",porcentaje: 100,componentes: [{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-EACAgent-Componente-Log", nombre: "Log", estado: "consistente", porcentaje: 100},{fecha: new Date(),_id: "eCommerceMesaServidores-mtyexapea14(172.17.212.169)-Servicio-EACAgent-Componente-Port", nombre: "Port", estado: "consistente", porcentaje: 100}],espejo: "qroexahea13(172.16.212.69)"},],estado: "consistente",porcentaje: 100,espejo: "qroexahea13(172.16.212.69)"}
])

db.originmesmonprd.insert([
        {
            fecha: new Date(),
            _id: "OriginMesa",
            nombre: "Origin",
            origins: [
                {
                    fecha: new Date(),
                    _id: "OriginMesa-OrigenA",
                    nombre: "OrigenA",
                    estado: "consistente",
                    porcentaje: 100,
                },
                ],
                estado: "consistente",
                porcentaje: 100
        }
])


db.otdmesmonprd.insert(
  [{
      fecha: new Date(),
      _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)",
      nombre: "mtyexapot09(172.17.212.172)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot09(172.16.212.72)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-GRNodeJS",
          nombre: "GRNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot09(172.16.212.72)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-GRNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-GRNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-GRNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-CCNodeJS",
          nombre: "CCNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot09(172.16.212.72)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-CCNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-CCNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot09(172.17.212.172)-Servicio-CCNodeJS-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)",
      nombre: "mtyexapot10(172.17.212.173)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot10(172.16.212.73)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-GRNodeJS",
          nombre: "GRNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot10(172.16.212.73)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-GRNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-GRNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-GRNodeJS-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-CCNodeJS",
          nombre: "CCNodeJS",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot10(172.16.212.73)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-CCNodeJS-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-CCNodeJS-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot10(172.17.212.173)-Servicio-CCNodeJS-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)",
      nombre: "mtyexapot11(172.17.212.174)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot11(172.16.212.74)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GRATG",
          nombre: "GRATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot11(172.16.212.74)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GRATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GRATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GRATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-CCATG",
          nombre: "CCATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot11(172.16.212.74)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-CCATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-CCATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-CCATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GREndeca",
          nombre: "GREndeca",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot11(172.16.212.74)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GREndeca-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot11(172.17.212.174)-Servicio-GREndeca-Componente-AdminUrl",
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
      _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)",
      nombre: "mtyexapot12(172.17.212.175)",
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahot12(172.16.212.75)",
      servicios: [{
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GRATG",
          nombre: "GRATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot12(172.16.212.75)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GRATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GRATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GRATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        },
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-CCATG",
          nombre: "CCATG",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot12(172.16.212.75)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-CCATG-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-CCATG-Componente-Https",
              nombre: "Https",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-CCATG-Componente-AdminUrl",
              nombre: "AdminUrl",
              estado: "consistente",
              porcentaje: 100
            }
          ]
        }, 
        {
          fecha: new Date(),
          _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GEEndeca",
          nombre: "GEEndeca",
          estado: "consistente",
          porcentaje: 100,
          espejo: "qroexahot12(172.16.212.75)",
          componentes: [{
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GEEndeca-Componente-Http",
              nombre: "Http",
              estado: "consistente",
              porcentaje: 100
            },
            {
              fecha: new Date(),
              _id: "OtdMesaServidores-mtyexapot12(172.17.212.175)-Servicio-GEEndeca-Componente-AdminUrl",
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