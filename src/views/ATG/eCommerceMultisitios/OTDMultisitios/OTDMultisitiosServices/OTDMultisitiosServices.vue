<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Multisitios Services">
            <b-row >
              <b-col  lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ prdserverprd }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ drpserverprd }}
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
                   <div v-if="env=='prd'">
                    <a v-if="otdmulmonprd.item.estado=='inconsistente'  || otdmulmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServicesStatus-' + otdmulmonprd.item.nombre + '-' + prdserverprd + '-_prd'">  {{otdmulmonprd.item.nombre}} </a>
                    <a v-else>  {{otdmulmonprd.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="otdmulmonprd.item.estado=='inconsistente'  || otdmulmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServicesStatus-' + otdmulmonprd.item.nombre + '-' + drpserverprd + '-_prd'">  {{otdmulmonprd.item.nombre}} </a>
                    <a v-else>  {{otdmulmonprd.item.nombre}} </a>
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
                    <div v-if="env=='prd'">
                    <a v-if="otdmulmondrp.item.estado=='inconsistente'  || otdmulmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServicesStatus-' + otdmulmondrp.item.nombre + '-' + prdserverdrp + '-_drp'">  {{otdmulmondrp.item.nombre}} </a>
                    <a v-else>  {{otdmulmondrp.item.nombre}} </a>
                    </div>
                    <div v-if="env=='drp'">
                    <a v-if="otdmulmondrp.item.estado=='inconsistente'  || otdmulmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'OtdMultisitiosServicesStatus-' + otdmulmondrp.item.nombre + '-' + drpserverdrp + '-_drp'">  {{otdmulmondrp.item.nombre}} </a>
                    <a v-else>  {{otdmulmondrp.item.nombre}} </a>
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
  name: 'OTDMultisitiosServices',
  
  data: function () {
    return {  

      rootmonprd: [],
      otdmulmondrp: [],
      otdmulmonprd: [],
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
      console.log("server : " + this.server)
      this.env =  document.documentURI.substring(document.documentURI.indexOf('_') + 1)
      console.log("env : " + this.env)
 

      if(this.env == "drp")
      {
        axios.get('http://localhost:9001/otdmulmondrp/' + this.server).then(function (responsedrp)
        {
           console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
           this.otdmulmondrp = responsedrp.data.servicios
           this.drpserverdrp = this.server
           this.drpserverprd = responsedrp.data.espejo

            axios.get('http://localhost:9001/otdmulmonprd/' + responsedrp.data.espejo).then(function (responseprd)
            {
              console.log("res prd: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.otdmulmonprd = responseprd.data.servicios
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
        axios.get('http://localhost:9001/otdmulmonprd/' + this.server).then(function (responseprd)
        {
           console.log("res prd: " + JSON.stringify(responseprd.data.servicios, undefined,2))
           this.otdmulmonprd = responseprd.data.servicios
           this.prdserverprd = this.server
           this.prdserverdrp = responseprd.data.espejo

            axios.get('http://localhost:9001/otdmulmondrp/' + responseprd.data.espejo).then(function (responsedrp)
            {
              console.log("res drp: " + JSON.stringify(responsedrp.data.servicios, undefined,2))
              this.otdmulmondrp = responsedrp.data.servicios
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
