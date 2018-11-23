<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Suburbia">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="endecasubmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecasubmonprd">
                    <b-badge :variant="getBadge(endecasubmonprd.item.estado)" >{{formatEstado(endecasubmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="endecasubmonprd">
                    {{formatDate(endecasubmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="endecasubmonprd">
                    {{formatPercentage(endecasubmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="endecasubmonprd">
                    <a v-if="endecasubmonprd.item.estado=='inconsistente'  || endecasubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaSuburbiaServices-' + endecasubmonprd.item.nombre + '_prd'" >  {{endecasubmonprd.item.nombre}} </a>
                    <a v-else>  {{endecasubmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="endecasubmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecasubmondrp">
                    <b-badge :variant="getBadge(endecasubmondrp.item.estado)" >{{formatEstado(endecasubmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecasubmondrp">
                    {{formatDate(endecasubmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="endecasubmondrp">
                    {{formatPercentage(endecasubmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecasubmondrp">
                    <a v-if="endecasubmondrp.item.estado=='inconsistente'  || endecasubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaSuburbiaServices-' + endecasubmondrp.item.nombre + '_drp'">  {{endecasubmondrp.item.nombre}} </a>
                    <a v-else>  {{endecasubmondrp.item.nombre}} </a>
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
  name: 'EndecaSuburbia',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      endecasubmondrp: [],
      endecasubmonprd: [],
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

     axios.get('http://localhost:9001/endecasubmondrp')
     .then(function (response) {
       this.loading = false;
       this.endecasubmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/endecasubmonprd')
     .then(function (response) {
       this.loading = false;
       this.endecasubmonprd= response.data;
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
