<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Weblogic Liverpool">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="ecommercelmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercelmonprd">
                    <b-badge :variant="getBadge(ecommercelmonprd.item.estado)" >{{formatEstado(ecommercelmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="ecommercelmonprd">
                    {{formatDate(ecommercelmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="ecommercelmonprd">
                    {{formatPercentage(ecommercelmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="ecommercelmonprd">
                    <a v-if="ecommercelmonprd.item.estado=='inconsistente'  || ecommercelmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercelmonprd.item._id">  {{ecommercelmonprd.item.nombre}} </a>
                    <a v-else>  {{ecommercelmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="ecommercelmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercelmondrp">
                    <b-badge :variant="getBadge(ecommercelmondrp.item.estado)" >{{formatEstado(ecommercelmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="ecommercelmondrp">
                    {{formatDate(ecommercelmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="ecommercelmondrp">
                    {{formatPercentage(ecommercelmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="ecommercelmondrp">
                    <a v-if="ecommercelmondrp.item.estado=='inconsistente'  || ecommercelmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercelmondrp.item._id">  {{ecommercelmondrp.item.nombre}} </a>
                    <a v-else>  {{ecommercelmondrp.item.nombre}} </a>
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
  name: 'eCommerceLiverpool',
  
  data: function () {
    return {  

      rootmonprd: [],
      ecommercelmondrp: [],
      ecommercelmonprd: [],
      timer: [],
      loading: false,
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        { key: "percentage", label: "% Consistencia" },
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

    formatDate(value){
      var str = "";

        if(typeof value !== 'undefined'){
           // item.fecha = new Date()
        } 
        var options = {hour12: false};
        var now = new Date(value);
    
        str = now.toLocaleString("es-mx", options);


      return str;        
    },

    formatEstado(value){
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

     axios.get('http://localhost:9001/ecommercelmondrp')
     .then(function (response) {
       this.loading = false;
       this.ecommercelmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/ecommercelmonprd')
     .then(function (response) {
       this.loading = false;
       this.ecommercelmonprd= response.data;
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
