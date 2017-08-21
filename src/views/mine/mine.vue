<template>
	<div class="mine">
		<!-- 我的 -->
		<mt-cell v-for="n in 9" :title="'订单 ' + n" />
		
	</div>
</template>

<script>


	export default {

		data(){
			return{
				value:'',
				// 中间 服务列表
				
				selected: "我的",
				
				
				

			}
		},
		methods:{

		}

	}
	
</script>

<style>


</style>