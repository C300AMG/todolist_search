<template>
	<div id="app">
	<b-container>
		<!-- TITLE : START -->
		<comp-title></comp-title>
		<!-- TITLE : END -->
		<b-row>
			<!-- CONTROL (SEARCH + SORT + ADD) : START -->
			<comp-controls
			
			 v-bind:stringSearch="stringSearch"
			 v-on:handelSearch="handelSearch"
			 ></comp-controls>
			 
			<!-- CONTROL (SEARCH + SORT + ADD) : END -->
			<!-- FORM : START -->
			<comp-form 
			v-on:changeStatus="changeStatus"
			v-bind:isShowForm="isShowForm"
			></comp-form>
			<!-- FORM : END -->
		</b-row>
		<list-task
		v-bind:listTask="listTaskSearch"
		></list-task>
	</b-container>
	</div>
</template>
<script>
// cách import các components 
import compControls from './components/compControls';
import ListTask from './components/ListTask';
import CompTitle from './components/compTitle';
import compForm from './components/compForm'

// cách import các data
import listTask from './mockData/tasks'
export default {
	name: 'app',
	data () {
		return {
			// Lưu dữ liệu Phần ListTask 
			listTask : listTask,
			isShowForm:false,
			stringSearch:'', //ràng buộc dữ liệu 2 chiều cho chức năng search

		}
	},
	computed:{
		// biến đổi bước trung giản để lọc ra listItem mới và truyền cái listItem này vào trong listTassk
		//Đơn giản như sau : mình sẽ tìm kiếm trong stringSearch có tồn tại trong bất kì cái item nào hay không
		listTaskSearch(){
			const { stringSearch } = this;
			//  
			var newItems = [];
			this.listTask.forEach(function(item,index){
				if(item.taskName.toLowerCase().includes(stringSearch.toLowerCase()) === true){
					newItems.push(item);
				}
				
				
				
			})
			// console.log('newItems=',newItems );
			
			return newItems;
			//console.log("newItems = ",newItems);
			
		}
	},
	components: {
		ListTask,
		CompTitle,
		compControls,
		compForm
	},
	created() {
		// console.log('created = ',listTask );
	
	},
	methods: {
		handelSearch(data){
			this.stringSearch = data;
			console.log('handelSearch trong app.vue',data);
		},
		changeStatus(){
			console.log('changeStatus đây là ở trong file app');
			this.isShowForm = !this.isShowForm 
			// if(this.isShowForm == false){
				
			// }
			// return this.isShowForm = false
		},
		
	},
}
</script>

<style>
	
body {
    padding: 100px 0;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

</style>
