<template>

  <div class="col-12 col-lg-6">
   <div class="row">
      <!-- SORT : START -->
        <comp-Sort-Controls />
      <!-- SORT : END -->
      <!-- SEARCH : START -->
        <comp-Search-Controls 
       
        v-on:handelSearch="handelSearch"
        v-bind:stringSearch="stringSearch"/>
      <!-- SEARCH : END -->
   </div>
</div>
</template>

<script>


import compSortControls from './compSortControls';       
import compSearchControls from './compSearchControls';


export default {
    name:'comp-controls',
    props:{
      stringSearch:{type:String, default:''}
    },
    
    data() {
        return {
            
        }
    },
    methods: {
     
        handelSearch(data){
          console.log('handelStringSearch trong file controls',data);
          this.$emit('handelSearch',data);
        },
       
    },

     components:{
        compSortControls, 
        compSearchControls, 
      
        
    },
   

}
</script>

<style>

</style>