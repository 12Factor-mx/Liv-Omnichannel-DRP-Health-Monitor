<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card  header="Weblogic">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="weblogiclmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogiclmonprd">
                    <b-badge :variant="getBadge(weblogiclmonprd.item.estado)" >{{formatEstado(weblogiclmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="weblogiclmonprd">
                    {{formatDate(weblogiclmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="weblogiclmonprd">
                    {{formatPercentage(weblogiclmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="weblogiclmonprd">
                    <a v-if="weblogiclmonprd.item.estado=='incosistente'  || weblogiclmonprd.item.estado=='cosistente' " v-bind:href= "'/#/' + weblogiclmonprd.item._id">  {{weblogiclmonprd.item.nombre}} </a>
                    <a v-else>  {{weblogiclmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="weblogiclmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="weblogiclmondrp">
                    <b-badge :variant="getBadge(weblogiclmondrp.item.estado)" >{{formatEstado(weblogiclmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="weblogiclmondrp">
                    {{formatDate(weblogiclmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="weblogiclmondrp">
                    {{formatPercentage(weblogiclmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="weblogiclmondrp">
                    <a v-if="weblogiclmondrp.item.estado=='incosistente'  || weblogiclmondrp.item.estado=='cosistente' " v-bind:href= "'/#/' + weblogiclmondrp.item._id">  {{weblogiclmondrp.item.nombre}} </a>
                    <a v-else>  {{weblogiclmondrp.item.nombre}} </a>
                  </template>      
                </b-table>
              </b-col>
            </b-row>
        </b-card>
      </b-col>
    </b-row>

    <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
    <b-row>
      <b-col md="12">
        <!-- <b-card v-bind:header="allLots.cardSistemas"> -->
        <b-card header="Sistemas">
          <b-row>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  Producción
                  <!-- {{allLots.cardList[0].ambiente}} -->
                </b-col>
                <b-col sm="6">
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <div :key="item.id" class="progress-group" v-for="item in weblogiclmonprd ">
                  <div class="progress-group-header">
                    <a v-bind:href= "'/#/' + item._id"> > </a>
                    <i class="icon-settings progress-group-icon"></i>
                    <span class="title">{{item.nombre}}</span>
                    <div class="ml-auto font-weight-normal" v-if="item.fecha"> 
                        {{formatDate(item.fecha)}} 
                    </div>
                    <div class="ml-auto font-weight-normal" v-else > 
                        {{formatDate(new Date()) + " "}} 
                    </div>
                     <div class="ml-auto font-weight-normal">
                    {{formatEstado(item.estado)}}
                    </div>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" v-bind:variant="success" value="90"></b-progress>
                  </div>
                </div>
                <!--<div :key="item.id" class="progress-group" v-for="item in allLots.cardList[0].plataformas">
                  <div class="progress-group-header">
                    <a v-bind:href="item.ligaHijos"> > </a>
                    <i v-bind:class="item.icon"> </i>
                    <span class="title">{{item.nombre}}</span>
                    <span class="ml-auto font-weight-bold">{{item.valor}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" v-bind:variant="item.variante" v-bind:value="item.valor"></b-progress>
                  </div>
                </div> -->
              </ul> 
            </b-col> 
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                 HA - DRP
                 <!-- {{allLots.cardList[1].ambiente}} -->
                </b-col>
                 <b-col sm="6">
                </b-col>
              </b-row>
              <hr class="mt-0">
              <div :key="item.id" class="progress-group" v-for="item in weblogiclmondrp ">
                  <div class="progress-group-header">
                    <a v-bind:href= "'/#/' + item._id"> > </a>
                    <i class="icon-settings progress-group-icon"></i>
                    <span class="title">{{item.nombre}}</span>
                    <div class="ml-auto font-weight-normal" v-if="item.fecha"> 
                        {{formatDate(item.fecha)}} 
                    </div>
                    <div class="ml-auto font-weight-normal" v-else > 
                        {{formatDate(new Date()) + " "}} 
                    </div>
                     <div class="ml-auto font-weight-normal">
                    {{formatEstado(item.estado)}}
                    </div>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" v-bind:variant="item.variante" v-bind:value="item.valor"></b-progress>
                  </div>
                </div>
            </b-col> 
          </b-row>
          <br/>
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
  name: 'WebLogic',
  
  data: function () {
    return {  

      rootmonprd: [],
      weblogiclmondrp: [],
      weblogiclmonprd: [],
      timer: [],
      loading: false,
      fechaConsulta: [],
      fields: [
        { key: "nombre" },
        { key: "estado" },
        { key: "fecha", label: "Fecha Registro" },
        { key: "percentage", label: "% conistencia" },
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

      return value === "incosistente" ? "inconsistente":
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

     axios.get('http://localhost:9001/weblogiclmondrp')
     .then(function (response) {
       this.loading = false;
       this.weblogiclmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/weblogiclmonprd')
     .then(function (response) {
       this.loading = false;
       this.weblogiclmonprd= response.data;
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
