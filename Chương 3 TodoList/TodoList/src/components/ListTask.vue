<template>
  <div class="list-task">
		<!-- LIST : START -->

		<div class="card panel-success">
			<div class="card-header">List Task</div>
			<table class="table table-hover ">
				<thead>
					<tr>
						<th style="width: 10%" class="text-center">#</th>
						<th>Task</th>
						<th style="width: 20%" class="text-center">Level</th>
						<th style="width: 160px">Action</th>
					</tr>
				</thead>

				<tbody v-if="listTask.length !== 0">
                  <list-item 
				  v-for="(task, index) in listTask" 
				  v-bind:key="task.id"
				  v-bind:task="task"
				  v-bind:index="index +1"
				  ></list-item>
                  <!-- <list-item></list-item>
                  <list-item></list-item> -->
					
				</tbody>
				<tbody v-else>
					<tr>
						<td colspan="4"><h3 style="color:Red">Không có giá trị nào phù hợp !!	</h3></td>
					</tr>
				</tbody>

			</table>
		</div>
  </div>
</template>

<script>
import ListItem from './ListItem';
export default {
	name:"list-task",
	   props:{
        listTask : {type:Array, default:[]}
    },
   	data () {
		return {
		
		}
	},
	components: {
		ListItem
	},
	methods: {
		
	},
}
</script>

<style>

</style>