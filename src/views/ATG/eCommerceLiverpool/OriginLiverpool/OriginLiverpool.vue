<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Origenes Liverpool">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="originlmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="originlmonprd">
                    <b-badge :variant="getBadge(originlmonprd.item.estado)" >{{formatEstado(originlmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="originlmonprd">
                    {{formatDate(originlmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                 <template slot="nombre" slot-scope="originlmonprd">
                     <a>  {{originlmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="originlmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="originlmondrp">
                    <b-badge :variant="getBadge(originlmondrp.item.estado)" >{{formatEstado(originlmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="originlmondrp">
                    {{formatDate(originlmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                  <template slot="nombre" slot-scope="originlmondrp">
                    <a >  {{originlmondrp.item.nombre}} </a>
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
  name: 'OriginLiverpool',
  
  data: function () {
    return {  

      originlmondrp: [],
      originlmonprd: [],
      timer: [],
      loading: false,
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        'Fecha Consulta',
      ]
   } 
  },

  methods: {
    
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

     axios.get('http://localhost:9001/originlmondrp')
     .then(function (response) {
       this.loading = false;
       this.originlmondrp = response.data[0].origins;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/originlmonprd')
     .then(function (response) {
       this.loading = false;
       this.originlmonprd= response.data[0].origins;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

    },

    getBadge(status) {
      return status === "consistente"   ? "success": 
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
