<template>
	<div class="health">
		 <!-- 健康 -->
		<mt-tab-container-item id="健康">  
		  <mt-cell v-for="n in 5" :title="'订单 ' + n" />  
		</mt-tab-container-item>

	</div>

</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>