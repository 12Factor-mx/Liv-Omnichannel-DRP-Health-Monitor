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
                <b-table :items="weblogicserverslmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicserverslmonprd">
                    <b-badge :variant="getBadge(weblogicserverslmonprd.item.estado)" >{{formatEstado(weblogicserverslmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="weblogicserverslmonprd">
                    {{formatDate(weblogicserverslmonprd.item.fecha)}}
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
                <b-table  :items="weblogicserverslmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicserverslmondrp">
                    <b-badge :variant="getBadge(weblogicserverslmondrp.item.estado)" >{{formatEstado(weblogicserverslmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="weblogicserverslmondrp">
                    {{formatDate(weblogicserverslmondrp.item.fecha)}}
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
      weblogicserverslmondrp: [],
      weblogicserverslmonprd: [],
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
        .get("http://localhost:9001/weblogicserverslmondrp")
        .then(
          function(response) {
            this.loading = false;
            this.weblogicserverslmondrp = response.data;
            this.items = response.data;
          }.bind(this)
        )
        .catch(e => {
          this.loading = false;
        });

      axios
        .get("http://localhost:9001/weblogicserverslmonprd")
        .then(
          function(response) {
            this.loading = false;
            this.weblogicserverslmonprd = response.data;
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
