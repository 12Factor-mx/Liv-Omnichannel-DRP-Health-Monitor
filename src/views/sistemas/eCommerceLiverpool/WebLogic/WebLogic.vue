<template>
  <div class="animated fadeIn">
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
      loading: false

   } 
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
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
      var str = "";

      if(value == 'response_code 200')
      {
        str = "Consistente";
      } else if (value == 'response_code 000')
      {
        str = "Inconsistente";
      }else if (typeof value !== 'undefined')
      {
        str = "Desconocido";
      }
      
      return str;        
    },

    loadData: function () {
      
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
