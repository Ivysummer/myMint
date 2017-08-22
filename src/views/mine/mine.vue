<template>
	<div class="mine">
	<!-- 我的 -->
	    <!-- Top -->
		<div class="mineheadTop">
			<div class="touxiang">
				<img src="../../assets/touxiang.jpg">
			</div>
            <section>
            	<div class="nickname">
            		<span>半缕暖阳<i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
            	</div>
        		<ul class="goldIcon">
        			<li><span><i class="fa fa-usd" aria-hidden="true">金币:71</i></span></li>
        			<li><span><i class="fa fa-pagelines" aria-hidden="true">健康币:0</i></span></li>
        		</ul>	
            
            </section>

		</div>
		<!-- banner -->
		<div class="mineBanner">
			
		</div>
		<!-- content -->
		<div class="minecCon">
			
		</div>
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

<style scoped>
/*Top*/
.mineheadTop{
	background-image: url(/static/img/mine-top.c29f8d9.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 7.5rem;
    display: flex;
}
.touxiang{
	width: 2.8rem;
    height: 2.8rem;
    display: inline-block;
    flex: 1;
    margin-top: 12%;
    margin-left: 10%;
}
.touxiang img{
	width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
}
.mineheadTop section{
	margin: 0;
    position: relative;
    margin-left: 21%;
    margin-top: 12%;
}

.nickname{
    display: inline-block;
    margin-left: -100%;
    margin-bottom: .8rem;
}
.nickname span{
	font-size: .8rem;
}
.nickname span i{
	display: inline-block;
    width: .9rem;
    height: .9rem;
    position: relative;
    margin-left: 1rem;
}
ul.goldIcon{
	overflow: hidden;
    padding: 0;
    margin: 0;
    margin-left: -46%;

}
ul li{
	width: 38%;
    display: inline-block;
    padding-left: .1rem;
    text-align: left;
    font-size: 0.8rem;

}

</style>