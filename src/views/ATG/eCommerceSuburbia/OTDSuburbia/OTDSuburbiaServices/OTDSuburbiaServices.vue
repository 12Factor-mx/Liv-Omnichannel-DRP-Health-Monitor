<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Suburbia Services">
            <b-row >
              <b-col  lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ prdserverprd }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ drpserverprd }}
                </p>
                <b-table :items="otdsubmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">    
                  <template slot="estado" slot-scope="otdsubmonprd">
                    <b-badge :variant="getBadge(otdsubmonprd.item.estado)" >{{formatEstado(otdsubmonprd.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="otdsubmonprd">
                    {{formatDate(otdsubmonprd.item.fecha)}} 
                  </template>  
                  <template slot="Fecha Consulta" >
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="otdsubmonprd">
                    {{formatPercentage(otdsubmonprd.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="otdsubmonprd">
                   <div v-if="env=='prd'">
                    <a v-if="otdsubmonprd.item.estado=='inconsistente'  || otdsubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServicesStatus-' + otdsubmonprd.item.nombre + '-' + prdserverprd + '-_prd'">  {{otdsubmonprd.item.nombre}} </a>
                    <a v-else>  {{otdsubmonprd.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="otdsubmonprd.item.estado=='inconsistente'  || otdsubmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServicesStatus-' + otdsubmonprd.item.nombre + '-' + drpserverprd + '-_prd'">  {{otdsubmonprd.item.nombre}} </a>
                    <a v-else>  {{otdsubmonprd.item.nombre}} </a>
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
                <b-table  :items="otdsubmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="otdsubmondrp">
                    <b-badge :variant="getBadge(otdsubmondrp.item.estado)" >{{formatEstado(otdsubmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="otdsubmondrp">
                    {{formatDate(otdsubmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" >
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="porcentaje" slot-scope="otdsubmondrp">
                    {{formatPercentage(otdsubmondrp.item.porcentaje)}}
                  </template>    
                  <template slot="nombre" slot-scope="otdsubmondrp">
                    <div v-if="env=='prd'">
                    <a v-if="otdsubmondrp.item.estado=='inconsistente'  || otdsubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServicesStatus-' + otdsubmondrp.item.nombre + '-' + prdserverdrp + '-_drp'">  {{otdsubmondrp.item.nombre}} </a>
                    <a v-else>  {{otdsubmondrp.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="otdsubmondrp.item.estado=='inconsistente'  || otdsubmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdSuburbiaServicesStatus-' + otdsubmondrp.item.nombre + '-' + drpserverdrp + '-_drp'">  {{otdsubmondrp.item.nombre}} </a>
                    <a v-else>  {{otdsubmondrp.item.nombre}} </a>
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
//import  {echo, extractBetween, extractBetweenDifferent} from '../../../../../../src/utils/stringUtils.js' ;
import  {echo, extractBetween, extractBetweenDifferent} from '../../../../../../src/utils/stringUtils.js' ;
//import  {echo, extractBetween, extractBetweenDifferent} from 'utils/stringUtils.js' ;
//import Vue from 'vue';

const miliseconds = 10000;


export default {
  name: 'OTDSuburbiaServices',
  
  data: function () {
    return {  

      rootmonprd: [],
      otdsubmondrp: [],
      otdsubmonprd: [],
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
      console.log("serverprd : JM1" + this.server)
      this.env =  document.documentURI.substring(document.documentURI.indexOf('_') + 1)
      console.log("env : " + this.env)
 

      if(this.env == "drp")
      {
        axios.get('http://localhost:9001/otdsubmondrp/' + this.server).then(function (responsedrp)
        {
           console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
           this.otdsubmondrp = responsedrp.data.servicios
           this.drpserverdrp = this.server
           this.drpserverprd = responsedrp.data.espejo

            axios.get('http://localhost:9001/otdsubmonprd/' + responsedrp.data.espejo).then(function (responseprd)
            {
              console.log("res prd: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.otdsubmonprd = responseprd.data.servicios
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
        axios.get('http://localhost:9001/otdsubmonprd/' + this.server).then(function (responseprd)
        {
           console.log("res prd: " + JSON.stringify(responseprd.data.servicios, undefined,2))
           this.otdsubmonprd = responseprd.data.servicios
           this.prdserverprd = this.server
           this.prdserverdrp = responseprd.data.espejo

           console.log("ssdsdsdsdjzcxgjksguysafyusafdyuatrduysfusaydr: " + JSON.stringify(responseprd.data.espejo, undefined,2))

            axios.get('http://localhost:9001/otdsubmondrp/' + responseprd.data.espejo).then(function (responsedrp)
            {
              console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.otdsubmondrp = responsedrp.data.servicios
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
