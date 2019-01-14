<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Suburbia">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="otdsubmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdsubmonprd">
                    <b-badge :variant="getBadge(otdsubmonprd.item.estado)" >{{formatEstado(otdsubmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="otdsubmonprd">
                    {{formatDate(otdsubmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="porcentaje" slot-scope="otdsubmonprd">
                    {{formatPercentage(otdsubmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="otdsubmonprd">
                    <a v-if="otdsubmonprd.item.estado=='inconsistente'  || otdsubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServices-' + otdsubmonprd.item.nombre + '_prd'" >  {{otdsubmonprd.item.nombre}} </a>
                    <a v-else>  {{otdsubmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="otdsubmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdsubmondrp">
                    <b-badge :variant="getBadge(otdsubmondrp.item.estado)" >{{formatEstado(otdsubmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="otdsubmondrp">
                    {{formatDate(otdsubmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="otdsubmondrp">
                    {{formatPercentage(otdsubmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="otdsubmondrp">
                    <a v-if="otdsubmondrp.item.estado=='inconsistente'  || otdsubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServices-' + otdsubmondrp.item.nombre + '_drp'">  {{otdsubmondrp.item.nombre}} </a>
                    <a v-else>  {{otdsubmondrp.item.nombre}} </a>
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
  name: 'OTDSuburbia',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      otdsubmondrp: [],
      otdsubmonprd: [],
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

     axios.get('http://localhost:9001/otdsubmondrp')
     .then(function (response) {
       this.loading = false;
       this.otdsubmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/otdsubmonprd')
     .then(function (response) {
       this.loading = false;
       this.otdsubmonprd= response.data;
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
