<template>
  <div class="animated fadeIn">
      
  </div>
</template>

<script>

//import json1 from '../json/data.json'
import axios from 'axios'; 

const miliseconds = 10000;


export default {
  //name: 'eCommerceLiverpool',
  name: 'Dashboard',
  
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
        { key: "percentage", label: "% Consistencia" },
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
     return value === "inconsistente" ? "inconsistente":
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
