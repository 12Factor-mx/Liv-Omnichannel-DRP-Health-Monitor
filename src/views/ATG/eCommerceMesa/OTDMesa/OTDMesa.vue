<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Mesa">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="otdmesmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdmesmonprd">
                    <b-badge :variant="getBadge(otdmesmonprd.item.estado)" >{{formatEstado(otdmesmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="otdmesmonprd">
                    {{formatDate(otdmesmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="porcentaje" slot-scope="otdmesmonprd">
                    {{formatPercentage(otdmesmonprd.item.porcentaje)}}
                  </template>
                 <template slot="nombre" slot-scope="otdmesmonprd">
                    <a v-if="otdmesmonprd.item.estado=='inconsistente'  || otdmesmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMesaServices-' + otdmesmonprd.item.nombre + '_prd'" >  {{otdmesmonprd.item.nombre}} </a>
                    <a v-else>  {{otdmesmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="otdmesmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdmesmondrp">
                    <b-badge :variant="getBadge(otdmesmondrp.item.estado)" >{{formatEstado(otdmesmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="otdmesmondrp">
                    {{formatDate(otdmesmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="otdmesmondrp">
                    {{formatPercentage(otdmesmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="otdmesmondrp">
                    <a v-if="otdmesmondrp.item.estado=='inconsistente'  || otdmesmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMesaServices-' + otdmesmondrp.item.nombre + '_drp'">  {{otdmesmondrp.item.nombre}} </a>
                    <a v-else>  {{otdmesmondrp.item.nombre}} </a>
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
  name: 'OTDMesa',

  props:['propiedad'],
  
  data: function () {
    return {  

      rootmonprd: [],
      otdmesmondrp: [],
      otdmesmonprd: [],
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

     axios.get('http://localhost:9001/otdmesmondrp')
     .then(function (response) {
       this.loading = false;
       this.otdmesmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/otdmesmonprd')
     .then(function (response) {
       this.loading = false;
       this.otdmesmonprd= response.data;
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
