//--- Drp -----------------------------------------------Juan

db.ecommercesubmondrp.drop()
db.weblogicsubmondrp.drop()
db.weblogicserverssubmondrp.drop()
db.endecasubmondrp.drop()

db.ecommercesubmondrp.insert([
    {
        _id: "WebLogic",
        nombre: "WebLogic",
        estado: "desconocido"
    },
    {
        _id: "Hardware",
        nombre: "Hardware",
        estado: "desconocido"
    },
    {
        _id: "Database",
        nombre: "Database",
        estado: "desconocido"
    },
    {
        _id: "Endeca",
        nombre: "Endeca",
        estado: "consistente"
    },
    {
        _id: "OTD",
        nombre: "OTD",
        estado: "desconocido"
    },
    {
        _id: "LoadBalancer",
        nombre: "LoadBalancer",
        estado: "desconocido"
    }
])
db.weblogicsubmondrp.insert([
    {
        _id: "Domain",
        nombre: "Domain",
        estado: "desconocido"
    },
    {
        _id: "Servers",
        nombre: "Servers",
        estado: "desconocido"
    },
    {
        _id: "Machines",
        nombre: "Machines",
        estado: "desconocido"
    },
    {
        _id: "Cluster",
        nombre: "Cluster",
        estado: "desconocido"
    },
])
db.weblogicserverssubmondrp.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "no existe"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "no existe"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "no existe"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "no existe"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "no existe"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "no existe"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Drp",
        nombre: "Store-01",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Drp",
        nombre: "Store-02",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Drp",
        nombre: "Store-03",
        estado: "no existe"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "no existe"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "no existe"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "no existe"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "no existe"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "no existe"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "no existe"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "no existe"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "no existe"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "no existe"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "no existe"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "no existe"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "no existe"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "no existe"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "no existe"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "no existe"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "no existe"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "no existe"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "no existe"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "no existe"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "no existe"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "no existe"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "no existe"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "no existe"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "no existe"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "no existe"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "no existe"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "no existe"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "no existe"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "no existe"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "no existe"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "no existe"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "no existe"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "no existe"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "no existe"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "no existe"
    }
])
db.endecasubmondrp.insert([
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

db.ecommercesubmonprd.drop()
db.weblogicsubmonprd.drop()
db.weblogicserverssubmonprd.drop()
db.endecasubmonprd.drop()

db.ecommercesubmonprd.insert([
    {
        _id: "WebLogic",
        nombre: "WebLogic",
        estado: "desconocido"
    },
    {
        _id: "Hardware",
        nombre: "Hardware",
        estado: "desconocido"
    },
    {
        _id: "Database",
        nombre: "Database",
        estado: "desconocido"
    },
    {
        _id: "Endeca",
        nombre: "Endeca",
        estado: "consistente"
    },
    {
        _id: "OTD",
        nombre: "OTD",
        estado: "desconocido"
    },
    {
        _id: "LoadBalancer",
        nombre: "LoadBalancer",
        estado: "desconocido"
    }
])
db.weblogicsubmonprd.insert([
    {
        _id: "Domain",
        nombre: "Domain",
        estado: "desconocido"
    },
    {
        _id: "Servers",
        nombre: "Servers",
        estado: "desconocido"
    },
    {
        _id: "Machines",
        nombre: "Machines",
        estado: "desconocido"
    },
    {
        _id: "Cluster",
        nombre: "Cluster",
        estado: "desconocido"
    },
])
db.weblogicserverssubmonprd.insert([
    {
        _id: "AdminServer",
        nombre: "AdminServer",
        estado: "no existe"
    },
    {
        _id: "App-01",
        nombre: "App-01",
        estado: "no existe"
    },
    {
        _id: "App-02",
        nombre: "App-02",
        estado: "no existe"
    },
    {
        _id: "Aux-03",
        nombre: "Aux-03",
        estado: "no existe"
    },
    {
        _id: "Bot-MS",
        nombre: "Bot-MS",
        estado: "no existe"
    },
    {
        _id: "Csc-01",
        nombre: "Csc-01",
        estado: "no existe"
    },
    {
        _id: "Proxy-01",
        nombre: "Proxy-01",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store01-eCommerce-liverpool-Prd",
        nombre: "Store-01",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store02-eCommerce-liverpool-Prd",
        nombre: "Store-02",
        estado: "no existe"
    },
    {
        _id: "ManagedServer-Store03-eCommerce-liverpool-Prd",
        nombre: "Store-03",
        estado: "no existe"
    },
    {
        _id: "Store-04",
        nombre: "Store-04",
        estado: "no existe"
    },
    {
        _id: "Store-05",
        nombre: "Store-05",
        estado: "no existe"
    },
    {
        _id: "Store-06",
        nombre: "Store-06",
        estado: "no existe"
    },
    {
        _id: "Store-07",
        nombre: "Store-07",
        estado: "no existe"
    },
    {
        _id: "Store-08",
        nombre: "Store-08",
        estado: "no existe"
    },
    {
        _id: "Store-09",
        nombre: "Store-09",
        estado: "no existe"
    },
    {
        _id: "Store-10",
        nombre: "Store-10",
        estado: "no existe"
    },
    {
        _id: "Store-11",
        nombre: "Store-11",
        estado: "no existe"
    },
    {
        _id: "Store-12",
        nombre: "Store-12",
        estado: "no existe"
    },
    {
        _id: "Store-13",
        nombre: "Store-13",
        estado: "no existe"
    },
    {
        _id: "Store-14",
        nombre: "Store-14",
        estado: "no existe"
    },
    {
        _id: "Store-15",
        nombre: "Store-15",
        estado: "no existe"
    },
    {
        _id: "Store-16",
        nombre: "Store-16",
        estado: "no existe"
    },
    {
        _id: "Store-17",
        nombre: "Store-17",
        estado: "no existe"
    },
    {
        _id: "Store-18",
        nombre: "Store-18",
        estado: "no existe"
    },
    {
        _id: "Store-19",
        nombre: "Store-19",
        estado: "no existe"
    },
    {
        _id: "Store-20",
        nombre: "Store-20",
        estado: "no existe"
    },
    {
        _id: "Store-21",
        nombre: "Store-21",
        estado: "no existe"
    },
    {
        _id: "Store-22",
        nombre: "Store-22",
        estado: "no existe"
    },
    {
        _id: "Store-23",
        nombre: "Store-23",
        estado: "no existe"
    },
    {
        _id: "Store-24",
        nombre: "Store-24",
        estado: "no existe"
    },
    {
        _id: "Store-25",
        nombre: "Store-25",
        estado: "no existe"
    },
    {
        _id: "Store-26",
        nombre: "Store-26",
        estado: "no existe"
    },
    {
        _id: "Store-27",
        nombre: "Store-27",
        estado: "no existe"
    },
    {
        _id: "Store-28",
        nombre: "Store-28",
        estado: "no existe"
    },
    {
        _id: "Store-29",
        nombre: "Store-29",
        estado: "no existe"
    },
    {
        _id: "Store-MS-01",
        nombre: "Store-01",
        estado: "no existe"
    },
    {
        _id: "Store-MS-02",
        nombre: "Store-02",
        estado: "no existe"
    },
    {
        _id: "Store-MS-03",
        nombre: "Store-03",
        estado: "no existe"
    },
    {
        _id: "Store-MS-04",
        nombre: "Store-04",
        estado: "no existe"
    },
    {
        _id: "Store-MS-05",
        nombre: "Store-05",
        estado: "no existe"
    },
    {
        _id: "Store-MS-previwe",
        nombre: "Store-MS-preview",
        estado: "no existe"
    },
    {
        _id: "Store-preview",
        nombre: "Store-preview",
        estado: "no existe"
    },
    {
        _id: "Ws-01",
        nombre: "ws-01",
        estado: "no existe"
    },
    {
        _id: "Ws-02",
        nombre: "ws-02",
        estado: "no existe"
    }
])
db.endecasubmonprd.insert([
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
