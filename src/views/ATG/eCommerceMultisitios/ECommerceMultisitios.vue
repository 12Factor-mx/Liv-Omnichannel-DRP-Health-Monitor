<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="eCommerce Multisitios">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="ecommercemulmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercemulmonprd">
                    <b-badge :variant="getBadge(ecommercemulmonprd.item.estado)" >{{formatEstado(ecommercemulmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="ecommercemulmonprd">
                    {{formatDate(ecommercemulmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="porcentaje" slot-scope="ecommercemulmonprd">
                    {{formatPercentage(ecommercemulmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="ecommercemulmonprd">
                    <a v-if="ecommercemulmonprd.item.estado=='inconsistente'  || ecommercemulmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercemulmonprd.item._id">  {{ecommercemulmonprd.item.nombre}} </a>
                    <a v-else>  {{ecommercemulmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="ecommercemulmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercemulmondrp">
                    <b-badge :variant="getBadge(ecommercemulmondrp.item.estado)" >{{formatEstado(ecommercemulmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="ecommercemulmondrp">
                    {{formatDate(ecommercemulmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="ecommercemulmondrp">
                    {{formatPercentage(ecommercemulmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="ecommercemulmondrp">
                    <a v-if="ecommercemulmondrp.item.estado=='inconsistente'  || ecommercemulmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercemulmondrp.item._id">  {{ecommercemulmondrp.item.nombre}} </a>
                    <a v-else>  {{ecommercemulmondrp.item.nombre}} </a>
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
  name: 'eCommerceMultisitios',
  
  data: function () {
    return {  

      rootmonprd: [],
      ecommercemulmondrp: [],
      ecommercemulmonprd: [],
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

     axios.get('http://localhost:9001/ecommercemulmondrp')
     .then(function (response) {
       this.loading = false;
       this.ecommercemulmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/ecommercemulmonprd')
     .then(function (response) {
       this.loading = false;
       this.ecommercemulmonprd= response.data;
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
