<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Servidores Web Logic Multisitios">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="weblogicserversmulmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicserversmulmonprd">
                    <b-badge :variant="getBadge(weblogicserversmulmonprd.item.estado)" >{{formatEstado(weblogicserversmulmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="weblogicserversmulmonprd">
                    {{formatDate(weblogicserversmulmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="weblogicserversmulmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicserversmulmondrp">
                    <b-badge :variant="getBadge(weblogicserversmulmondrp.item.estado)" >{{formatEstado(weblogicserversmulmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="weblogicserversmulmondrp">
                    {{formatDate(weblogicserversmulmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>             
                </b-table>
              </b-col>
            </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import axios from "axios";
const miliseconds = 60000;

export default {

  name: "WebLogicServersMultisitios",

  data: function() {
    return {
      rootmonprd: [],
      weblogicserversmulmondrp: [],
      weblogicserversmulmonprd: [],
      timer: [],
      loading: false,
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        'Fecha Consulta',
      ]
    };
  },
  
  methods: {


    formatDate(value) {
      var str = "";
      if (typeof value == "undefined") {
        //value = new Date()
        return ""
      }
      var options = { hour12: false };
      var now = new Date(value);

      str = now.toLocaleString("es-mx", options);

      return str;
    },

    formatEstado(value) {

      return value === "no existe" ? value + " en WebLogic":
             value === "SHUTDOWN"  ? "Abajo":
             value === "RUNNING"   ? "Arriba" : value ;
    },

    loadData: function() {
      this.loading = true;
      this.fechaConsulta = new Date();
      
      // this.allLots = json1;

      /* axios.get('http://localhost:9001/rootmondrp')
      .then(response => {
         this.loading = false;
         // JSON responses are automatically parsed.
         this.rootmondrp1 = response.data;
      })
      .catch(e => {
        this.loading = false;
        this.errors.push(e)
      }) */

      axios
        .get("http://localhost:9001/weblogicserversmulmondrp")
        .then(
          function(response) {
            this.loading = false;
            this.weblogicserversmulmondrp = response.data;
            this.items = response.data;
          }.bind(this)
        )
        .catch(e => {
          this.loading = false;
        });

      axios
        .get("http://localhost:9001/weblogicserversmulmonprd")
        .then(
          function(response) {
            this.loading = false;
            this.weblogicserversmulmonprd = response.data;
          }.bind(this)
        )
        .catch(e => {
          this.loading = false;
        });
    },

    getBadge(status) {
      return status === "RUNNING"   ? "success": 
             status === "SHUTDOWN"  ? "warning": 
             status === "Pending"   ? "warning": 
             status === "no existe" ? "danger" : 
                                      "primary";
    }
  },
  created() {
    this.loadData();

    setInterval(
      function() {
        this.loadData();
      }.bind(this),
      miliseconds
    );
  },
  ready() {}
};
</script>

<style>
  /* IE fix */
  #card-chart-01,
  #card-chart-02 
  {
    width: 100% !important; 
  }
</style>
