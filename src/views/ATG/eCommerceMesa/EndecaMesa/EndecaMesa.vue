<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Mesa">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="endecamesmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecamesmonprd">
                    <b-badge :variant="getBadge(endecamesmonprd.item.estado)" >{{formatEstado(endecamesmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="endecamesmonprd">
                    {{formatDate(endecamesmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="endecamesmonprd">
                    {{formatPercentage(endecamesmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="endecamesmonprd">
                    <a v-if="endecamesmonprd.item.estado=='incosistente'  || endecamesmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServices-' + endecamesmonprd.item.nombre + '_prd'" >  {{endecamesmonprd.item.nombre}} </a>
                    <a v-else>  {{endecamesmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="endecamesmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecamesmondrp">
                    <b-badge :variant="getBadge(endecamesmondrp.item.estado)" >{{formatEstado(endecamesmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecamesmondrp">
                    {{formatDate(endecamesmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="endecamesmondrp">
                    {{formatPercentage(endecamesmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecamesmondrp">
                    <a v-if="endecamesmondrp.item.estado=='incosistente'  || endecamesmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServices-' + endecamesmondrp.item.nombre + '_drp'">  {{endecamesmondrp.item.nombre}} </a>
                    <a v-else>  {{endecamesmondrp.item.nombre}} </a>
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
  name: 'EndecaMesa',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      endecamesmondrp: [],
      endecamesmonprd: [],
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

      return value === "incosistente" ? "inconsistente":
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

     axios.get('http://localhost:9001/endecamesmondrp')
     .then(function (response) {
       this.loading = false;
       this.endecamesmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/endecamesmonprd')
     .then(function (response) {
       this.loading = false;
       this.endecamesmonprd= response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

    },

    getBadge(status) {
      return status === "consistente"   ? "success": 
             status === "SHUTDOWN"  ? "warning": 
             status === "desconocido"   ? "danger": 
             status === "incosistente" ? "danger" : 
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
