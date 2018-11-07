<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Liverpool Services">
            <b-row >
              <b-col  lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ prdserverprd }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ drpserverprd }}
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
                   <template slot="percentage" slot-scope="endecalmonprd">
                    {{formatPercentage(endecalmonprd.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecalmonprd">
                   <div v-if="env=='prd'">
                    <a v-if="endecalmonprd.item.estado=='incosistente'  || endecalmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaLiverpoolServicesStatus-' + endecalmonprd.item.nombre + '-' + prdserverprd + '-_prd'">  {{endecalmonprd.item.nombre}} </a>
                    <a v-else>  {{endecalmonprd.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="endecalmonprd.item.estado=='incosistente'  || endecalmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaLiverpoolServicesStatus-' + endecalmonprd.item.nombre + '-' + drpserverprd + '-_prd'">  {{endecalmonprd.item.nombre}} </a>
                    <a v-else>  {{endecalmonprd.item.nombre}} </a>
                    </div>                 
                    </template>      
                </b-table>

              </b-col>
              <b-col lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-DRP - {{ prdserverdrp }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-DRP - {{ drpserverdrp }}
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
                   <template slot="percentage" slot-scope="endecalmondrp">
                    {{formatPercentage(endecalmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecalmondrp">
                    <div v-if="env=='prd'">
                    <a v-if="endecalmondrp.item.estado=='incosistente'  || endecalmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaLiverpoolServicesStatus-' + endecalmondrp.item.nombre + '-' + prdserverdrp + '-_drp'">  {{endecalmondrp.item.nombre}} </a>
                    <a v-else>  {{endecalmondrp.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="endecalmondrp.item.estado=='incosistente'  || endecalmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaLiverpoolServicesStatus-' + endecalmondrp.item.nombre + '-' + drpserverdrp + '-_drp'">  {{endecalmondrp.item.nombre}} </a>
                    <a v-else>  {{endecalmondrp.item.nombre}} </a>
                    </div>
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
import  {echo, extractBetween, extractBetweenDifferent} from '../../../../../../src/utils/stringUtils.js' ;
//import Vue from 'vue';

const miliseconds = 10000;


export default {
  name: 'EndecaLiverpoolServices',
  
  data: function () {
    return {  

      rootmonprd: [],
      endecalmondrp: [],
      endecalmonprd: [],
      timer: [],
      loading: false,
      env: "",
      server: "",
      documentURI: "",
      serverespejodrp: "",
      serverespejoprd: "",
      _pos: "",
      xserverprd: "",
      xserverdrp: "",
      prdserverprd: "",
      prdserverdrp: "",
      drpserverprd: "",
      drpserverdrp: "",
      serveruriprd: "",
      serveruridrp: "",
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

    a()
    {
      
      return echo("sssss kskskj -papi_jksksk" )
    },
    getPosition(string, subString, index) {
      return string.split(subString, index).join(subString).length;
    },
    
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


      this.documentURI = document.documentURI
      console.log("documentURI : " + this.documentURI)
      this.server =  extractBetweenDifferent(document.documentURI, "-", "_",1)
      console.log("serverprd : " + this.serverprd)
      this.env =  document.documentURI.substring(document.documentURI.indexOf('_') + 1)
      console.log("env : " + this.env)
 

      if(this.env == "drp")
      {
        axios.get('http://localhost:9001/endecalmondrp/' + this.server).then(function (responsedrp)
        {
           console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
           this.endecalmondrp = responsedrp.data.servicios
           this.drpserverdrp = this.server
           this.drpserverprd = responsedrp.data.espejo

            axios.get('http://localhost:9001/endecalmonprd/' + responsedrp.data.espejo).then(function (responseprd)
            {
              console.log("res prd: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.endecalmonprd = responseprd.data.servicios
              this.prdserverprd = responseprd.data.espejo
              this.prdserverdrp = this.server

            }.bind(this)).catch(e => 
            {
              this.loading = false;
            })

        }.bind(this)).catch(e => 
        {
          this.loading = false;
        })

      }
      else if (this.env == "prd")
      {
        axios.get('http://localhost:9001/endecalmonprd/' + this.server).then(function (responseprd)
        {
           console.log("res prd: " + JSON.stringify(responseprd.data.servicios, undefined,2))
           this.endecalmonprd = responseprd.data.servicios
           this.prdserverprd = this.server
           this.prdserverdrp = responseprd.data.espejo

            axios.get('http://localhost:9001/endecalmondrp/' + responseprd.data.espejo).then(function (responsedrp)
            {
              console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.endecalmondrp = responsedrp.data.servicios
              this.drpserverdrp = responsedrp.data.espejo
              this.drpserverprd = this.server

            }.bind(this)).catch(e => 
            {
              this.loading = false;
            })

        }.bind(this)).catch(e => 
        {
          this.loading = false;
        })


      }

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
