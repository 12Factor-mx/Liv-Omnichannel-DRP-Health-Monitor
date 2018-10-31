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
                <b-table :items="ecommercesubmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercesubmonprd">
                    <b-badge :variant="getBadge(ecommercesubmonprd.item.estado)" >{{formatEstado(ecommercesubmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="ecommercesubmonprd">
                    {{formatDate(ecommercesubmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="ecommercesubmonprd">
                    {{formatPercentage(ecommercesubmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="ecommercesubmonprd">
                    <a v-if="ecommercesubmonprd.item.estado=='inconsistente'  || ecommercesubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercesubmonprd.item._id">  {{ecommercesubmonprd.item.nombre}} </a>
                    <a v-else>  {{ecommercesubmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="ecommercesubmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="ecommercesubmondrp">
                    <b-badge :variant="getBadge(ecommercesubmondrp.item.estado)" >{{formatEstado(ecommercesubmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="ecommercesubmondrp">
                    {{formatDate(ecommercesubmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="ecommercesubmondrp">
                    {{formatPercentage(ecommercesubmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="ecommercesubmondrp">
                    <a v-if="ecommercesubmondrp.item.estado=='inconsistente'  || ecommercesubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + ecommercesubmondrp.item._id">  {{ecommercesubmondrp.item.nombre}} </a>
                    <a v-else>  {{ecommercesubmondrp.item.nombre}} </a>
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
  name: 'eCommerceSuburbia',
  
  data: function () {
    return {  

      rootmonprd: [],
      ecommercesubmondrp: [],
      ecommercesubmonprd: [],
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

     axios.get('http://localhost:9001/ecommercesubmondrp')
     .then(function (response) {
       this.loading = false;
       this.ecommercesubmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/ecommercesubmonprd')
     .then(function (response) {
       this.loading = false;
       this.ecommercesubmonprd= response.data;
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
