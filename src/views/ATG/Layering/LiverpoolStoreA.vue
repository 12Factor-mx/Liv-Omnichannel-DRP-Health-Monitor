<template>

  <div class="animated fadeIn">
      

      <b-col >
        <b-row >
          <b-card  class="w-100" >
          
               <template slot="header">
                 <label > Liverpool Store A </label>

               </template>

                <b-row >
                  <b-col  lg="12">

                    <b-table class="m-3 mx" :items="envs" hover="hover" striped="striped" bordered="bordered"  responsive="sm" :fields="fieldsEnv" >
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
   




export default {

  name: 'LiverpoolStoreA',

  data(){

    
    return {
      envs:[{name:"Server PROD vs Server PRODHA", 
             route:"/#/ATG/Layering/LiverpoolStoreA/ServerPRODvsServerPRODHA"}, 
            {name:"SVN PROD vs Server PROD", 
             route:"/#/ATG/Layering/LiverpoolStoreA/SVNPRODvsServerPROD"} ,  
            {name:"SVN PROD vs SVN PRODHA",
             route:"/#/ATG/Layering/LiverpoolStoreA/SVNPRODvsSVNPRODHA"},
            {name:"SVN PRODHA vs Server PRODHA",
             route:"/#/ATG/Layering/LiverpoolStoreA/SVNPRODHAvsServerPRODHA"}], 
      fieldsEnv: [
        { key: "name", label : 'Ambiente' },
       
       // 'Fecha Consulta',
      ],
    }
  }
}

</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }

</style>

