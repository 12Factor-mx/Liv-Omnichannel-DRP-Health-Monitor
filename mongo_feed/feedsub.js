//--- Drp -----------------------------------------------Juan

db.ecommercesubmondrp.drop()
db.weblogicsubmondrp.drop()
db.weblogicserverssubmondrp.drop()
db.endecasubmondrp.drop()
db.originsubmondrp.drop()

db.ecommercesubmondrp.insert([{
    fecha: new Date(),
    _id: "WebLogicSuburbia",
    nombre: "WebLogic Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "OriginSuburbia",
    nombre: "Origenes Suburbia",
    estado: "consistente"
},
  {
    fecha: new Date(),
    _id: "HardwareSuburbia",
    nombre: "Hardware Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "DatabaseSuburbia",
    nombre: "Database Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "EndecaSuburbia",
    nombre: "Endeca Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "OTDSuburbia",
    nombre: "OTD Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerSuburbia",
    nombre: "LoadBalancer Suburbia",
    estado: "consistente"
  }
])

db.weblogicsubmondrp.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicDomainSuburbia",
    nombre: "WebLogic Domain Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicServersSuburbia",
    nombre: "WebLogic Servers Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicMachinesSuburbia",
    nombre: "WebLogic Machines Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicClusterSuburbia",
    nombre: "WebLogic Cluster Suburbia",
    estado: "consistente"
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

db.endecasubmondrp.insert(
  [{
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-qroexahea16",
      nombre: "qroexahea16",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea16"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea16-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea16"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapea16"
    },

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-qroexahea17",
      nombre: "qroexahea17",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea17"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea17-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea17"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapea17"
    }

    ,

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-qroexahea18",
      nombre: "qroexahea18",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea18"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea18-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea18"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapea18"
    }

    ,

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-qroexahea19",
      nombre: "qroexahea19",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-XM",
        nombre: "XM",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-XM-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-XM-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-CAS",
        nombre: "CAS",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-CAS-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-CAS-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-EACAdmin",
        nombre: "EACAdmin",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-EACAdmin-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-EACAdmin-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-AuthorMDEX",
        nombre: "AuthorMDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-AuthorMDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-qroexahea19-Servicio-AuthorMDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "mtyexapea19"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "mtyexapea19"
    }


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


//--- Prd ------------------------------------------------

db.ecommercesubmonprd.drop()
db.weblogicsubmonprd.drop()
db.weblogicserverssubmonprd.drop()
db.endecasubmonprd.drop()
db.originsubmonprd.drop()

db.ecommercesubmonprd.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicSuburbia",
    nombre: "WebLogic Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "OriginSuburbia",
    nombre: "Origenes Suburbia",
    estado: "consistente"
},
  {
    fecha: new Date(),
    _id: "HardwareSuburbia",
    nombre: "Hardware Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "DatabaseSuburbia",
    nombre: "Database Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "EndecaSuburbia",
    nombre: "Endeca Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "OTDSuburbia",
    nombre: "OTD Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "LoadBalancerSuburbia",
    nombre: "LoadBalancer Suburbia",
    estado: "consistente"
  }
])

db.weblogicsubmonprd.insert(
  [{
    fecha: new Date(),
    _id: "WebLogicDomainSuburbia",
    nombre: "WebLogic Domain Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicServersSuburbia",
    nombre: "WebLogic Servers Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicMachinesSuburbia",
    nombre: "WebLogic Machines Suburbia",
    estado: "consistente"
  },
  {
    fecha: new Date(),
    _id: "WebLogicClusterSuburbia",
    nombre: "WebLogic Cluster Suburbia",
    estado: "consistente"
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

db.endecasubmonprd.insert(
  [

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-mtyexapea16",
      nombre: "mtyexapea16",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea16"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea16-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea16"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahea16"
    },

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-mtyexapea17",
      nombre: "mtyexapea17",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea17"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea17-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea17"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahea17"
    }

    ,


    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-mtyexapea18",
      nombre: "mtyexapea18",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-MDEX",
        nombre: "MDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-MDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-MDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea18"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-EACAgent",
        nombre: "EACAgent",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-EACAgent-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea18-Servicio-EACAgent-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea18"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahea18"
    }

    ,

    {
      fecha: new Date(),
      _id: "eCommerceSuburbiaServidores-mtyexapea19",
      nombre: "mtyexapea19",
      servicios: [{
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-XM",
        nombre: "XM",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-XM-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-XM-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-CAS",
        nombre: "CAS",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-CAS-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-CAS-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-EACAdmin",
        nombre: "EACAdmin",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-EACAdmin-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-EACAdmin-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea19"
      }, {
        fecha: new Date(),
        _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-AuthorMDEX",
        nombre: "AuthorMDEX",
        estado: "consistente",
        porcentaje: 100,
        componentes: [{
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-AuthorMDEX-Componente-Log",
          nombre: "Log",
          estado: "consistente",
          porcentaje: 100
        }, {
          fecha: new Date(),
          _id: "eCommerceSuburbiaServidores-mtyexapea19-Servicio-AuthorMDEX-Componente-Port",
          nombre: "Port",
          estado: "consistente",
          porcentaje: 100
        }],
        espejo: "qroexahea19"
      }, ],
      estado: "consistente",
      porcentaje: 100,
      espejo: "qroexahea19"
    }


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