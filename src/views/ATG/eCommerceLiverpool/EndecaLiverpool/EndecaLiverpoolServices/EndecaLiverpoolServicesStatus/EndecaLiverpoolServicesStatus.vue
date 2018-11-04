<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Endeca Liverpool Services Status">
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
                   <template slot="percentage" slot-scope="endecalmonprd">
                    {{formatPercentage(endecalmonprd.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecalmonprd">
                    <a v-if="endecalmonprd.item.estado=='incosistente'  || endecalmonprd.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaServices'">  {{endecalmonprd.item.nombre}} </a>
                    <a v-else>  {{endecalmonprd.item.nombre}} </a>
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
                   <template slot="percentage" slot-scope="endecalmondrp">
                    {{formatPercentage(endecalmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="endecalmondrp">
                    <a v-if="endecalmondrp.item.estado=='incosistente'  || endecalmondrp.item.estado=='consistente' " v-bind:href= "'/#/' + 'EndecaServices'">  {{endecalmondrp.item.nombre}} </a>
                    <a v-else>  {{endecalmondrp.item.nombre}} </a>
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
  name: 'EndecaLiverpoolServicesStatus',
  
  data: function () {
    return {  

      rootmonprd: [],
      endecalmondrp: [],
      endecalmonprd: [],
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
      ]
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

      return value === "incosistente" ? "inconsistente":
             value === "desconocido"  ? "desconocido":
             value === "consistente"   ? "consistente" : value ;
    },

    loadData: function () {

      this.fechaConsulta = new Date();
      this.loading = true;


     axios.get('http://localhost:9001/endecalmondrp')
     .then(function (response) {
        this.loading = false;

        this.env = this.$el.baseURI.substring(this.$el.baseURI.indexOf("_") + 1)
        //console.log("env " + this.env)
        this.service = this.$el.baseURI.substring(this.$el.baseURI.indexOf("-") + 1, this.$el.baseURI.split("-", 2).join("-").length)
        // console.log("service " + this.service)

        this.server = this.$el.baseURI.substring(this.$el.baseURI.split("-", 2).join("-").length +1, this.$el.baseURI.split("-", 3).join("-").length)
        // console.log("server " + this.server)

        var i;

        for (i = 0; i < response.data.length; i++) { 
            
            //console.log(response.data[i]._id )
            //console.log(this.server)
        
            this._pos = response.data[i]._id.split("-", 1).join("-").length;
            //console.log("posición " + this._pos)

            this.xserver = response.data[i]._id.substring(this._pos +1)
            //console.log("xserver " + this.xserver)

            var bol = this.server == this.xserver
            console.log(" es el servidor correcto: " + bol )

            if (this.server == this.xserver)
            {
                //this.endecalmonprd = response.data[i].servicios
                var k;

                //console.log("servicios " + JSON.stringify(response.data[i].servicios))
                for(k = 1; k < response.data[i].servicios.length; k++)
                {
                     //console.log("servicios: \n" + JSON.stringify(response.data[i].servicios[k],undefined,2))
                     this.endecalmonprd = response.data[i].servicios[k].componentes
                }
            }
        }

      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/endecalmonprd')
     .then(function (response) {
        
        this.loading = false;

        //console.log("a")
        this.env = this.$el.baseURI.substring(this.$el.baseURI.indexOf("_") + 1)
        //console.log("env " + this.env)
        this.service = this.$el.baseURI.substring(this.$el.baseURI.indexOf("-") + 1, this.$el.baseURI.split("-", 2).join("-").length)
        // console.log("service " + this.service)

        this.server = this.$el.baseURI.substring(this.$el.baseURI.split("-", 2).join("-").length +1, this.$el.baseURI.split("-", 3).join("-").length)
        // console.log("server " + this.server)

        var i;

        for (i = 0; i < response.data.length; i++) { 
            
            //console.log(response.data[i]._id )
            //console.log(this.server)
        
            this._pos = response.data[i]._id.split("-", 1).join("-").length;
            //console.log("posición " + this._pos)

            this.xserver = response.data[i]._id.substring(this._pos +1)
            //console.log("xserver " + this.xserver)

            var bol = this.server == this.xserver
            //console.log(" es el servidor correcto: " + bol )

            if (this.server == this.xserver)
            {
                //this.endecalmonprd = response.data[i].servicios
                var k;

                //console.log("servicios " + JSON.stringify(response.data[i].servicios))
                for(k = 1; k < response.data[i].servicios.length; k++)
                {
                     //console.log("servicios: \n" + JSON.stringify(response.data[i].servicios[k],undefined,2))
                     this.endecalmondrp = response.data[i].servicios[k].componentes
                }
            }
        }


      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

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
