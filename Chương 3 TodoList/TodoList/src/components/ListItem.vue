<template>
<!-- Danh sách thế này, sau này chỉ chạy vòng for là xong -->
    <tr>
        <td class="text-center">{{ index}}</td>
        <td>{{task.taskName}}</td>
        <td class="text-center"><span class="badge" v-bind:class="getClassLevel">{{ getLevelName}}</span></td>
        <td>
        <button type="button" class="btn btn-warning">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
// import cái mảng vào 
import LevelClass from '../mockData/level.js';
export default {
    name: "list-item",
    props:{
        task:{type:Object, default:null},
        index:{type:Number}
    },
    created() {
        console.log('ListItem = ',LevelClass);
    },
    data() {
        return {
                LevelClass:LevelClass
        }
    },
    computed: {
            getLevelName(){
                return this.LevelClass[this.task.level].name;
            //     switch (this.task.level) {
            //         case 0:
            //             return  "Small";
                
            //         case 1:
            //             return "Medium";
               
            //         case 2:
            //             return "High";
                
                
            //         default:
            //              return  "";
                 
            // }
        
        },
        getClassLevel(){
            return this.LevelClass[this.task.level].class;
            // switch (this.task.level) {
            //     case 0:
            //         return { 'badge-dark': true};
             
            //     case 1:
            //         return { 'badge-success': true};
               
            //     case 2:
            //         return { 'badge-danger': true};
                
            
            //     default:
            //         return {};
                   
            // }
        }
        
    },
    methods: {
            
        },

}
</script>

<style>

</style>