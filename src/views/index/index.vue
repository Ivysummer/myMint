<template>
	<div class="index">
		<div class="headSearch">
			<mt-search :value.sync="value" cancel-text="取消" placeholder="疾病/医院/科室/医生等"></mt-search>
		</div>

		<div class="con">
			<div class="swipe_bar">
				<mt-swipe :auto="4000">
				  <mt-swipe-item><img src="../../assets/swipe1.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/swipe2.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/swipe3.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>
	    	<ul class="service_nav clearfix">
	    		<li v-for="item in serListsTypes">
	    			<figure>
	    				<img :src="item.image_url">
	    				<figcaption>{{ item.title }}</figcaption>
	    			</figure>
	    			
	    		</li>
	    	</ul>
		</div>


	</div>
</template>

<script>

	export default {
		data(){
			return{
				value:'',
				serListsTypes:[
					{
						id:1,
						title:"当日挂号",
						image_url:"/assets/drguahao.jpg"

					},
					{
						id:2,
						title:"预约挂号",
						image_url:"../../assets/guahao.png"

					},
					{
						id:3,
						title:"医疗缴费",
						image_url:"../../assets/zhifu.png"

					},
					{
						id:4,
						title:"候诊查询",
						image_url:"../../assets/drguahao.jpg"

					},
					{
						id:5,
						title:"绑定健康卡",
						image_url:"../../assets/drguahao.jpg"

					},
					{
						id:6,
						title:"健康档案",
						image_url:"../../assets/drguahao.jpg"

					}

				]
			}
		},
		methods:{

		}

	}
	
</script>

<style>
.headSearch{
	position: relative;
	width: 100%;
    height: 50px;
    margin-bottom: 10px;
}
.mint-search{
	height: 100%;
}

.swipe_bar{
	position: relative;
	width: 100%;
	height: 200px;
	margin-bottom: 60px;
}
.swipe_bar img{
	width: 400px;
	height: 200px;
}
ul.service_nav{
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
	
}
li{
	float: left;
	width: 33%;
	margin-bottom: 20px;
}
li img{
	width: 40px;
    height: 40px;
    border-radius: 50%;
}


	

</style>