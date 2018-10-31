//--- Drp -----------------------------------------------Juan

db.ecommercemesmondrp.drop()
db.weblogicmesmondrp.drop()
db.weblogicserversmesmondrp.drop()
db.endecamesmondrp.drop()

db.ecommercemesmondrp.insert([
    {
        _id: "WebLogicMesa",
        nombre: "WebLogic",
        estado: "consistente"
    },
    {
        _id: "HardwareMesa",
        nombre: "Hardware",
        estado: "consistente"
    },
    {
        _id: "DatabaseMesa",
        nombre: "Database",
        estado: "consistente"
    },
    {
        _id: "EndecaMesa",
        nombre: "Endeca",
        estado: "consistente"
    },
    {
        _id: "OTDMesa",
        nombre: "OTD",
        estado: "consistente"
    },
    {
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer",
        estado: "consistente"
    }
])
db.weblogicmesmondrp.insert([
    {
        _id: "WebLogicDomainMesa",
        nombre: "Domain",
        estado: "consistente"
    },
    {
        _id: "WebLogicServersMesa",
        nombre: "Servers",
        estado: "consistente"
    },
    {
        _id: "WebLogicMachinesMesa",
        nombre: "Machines",
        estado: "consistente"
    },
    {
        _id: "WebLogicClusterMesa",
        nombre: "Cluster",
        estado: "consistente"
    },
])
db.weblogicserversmesmondrp.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "consistente"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "consistente"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "consistente"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "consistente"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "consistente"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "consistente"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Drp",
        nombre: "Store-01",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Drp",
        nombre: "Store-02",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Drp",
        nombre: "Store-03",
        estado: "consistente"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "consistente"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "consistente"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "consistente"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "consistente"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "consistente"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "consistente"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "consistente"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "consistente"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "consistente"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "consistente"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "consistente"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "consistente"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "consistente"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "consistente"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "consistente"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "consistente"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "consistente"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "consistente"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "consistente"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "consistente"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "consistente"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "consistente"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "consistente"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "consistente"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "consistente"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "consistente"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "consistente"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "consistente"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "consistente"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "consistente"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "consistente"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "consistente"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "consistente"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "consistente"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "consistente"
    }
])
db.endecamesmondrp.insert([
    {
        _id: "Endeca1",
        nombre: "Endeca1",
        servicios: [
            {
                _id: "cas",
                nombre: "cas",
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
            {
                _id: "plataform",
                nombre: "plataform service",
                estado: "consistente",
                procentaje: 100,
                componetes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
            {
                _id: "tools",
                nombre: "tools & Framework",
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
        ],
        estado: "consistente",
        porcentaje: 100,
    },
    {
        _id: "ITL1",
        nombre: "ITL1",
        servicios: [
            {
                _id: "cas",
                nombre: "cas",
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
            {
                _id: "plataform",
                nombre: "plataform service",
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
            {
                _id: "tools",
                nombre: "tools & Framework",
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
        ],
        estado: "consistente",
        porcentaje: 100
    }])


//--- Prd ------------------------------------------------

db.ecommercemesmonprd.drop()
db.weblogicmesmonprd.drop()
db.weblogicserversmesmonprd.drop()
db.endecamesmonprd.drop()

db.ecommercemesmonprd.insert([
    {
        _id: "WebLogicMesa",
        nombre: "WebLogic",
        estado: "consistente"
    },
    {
        _id: "HardwareMesa",
        nombre: "Hardware",
        estado: "consistente"
    },
    {
        _id: "DatabaseMesa",
        nombre: "Database",
        estado: "consistente"
    },
    {
        _id: "EndecaMesa",
        nombre: "Endeca",
        estado: "consistente"
    },
    {
        _id: "OTDMesa",
        nombre: "OTD",
        estado: "consistente"
    },
    {
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer",
        estado: "consistente"
    }
])
db.weblogicmesmonprd.insert([
    {
        _id: "WebLogicDomainMesa",
        nombre: "Domain",
        estado: "consistente"
    },
    {
        _id: "WebLogicServersMesa",
        nombre: "Servers",
        estado: "consistente"
    },
    {
        _id: "WebLogicMachinesMesa",
        nombre: "Machines",
        estado: "consistente"
    },
    {
        _id: "WebLogicClusterMesa",
        nombre: "Cluster",
        estado: "consistente"
    },
])
db.weblogicserversmesmonprd.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "consistente"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "consistente"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "consistente"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "consistente"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "consistente"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "consistente"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Prd",
        nombre: "Store-01",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Prd",
        nombre: "Store-02",
        estado: "consistente"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Prd",
        nombre: "Store-03",
        estado: "consistente"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "consistente"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "consistente"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "consistente"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "consistente"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "consistente"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "consistente"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "consistente"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "consistente"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "consistente"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "consistente"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "consistente"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "consistente"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "consistente"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "consistente"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "consistente"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "consistente"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "consistente"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "consistente"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "consistente"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "consistente"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "consistente"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "consistente"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "consistente"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "consistente"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "consistente"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "consistente"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "consistente"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "consistente"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "consistente"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "consistente"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "consistente"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "consistente"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "consistente"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "consistente"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "consistente"
    }
])
db.endecamesmonprd.insert([
    {
        _id: "Endeca1",
        nombre: "Endeca1",
        servicios:[
            {   _id: "cas", 
                nombre: "cas", 
                estado: "consistente", 
                porcentaje: 100,
                componentes: [
                    {_id:"log",  nombre: "log", estado: "consistente" },
                    { id:"port", nombre: "port", estado: "consistente"}
            ]},
            {   _id: "plataform", 
                nombre: "plataform service", 
                estado: "consistente", 
                procentaje: 100,
                componetes: [
                    {_id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
            ]},
            {  _id: "tools", 
                nombre: "tools & Framework", 
                estado: "consistente", 
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
            ]},
        ],
        estado: "consistente",
        porcentaje: 100,
    },
    {
        _id: "ITL1",
        nombre: "ITL1",
        servicios: [
            {   _id: "cas", 
                nombre: "cas", 
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]},
            {   _id: "plataform", 
                nombre: "plataform service", 
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
            {   _id: "tools", 
                nombre: "tools & Framework", 
                estado: "consistente",
                porcentaje: 100,
                componentes: [
                    { _id: "log", nombre: "log", estado: "consistente" },
                    { id: "port", nombre: "port", estado: "consistente" }
                ]
            },
        ],
        estado: "consistente",
        porcentaje: 100
    }])
