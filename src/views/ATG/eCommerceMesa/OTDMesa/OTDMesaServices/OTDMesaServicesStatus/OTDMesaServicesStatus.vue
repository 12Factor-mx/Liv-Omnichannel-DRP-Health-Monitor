<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="OTD Suburbia Services Status">
            <b-row >
              <b-col  lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ prdserverprd }} - {{ prdserviceprd }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-PROD - {{ drpserverprd }} - {{ drpserviceprd }}
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
                  <a>  {{otdmesmonprd.item.nombre}} </a>
                  </template>      
                </b-table>

              </b-col>
              <b-col lg="6">
                <p v-if="env=='prd'">
                  <i class='fa fa-align-justify'></i> HA-DRP - {{ prdserverdrp }} - {{ prdservicedrp }}
                </p>
                <p v-if="env=='drp'">
                  <i class='fa fa-align-justify'></i> HA-DRP - {{ drpserverdrp }} - {{ drpservicedrp }}
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
                     <a>  {{otdmesmondrp.item.nombre}} </a>
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
import  {echo, extractBetween, extractBetweenDifferent} from '../../../../../../../src/utils/stringUtils.js' ;


const miliseconds = 10000;


export default {
  name: 'OTDMesaServicesStatus',
  
  data: function () {
    return {  

      rootmonprd: [],
      otdmesmondrp: [],
      otdmesmonprd: [],
      timer: [],
      loading: false,
      env: "",
      service: "",
      server: "",
      _pos: "",
      xserver: "",
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        { key: "porcentaje", label: "% Consistencia" },
        'Fecha Consulta',
      ],
      prdserverprd: "",
      prdserverdrp: "",
      drpserverprd: "",
      drpserverdrp: "",
      prdserviceprd: "",
      prdservicedrp: "",
      drpserviceprd: "",
      drpservicedrp: ""
   } 
  },

  methods: {

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
      this.service =  extractBetween(document.documentURI, "-",1)
      console.log("service : " + this.service)
      this.server =  extractBetween(document.documentURI, "-",2)
      console.log("server : " + this.server)
      this.env =  document.documentURI.substring(document.documentURI.indexOf('_') + 1)
      console.log("env : " + this.env)

      if(this.env == "drp")
      {
        axios.get('http://localhost:9001/otdmesmondrp/' + this.server + "/" + this.service).then(function (responsedrp)
        {
           //console.log("res drp: " + JSON.stringify(responsedrp.data[0].servicios[0].componentes,undefined,2))
           this.otdmesmondrp = responsedrp.data[0].servicios[0].componentes
           var espejo = responsedrp.data[0].servicios[0].espejo
           this.drpserverdrp = this.server
           this.drpserverprd = espejo
           this.drpservicedrp = this.service
           this.drpserviceprd = this.service
            console.log('Viniendo de drp: ' + this.server + ' ' + responsedrp.data.espejo);
           //console.log("espejo drp: " + JSON.stringify(espejo,undefined,2))
            axios.get('http://localhost:9001/otdmesmonprd/' + espejo + "/" + this.service).then(function (responseprd)
            {
              //console.log("espejo prd: " + JSON.stringify(responseprd,undefined,2))
              //console.log("res prd: " + JSON.stringify(responseprd.data[0].servicios[0].componentes, undefined,2))
              this.otdmesmonprd = responseprd.data[0].servicios[0].componentes
              this.prdserverdrp = this.server
              this.prdserverprd = espejo
              this.prdservicedrp = this.service
              this.prdserviceprd = this.service
              console.log('Viniendo de drp: ')
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
        
        axios.get('http://localhost:9001/otdmesmonprd/' + this.server + "/" + this.service).then(function (responseprd)
        {
           //console.log("res drp: " + JSON.stringify(responsedrp.data[0].servicios[0].componentes,undefined,2))
           this.otdmesmonprd = responseprd.data[0].servicios[0].componentes
           var espejo = responseprd.data[0].servicios[0].espejo
           this.prdserverprd = this.server
           this.prdserverdrp = espejo
           this.prdservicedrp = this.service
           this.prdserviceprd = this.service
           //console.log("espejo drp: " + JSON.stringify(espejo,undefined,2))
            axios.get('http://localhost:9001/otdmesmondrp/' + espejo + "/" + this.service).then(function (responsedrp)
            {
              //console.log("espejo prd: " + JSON.stringify(responseprd,undefined,2))
              //console.log("res prd: " + JSON.stringify(responseprd.data[0].servicios[0].componentes, undefined,2))
              this.otdmesmondrp = responsedrp.data[0].servicios[0].componentes
              this.drpserverdrp = this.server
              this.drpserverprd = espejo
              this.prdservicedrp = this.service
              this.prdserviceprd = this.service
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
