<template>
<div class="col-12">
    <div class="input-group">
        <input 
        v-bind:value="stringSearch"
        v-on:input="handelSearch"
        type="text" class="form-control" placeholder="Search for..." />
        <span class="input-group-append">
        <button 
        v-on:click="handleClear"
        class="btn btn-info" type="button">Clear!</button>
        </span>
    </div>
</div>

</template>

<script>

/* 

chuyển đổi dạng v-model thành v-bind kết hợp với v-on input

*/
export default {
    name: 'comp-search',
    props:{
      stringSearch:{type:String, default:''}
    },
    data() {
        return {
            
        }
    },
    methods: {
           handleClear(){
            // muốn có sự kiện khi click vào nút clear thì cho 1 chuỗi rỗng
                // console.log('handleClear Đây sẽ là chuỗi rỗng');
              this.$emit('handelSearch','');
        },  
        handelSearch(e){
            // console.log(e.target);
            // console.log('handelSearch trong file compSearch');
            this.$emit('handelSearch',e.target.value);
        },
     
    },
}
</script>

<style>

</style>