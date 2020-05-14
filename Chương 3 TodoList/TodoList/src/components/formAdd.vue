<template>
  <!-- ADD : START -->
    <div class="form-group add-task">
        <button 
        v-if="!isShowForm"
        v-on:click="ClickButtonAdd"
        type="button" class="btn btn-info btn-block">Add Task</button>
        <button 
        v-else
        v-on:click="ClickButtonAdd"
        type="button" class="btn btn-warning btn-block" >Close Form</button>
    </div>
<!-- ADD : END -->
</template>

<script>
export default {
    name:"form-add",
    methods: {
        
    },
     props:{
        isShowForm:{type:Boolean, default:false}
    },
    data() {
        return {
            
        }
    },
    methods: {
        ClickButtonAdd(){
           console.log('Trong file form add');
           this.$emit('changeStatusWhenClickAdd');
        },
       
    },
}
</script>

<style>

</style>