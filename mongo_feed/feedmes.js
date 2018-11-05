//--- Drp -----------------------------------------------Juan

db.ecommercemesmondrp.drop()
db.weblogicmesmondrp.drop()
db.weblogicserversmesmondrp.drop()
db.endecamesmondrp.drop()

db.ecommercemesmondrp.insert([
    {
        _id: "WebLogicMesa",
        nombre: "WebLogic Mesa",
        estado: "consistente"
    },
    {
        _id: "HardwareMesa",
        nombre: "Hardware Mesa",
        estado: "consistente"
    },
    {
        _id: "DatabaseMesa",
        nombre: "Database Mesa",
        estado: "consistente"
    },
    {
        _id: "EndecaMesa",
        nombre: "Endeca Mesa",
        estado: "consistente"
    },
    {
        _id: "OTDMesa",
        nombre: "OTD Mesa",
        estado: "consistente"
    },
    {
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer Mesa",
        estado: "consistente"
    }
])
db.weblogicmesmondrp.insert([
    {
        _id: "WebLogicDomainMesa",
        nombre: "WebLogic Domain Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicServersMesa",
        nombre: "WebLogic Servers Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicMachinesMesa",
        nombre: "WebLogic Machines Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicClusterMesa",
        nombre: "WebLogic Cluster Mesa",
        estado: "consistente"
    },
])
db.weblogicserversmesmondrp.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "RUNNING"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "RUNNING"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "RUNNING"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "RUNNING"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "RUNNING"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "RUNNING"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Drp",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Drp",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Drp",
        nombre: "Store-03",
        estado: "RUNNING"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "RUNNING"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "RUNNING"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "RUNNING"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "RUNNING"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "RUNNING"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "RUNNING"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "RUNNING"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "RUNNING"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "RUNNING"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "RUNNING"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "RUNNING"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "RUNNING"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "RUNNING"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "RUNNING"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "RUNNING"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "RUNNING"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "RUNNING"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "RUNNING"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "RUNNING"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "RUNNING"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "RUNNING"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "RUNNING"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "RUNNING"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "RUNNING"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "RUNNING"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "RUNNING"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "RUNNING"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "RUNNING"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "RUNNING"
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
                _id: "Plataform",
                nombre: "Plataform service",
                estado: "consistente",
                procentaje: 100,
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
                _id: "Plataform",
                nombre: "Plataform service",
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
        nombre: "WebLogic Mesa",
        estado: "consistente"
    },
    {
        _id: "HardwareMesa",
        nombre: "Hardware Mesa",
        estado: "consistente"
    },
    {
        _id: "DatabaseMesa",
        nombre: "Database Mesa",
        estado: "consistente"
    },
    {
        _id: "EndecaMesa",
        nombre: "Endeca Mesa",
        estado: "consistente"
    },
    {
        _id: "OTDMesa",
        nombre: "OTD Mesa",
        estado: "consistente"
    },
    {
        _id: "LoadBalancerMesa",
        nombre: "LoadBalancer Mesa",
        estado: "consistente"
    }
])
db.weblogicmesmonprd.insert([
    {
        _id: "WebLogicDomainMesa",
        nombre: "WebLogic Domain Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicServersMesa",
        nombre: "WebLogic Servers Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicMachinesMesa",
        nombre: "WebLogic Machines Mesa",
        estado: "consistente"
    },
    {
        _id: "WebLogicClusterMesa",
        nombre: "WebLogic Cluster Mesa",
        estado: "consistente"
    },
])
db.weblogicserversmesmonprd.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "RUNNING"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "RUNNING"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "RUNNING"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "RUNNING"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "RUNNING"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "RUNNING"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Prd",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Prd",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Prd",
        nombre: "Store-03",
        estado: "RUNNING"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "RUNNING"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "RUNNING"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "RUNNING"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "RUNNING"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "RUNNING"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "RUNNING"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "RUNNING"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "RUNNING"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "RUNNING"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "RUNNING"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "RUNNING"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "RUNNING"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "RUNNING"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "RUNNING"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "RUNNING"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "RUNNING"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "RUNNING"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "RUNNING"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "RUNNING"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "RUNNING"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "RUNNING"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "RUNNING"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "RUNNING"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "RUNNING"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "RUNNING"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "RUNNING"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "RUNNING"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "RUNNING"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "RUNNING"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "RUNNING"
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
            {   _id: "Plataform", 
                nombre: "Plataform service", 
                estado: "consistente", 
                procentaje: 100,
                componentes: [
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
            {   _id: "Plataform", 
                nombre: "Plataform service", 
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
