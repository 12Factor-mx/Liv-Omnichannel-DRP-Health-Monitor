<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Mesa Services">
            <b-row >
              <b-col  lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ prdserverprd }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ drpserverprd }}
                </p>
                <b-table :items="endecamesmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">    
                  <template slot="estado" slot-scope="endecamesmonprd">
                    <b-badge :variant="getBadge(endecamesmonprd.item.estado)" >{{formatEstado(endecamesmonprd.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecamesmonprd">
                    {{formatDate(endecamesmonprd.item.fecha)}} 
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="endecamesmonprd">
                    {{formatPercentage(endecamesmonprd.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecamesmonprd">
                   <div v-if="env=='prd'">
                    <a v-if="endecamesmonprd.item.estado=='inconsistente'  || endecamesmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServicesStatus-' + endecamesmonprd.item.nombre + '-' + prdserverprd + '-_prd'">  {{endecamesmonprd.item.nombre}} </a>
                    <a v-else>  {{endecamesmonprd.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="endecamesmonprd.item.estado=='inconsistente'  || endecamesmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServicesStatus-' + endecamesmonprd.item.nombre + '-' + drpserverprd + '-_prd'">  {{endecamesmonprd.item.nombre}} </a>
                    <a v-else>  {{endecamesmonprd.item.nombre}} </a>
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
                <b-table  :items="endecamesmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="endecamesmondrp">
                    <b-badge :variant="getBadge(endecamesmondrp.item.estado)" >{{formatEstado(endecamesmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="endecamesmondrp">
                    {{formatDate(endecamesmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="endecamesmondrp">
                    {{formatPercentage(endecamesmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecamesmondrp">
                    <div v-if="env=='prd'">
                    <a v-if="endecamesmondrp.item.estado=='inconsistente'  || endecamesmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServicesStatus-' + endecamesmondrp.item.nombre + '-' + prdserverdrp + '-_drp'">  {{endecamesmondrp.item.nombre}} </a>
                    <a v-else>  {{endecamesmondrp.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="endecamesmondrp.item.estado=='inconsistente'  || endecamesmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaMesaServicesStatus-' + endecamesmondrp.item.nombre + '-' + drpserverdrp + '-_drp'">  {{endecamesmondrp.item.nombre}} </a>
                    <a v-else>  {{endecamesmondrp.item.nombre}} </a>
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
  name: 'EndecaMesaServices',
  
  data: function () {
    return {  

      rootmonprd: [],
      endecamesmondrp: [],
      endecamesmonprd: [],
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

      return value === "inconsistente" ? "inconsistente":
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
        axios.get('http://localhost:9001/endecamesmondrp/' + this.server).then(function (responsedrp)
        {
           console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
           this.endecamesmondrp = responsedrp.data.servicios
           this.drpserverdrp = this.server
           this.drpserverprd = responsedrp.data.espejo

            axios.get('http://localhost:9001/endecamesmonprd/' + responsedrp.data.espejo).then(function (responseprd)
            {
              console.log("res prd: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.endecamesmonprd = responseprd.data.servicios
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
        axios.get('http://localhost:9001/endecamesmonprd/' + this.server).then(function (responseprd)
        {
           console.log("res prd: " + JSON.stringify(responseprd.data.servicios, undefined,2))
           this.endecamesmonprd = responseprd.data.servicios
           this.prdserverprd = this.server
           this.prdserverdrp = responseprd.data.espejo

            axios.get('http://localhost:9001/endecamesmondrp/' + responseprd.data.espejo).then(function (responsedrp)
            {
              console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.endecamesmondrp = responsedrp.data.servicios
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
