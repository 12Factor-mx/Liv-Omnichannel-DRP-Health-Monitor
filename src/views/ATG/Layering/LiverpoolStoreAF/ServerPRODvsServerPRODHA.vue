<template>

  <div class="animated fadeIn">
      
 
      <b-row>
        <b-col>
            <b-table :items="layeringDiff" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fields" :current-page="currentPage" :per-page="perPage"  @row-clicked="rowClicked">  
            </b-table>
            <nav>
                <b-pagination :total-rows="getRowCount(layeringDiff)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons />
            </nav>
          </b-col>  
      </b-row>  
      <b-row>
          <b-col>
            <div v-html="h">
            </div>
        </b-col>
      </b-row>
      
      
  </div> 
 
</template>
  

<script>
   

import ghDiffHTML from 'gh-diff-html';
import Diff from 'diff';
import axios from 'axios'; 


var layeringDiffData = [];
var html ="";


export default {

  name: 'LiverpoolStoreAServerPRODvsServerPRODHA', 

  data(){

    
    return {
      envs:[{name:"Server PROD vs Server PRODHA", path:"a"},{name:"SVN PROD vs Server PROD", path:"a"} , {name:"SVN PROD vs SVN PRODHA", path:"a"}, {name:"SVN PRODHA vs Server PRODHA", path:"a"}],
      fieldsEnv: [
        { key: "name", label : 'Ambiente' },
       
       // 'Fecha Consulta',
      ],
      h:'',
      layeringDiff: [],
      originalFilePRODHA: ' ',
      originalFilePROD: ' ',
      currentPage: 1,
      perPage: 3,
      totalRows: 0,
      fields: [
        { key: "error.path", label : 'Archivo' },
       
       { key: "error.dif", label: 'Diferencia' },
       // 'Fecha Consulta',
      ],
    }
  },
  methods:{

     loadData: function () {
      
      this.fechaConsulta = new Date();
      this.loading = true;
      

      axios.get('http://localhost:9002/SERVERPROD_vs_SERVERPRODHA')
      .then(function (response) {
        this.loading = false;
        console.log(response.data)
        this.layeringDiff = response.data;
        }.bind(this)) 
        .catch(e => {
        this.loading = false;
      })

    },
    getRowCount (items) {
      return items.length
    },
    rowClicked(rowData) {
      console.log(rowData.error)

     


     this.h = ghDiffHTML(rowData.error.filePROD, rowData.error.filePRODHA, {
        fileName: rowData.error.path,//'archivo.js',
        outputFormat:'side-by-side'  // 'line-by-line' // or 'side-by-side' 
      })

      console.log(html1)

    },
    
  },
  

    
   created(){

    this.loadData();

   // setInterval(function () {
      //this.loadData();
      
   // }.bind(this), miliseconds); 
    
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

