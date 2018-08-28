<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card v-bind:header="allLots.cardSistemas">
          <b-row>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  {{allLots.cardList[0].ambiente}} 
                </b-col>
                <b-col sm="6">
                </b-col>
              </b-row>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">

                <div :key="item.id" class="progress-group" v-for="item in allLots.cardList[0].plataformas">
                  <div class="progress-group-header">
                    <i v-bind:class="item.icon"></i>
                    <span class="title">{{item.nombre}}</span>
                    <span class="ml-auto font-weight-bold">{{item.valor}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" v-bind:variant="item.variante" v-bind:value="item.valor"></b-progress>
                  </div>
                </div> 
              </ul>
              
            </b-col> 
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                 {{allLots.cardList[1].ambiente}} 
                </b-col>
                 <b-col sm="6">
                </b-col>
              </b-row>
              <hr class="mt-0">
               <ul class="horizontal-bars type-2">
                <div :key="item.id" class="progress-group" v-for="item in allLots.cardList[1].plataformas">
                  <div class="progress-group-header">
                    <i v-bind:class="item.icon"></i>
                    <span class="title">{{item.nombre}}</span>
                    <span class="ml-auto font-weight-bold">{{item.valor}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" v-bind:variant="item.variante" v-bind:value="item.valor"></b-progress>
                  </div>
                </div>
              </ul>
            </b-col> 
          </b-row>
          <br/>
        </b-card> 
      </b-col>
    </b-row>
  </div>
</template>

<script>

import json1 from '../json/data.json'

export default {
  name: 'dashboard',
  
  data: function () {
    return {  
      allLots: []
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
    }
  },
  created(){

    this.allLots = json1;
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
