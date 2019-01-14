<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Multisitios">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="endecamulmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecamulmonprd">
                    <b-badge :variant="getBadge(endecamulmonprd.item.estado)" >{{formatEstado(endecamulmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="endecamulmonprd">
                    {{formatDate(endecamulmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="endecamulmonprd">
                    {{formatPercentage(endecamulmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="endecamulmonprd">
                    <a v-if="endecamulmonprd.item.estado=='inconsistente'  || endecamulmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMultisitiosServices-' + endecamulmonprd.item.nombre + '_prd'" >  {{endecamulmonprd.item.nombre}} </a>
                    <a v-else>  {{endecamulmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="endecamulmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecamulmondrp">
                    <b-badge :variant="getBadge(endecamulmondrp.item.estado)" >{{formatEstado(endecamulmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecamulmondrp">
                    {{formatDate(endecamulmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="endecamulmondrp">
                    {{formatPercentage(endecamulmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecamulmondrp">
                    <a v-if="endecamulmondrp.item.estado=='inconsistente'  || endecamulmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMultisitiosServices-' + endecamulmondrp.item.nombre + '_drp'">  {{endecamulmondrp.item.nombre}} </a>
                    <a v-else>  {{endecamulmondrp.item.nombre}} </a>
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
  name: 'EndecaMultisitios',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      endecamulmondrp: [],
      endecamulmonprd: [],
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

     axios.get('http://localhost:9001/endecamulmondrp')
     .then(function (response) {
       this.loading = false;
       this.endecamulmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/endecamulmonprd')
     .then(function (response) {
       this.loading = false;
       this.endecamulmonprd= response.data;
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
