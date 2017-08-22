<template>
	<div class="health">
		<!-- 健康 --> 
		<mt-cell v-for="n in 5" :title="'订单 ' + n" />
	</div>
</template>

<script>

	export default {
		data(){
			return{
				value:'',
				// 中间 服务列表
				selected: "健康",
				
				
				

			}
		},
		methods:{

		}

	}
	
</script>

<style scoped>


</style>