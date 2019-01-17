<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Multisitios">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="otdmulmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdmulmonprd">
                    <b-badge :variant="getBadge(otdmulmonprd.item.estado)" >{{formatEstado(otdmulmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="otdmulmonprd">
                    {{formatDate(otdmulmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="porcentaje" slot-scope="otdmulmonprd">
                    {{formatPercentage(otdmulmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="otdmulmonprd">
                    <a v-if="otdmulmonprd.item.estado=='inconsistente'  || otdmulmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServices-' + otdmulmonprd.item.nombre + '_prd'" >  {{otdmulmonprd.item.nombre}} </a>
                    <a v-else>  {{otdmulmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="otdmulmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdmulmondrp">
                    <b-badge :variant="getBadge(otdmulmondrp.item.estado)" >{{formatEstado(otdmulmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="otdmulmondrp">
                    {{formatDate(otdmulmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="otdmulmondrp">
                    {{formatPercentage(otdmulmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="otdmulmondrp">
                    <a v-if="otdmulmondrp.item.estado=='inconsistente'  || otdmulmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServices-' + otdmulmondrp.item.nombre + '_drp'">  {{otdmulmondrp.item.nombre}} </a>
                    <a v-else>  {{otdmulmondrp.item.nombre}} </a>
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
  name: 'OTDMultisitios',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      otdmulmondrp: [],
      otdmulmonprd: [],
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

     axios.get('http://localhost:9001/otdmulmondrp')
     .then(function (response) {
       this.loading = false;
       this.otdmulmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/otdmulmonprd')
     .then(function (response) {
       this.loading = false;
       this.otdmulmonprd= response.data;
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
