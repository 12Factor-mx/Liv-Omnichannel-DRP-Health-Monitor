<template>

  <div class="animated fadeIn">
      

      <b-col >
        <b-row >
          <b-card  class="w-100" >
          
               <template slot="header">
                 <label > Ambientes Layering ATG </label>

               </template>

                <b-row >
                  <b-col  lg="12">

                    <b-table class="m-3 mx" fixed="true"  :items="envs" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fieldsEnv" >
                      <template  slot="name" slot-scope="envs">
                        <a   v-bind:href= "envs.item.route">  {{envs.item.name}} </a>

                      </template>  
                    </b-table>


                    
                  
                  </b-col> 
                </b-row >  
          
          
          </b-card>  
        </b-row>
      </b-col>  

      
      
  </div> 
 
</template>
  

<script>
   

//import ghDiffHTML from 'gh-diff-html';
//import Diff from 'diff';
//import axios from 'axios'; 

//const miliseconds = 10000;

//var layeringDiffData = [];

//var diff = Diff.diffChars(before, after);

//var html ="";
//var html1 = ghDiffHTML(before, after, {
//  fileName: ' ',//'archivo.js',
//  outputFormat:'line-by-line'  // 'line-by-line' // or 'side-by-side' 
//})

export default {

  name: 'ATGLayeringDiff',

  data(){
    return {
      envs:[{name:"Liverpool Store A",
             path:"/u01/oracle/atg/data/ear/lp-store-a.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers",
             svn:"svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration",
             route:"/#/ATG/Layering/LiverpoolStoreA"},
             {name:"Liverpool Store B", 
             path:"/u01/oracle/atg/data/ear/lp-store-b.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers",
             svn:"svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration"}, 
             {name:"Mesa", 
             path:"/u01/oracle/atg/data/ear/mesa.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers",
             svn:"svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration"}, 
             {name:"Suburbia", 
             path:"/u01/oracle/atg/data/ear/lp-store-a.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers",
             svn:"svn://172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration"}],
      fieldsEnv: [
        { key: "name", label : 'Nombre' },
        { key: "path", label : 'Share' },
        { key: "svn", label : 'SVN' },

      ],
     // h:'',
     // layeringDiff: [],
     // currentPage: 1,
     // perPage: 3,
     // totalRows: 0,
     // fields: [
     //   { key: "error.path", label : 'Archivo' },
      //  { key: "error.dif", label: 'Diferencia' },
     // ],
    }
  },
 
}

</script>

<style>
  
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }

</style>

