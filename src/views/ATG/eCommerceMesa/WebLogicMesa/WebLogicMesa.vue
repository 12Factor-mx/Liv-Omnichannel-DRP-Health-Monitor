<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Weblogic Mesa">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="weblogicmesmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicmesmonprd">
                    <b-badge :variant="getBadge(weblogicmesmonprd.item.estado)" >{{formatEstado(weblogicmesmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="weblogicmesmonprd">
                    {{formatDate(weblogicmesmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="weblogicmesmonprd">
                    {{formatPercentage(weblogicmesmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="weblogicmesmonprd">
                    <a v-if="weblogicmesmonprd.item.estado=='inconsistente'  || weblogicmesmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + weblogicmesmonprd.item._id">  {{weblogicmesmonprd.item.nombre}} </a>
                    <a v-else>  {{weblogicmesmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="weblogicmesmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicmesmondrp">
                    <b-badge :variant="getBadge(weblogicmesmondrp.item.estado)" >{{formatEstado(weblogicmesmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="weblogicmesmondrp">
                    {{formatDate(weblogicmesmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="weblogicmesmondrp">
                    {{formatPercentage(weblogicmesmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="weblogicmesmondrp">
                    <a v-if="weblogicmesmondrp.item.estado=='inconsistente'  || weblogicmesmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + weblogicmesmondrp.item._id">  {{weblogicmesmondrp.item.nombre}} </a>
                    <a v-else>  {{weblogicmesmondrp.item.nombre}} </a>
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

//import json1 from '../json/data.json'
import axios from 'axios'; 

const miliseconds = 10000;


export default {
  name: 'WebLogicMesa',
  
  data: function () {
    return {  

      rootmonprd: [],
      weblogicmesmondrp: [],
      weblogicmesmonprd: [],
      timer: [],
      loading: false,
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        { key: "porcentaje", label: "% Consistencia" },
        'Fecha Consulta',
      ]
   } 
  },

  methods: {
    
    formatPercentage(value) {

      var ret= value;

       if (typeof ret == "undefined") {
        //value = new Date()
        ret = 0;
      }

      ret = Math.round(ret * 100) / 100

       return ret + " %";
    },


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

      return value === "inconsistente" ? "inconsistente":
             value === "desconocido"  ? "desconocido":
             value === "consistente"   ? "consistente" : value ;
    },

    loadData: function () {

      this.fechaConsulta = new Date();
      this.loading = true;

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

     axios.get('http://localhost:9001/weblogicmesmondrp')
     .then(function (response) {
       this.loading = false;
       this.weblogicmesmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/weblogicmesmonprd')
     .then(function (response) {
       this.loading = false;
       this.weblogicmesmonprd= response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

    },

    getBadge(status) {
      return status === "consistente"   ? "success": 
             status === "SHUTDOWN"  ? "warning": 
             status === "desconocido"   ? "danger": 
             status === "inconsistente" ? "danger" : 
                                      "primary";
    }

  },
  created(){

    this.loadData();

    setInterval(function () {
      this.loadData();
      
    }.bind(this), miliseconds); 
    
  },
   ready(){
  }


}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
