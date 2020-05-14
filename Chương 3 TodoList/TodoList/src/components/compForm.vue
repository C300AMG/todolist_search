<template>
<!-- <div class="col-12 col-lg-6"> -->
    <b-col cols="12" lg="6">
    <form-add
    v-bind:isShowForm="isShowForm"
    v-on:changeStatusWhenClickAdd="changeStatusWhenClickAdd"
    ></form-add>
<form 

v-if="isShowForm"
 action="" method="POST" class="form-inline justify-content-between">
   <div class="form-group">
      <label class="sr-only" for="">label</label>
      <input type="text" class="form-control" placeholder="Task Name" />
   </div>
    <div class="form-group">
        <label class="sr-only" for="">label</label>
        <select name="ds" class="form-control" required="required">
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
        </select>
    </div>
   <button type="button" class="btn btn-primary">Submit</button>
   <button 
   v-on:click="cancel"
   type="button" class="btn btn-secondary">Cancel</button>
</form>
</b-col>
<!-- </div> -->
<!-- FORM : END -->
</template>

<script>
import formAdd from './formAdd'
export default {    
    name:"comp-form",
    props:{
        isShowForm:{type:Boolean, default:false}
    },
    data() {
        return {
            
        }
    },
    components:{
        formAdd
    },
    methods: {
        changeStatusWhenClickAdd(){
            console.log('changeStatus trong file compForm');
            this.$emit('changeStatus');
        },
        cancel(){
            this.$emit('changeStatus');

            //reset lại 1 mảng rổng
        }
    },
}
</script>

<style>

</style>