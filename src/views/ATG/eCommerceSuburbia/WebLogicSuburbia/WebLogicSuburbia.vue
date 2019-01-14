<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Weblogic Suburbia">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="weblogicsubmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicsubmonprd">
                    <b-badge :variant="getBadge(weblogicsubmonprd.item.estado)" >{{formatEstado(weblogicsubmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="weblogicsubmonprd">
                    {{formatDate(weblogicsubmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="weblogicsubmonprd">
                    {{formatPercentage(weblogicsubmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="weblogicsubmonprd">
                    <a v-if="weblogicsubmonprd.item.estado=='inconsistente'  || weblogicsubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + weblogicsubmonprd.item._id">  {{weblogicsubmonprd.item.nombre}} </a>
                    <a v-else>  {{weblogicsubmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="weblogicsubmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogicsubmondrp">
                    <b-badge :variant="getBadge(weblogicsubmondrp.item.estado)" >{{formatEstado(weblogicsubmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="weblogicsubmondrp">
                    {{formatDate(weblogicsubmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="weblogicsubmondrp">
                    {{formatPercentage(weblogicsubmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="weblogicsubmondrp">
                    <a v-if="weblogicsubmondrp.item.estado=='inconsistente'  || weblogicsubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + weblogicsubmondrp.item._id">  {{weblogicsubmondrp.item.nombre}} </a>
                    <a v-else>  {{weblogicsubmondrp.item.nombre}} </a>
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
  name: 'WebLogicSuburbia',
  
  data: function () {
    return {  

      rootmonprd: [],
      weblogicsubmondrp: [],
      weblogicsubmonprd: [],
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

     axios.get('http://localhost:9001/weblogicsubmondrp')
     .then(function (response) {
       this.loading = false;
       this.weblogicsubmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/weblogicsubmonprd')
     .then(function (response) {
       this.loading = false;
       this.weblogicsubmonprd= response.data;
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
