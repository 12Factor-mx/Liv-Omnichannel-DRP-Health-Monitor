<template>
  <div class="animated fadeIn">
      <b-row>
      <b-col md="12">
        <b-card  header="e-Commerce">
            <b-row >
              <b-col  lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-PROD
                </p>
                <b-table :items="rootmonprd" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="rootmonprd">
                    <b-badge :variant="getBadge(rootmonprd.item.estado)" >{{formatEstado(rootmonprd.item.estado)}}</b-badge>
                  </template>
                  <template slot="fecha" slot-scope="rootmonprd">
                    {{formatDate(rootmonprd.item.fecha)}}
                  </template> 
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}} 
                  </template>
                   <template slot="percentage" slot-scope="rootmonprd">
                    {{formatPercentage(rootmonprd.item.percentage)}}
                  </template>
                 <template slot="nombre" slot-scope="rootmonprd">
                    <a v-if="rootmonprd.item.estado=='incosistente'  || rootmonprd.item.estado=='cosistente' " v-bind:href= "'/#/' + rootmonprd.item._id">  {{rootmonprd.item.nombre}} </a>
                    <a v-else>  {{rootmonprd.item.nombre}} </a>
                  </template>
                </b-table>
              </b-col>
              <b-col lg="6">
                <p>
                  <i class='fa fa-align-justify'></i> HA-DRP
                </p>
                <b-table  :items="rootmondrp" hover="hover" striped="striped" bordered="bordered"   responsive="sm" :fields="fields">  
                  <template slot="estado" slot-scope="rootmondrp">
                    <b-badge :variant="getBadge(rootmondrp.item.estado)" >{{formatEstado(rootmondrp.item.estado)}}</b-badge>
                  </template> 
                  <template slot="fecha" slot-scope="rootmondrp">
                    {{formatDate(rootmondrp.item.fecha)}}
                  </template>  
                  <template slot="Fecha Consulta" slot-scope="data">
                    {{formatDate(fechaConsulta)}}
                  </template>   
                   <template slot="percentage" slot-scope="rootmondrp">
                    {{formatPercentage(rootmondrp.item.percentage)}}
                  </template>    
                  <template slot="nombre" slot-scope="rootmondrp">
                    <a v-if="rootmondrp.item.estado=='incosistente'  || rootmondrp.item.estado=='cosistente' " v-bind:href= "'/#/' + rootmondrp.item._id">  {{rootmondrp.item.nombre}} </a>
                    <a v-else>  {{rootmondrp.item.nombre}} </a>
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
                <div :key="item.id" class="progress-group" v-for="item in rootmonprd ">
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
              <div :key="item.id" class="progress-group" v-for="item in rootmondrp ">
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
  //name: 'eCommerceLiverpool',
  name: 'ecommerce',
  
  data: function () {
    return {  

      rootmondrp: [],
      rootmonprd: [],
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


    formatDate(value){
      var str = "";

        if(typeof value !== 'undefined'){
           // item.fecha = new Date()
        } 
        var options = {hour12: false};
        var now = new Date(value);
    
        str = now.toLocaleString("es-mx", options);


      return str;        
    },

    formatDate(value){
      var str = "";

        if(typeof value !== 'undefined'){
           // item.fecha = new Date()
        } 
        var options = {hour12: false};
        var now = new Date(value);
    
        str = now.toLocaleString("es-mx", options);


      return str;        
    },

    formatEstado(value){
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

     axios.get('http://localhost:9001/rootmondrp')
     .then(function (response) {
       this.loading = false;
       this.rootmondrp = response.data;
      }.bind(this)) 
      .catch(e => {
      this.loading = false;
    })

     axios.get('http://localhost:9001/rootmonprd')
     .then(function (response) {
       this.loading = false;
       this.rootmonprd= response.data;
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

