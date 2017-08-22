<template>
	<div class="help">
		<!-- 互动 -->  
		<mt-cell v-for="n in 10" :title="'订单 ' + n" /> 
	</div>
</template>

<script>


    
	export default {

		data(){
			return{
				value:'',
				// 中间 服务列表
				
				selected: "互动",
				
				

			}
		},
		methods:{

		}

	}
	
</script>

<style scoped>
	

</style>