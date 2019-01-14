<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Liverpool">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="endecalmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecalmonprd">
                    <b-badge :variant="getBadge(endecalmonprd.item.estado)" >{{formatEstado(endecalmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="endecalmonprd">
                    {{formatDate(endecalmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="porcentaje" slot-scope="endecalmonprd">
                    {{formatPercentage(endecalmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="endecalmonprd">
                    <a v-bind:href= "'/#/' + 'EndecaLiverpoolServices-' + endecalmonprd.item.nombre + '_prd'" >  {{endecalmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="endecalmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecalmondrp">
                    <b-badge :variant="getBadge(endecalmondrp.item.estado)" >{{formatEstado(endecalmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecalmondrp">
                    {{formatDate(endecalmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="endecalmondrp">
                    {{formatPercentage(endecalmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecalmondrp">
                    <a v-bind:href= "'/#/' + 'EndecaLiverpoolServices-' + endecalmondrp.item.nombre + '_drp'">  {{endecalmondrp.item.nombre}} </a>
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
  name: 'EndecaLiverpool',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      endecalmondrp: [],
      endecalmonprd: [],
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

     axios.get('http://localhost:9001/endecalmondrp')
     .then(function (response) {
       this.loading = false;
       this.endecalmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/endecalmonprd')
     .then(function (response) {
       this.loading = false;
       this.endecalmonprd= response.data;
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
