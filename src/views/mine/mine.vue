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
			<ul class="bar-con">
				<li class="item1">
					<span>0</span>
					<p>参与话题</p>
				</li>
				<li>
					<span>0</span>
					<p>加入圈子</p>
				</li>
			</ul>
		</div>
		<!-- content -->
		<div class="mineCon">
			<ul class="list">
				<li></li>

			</ul>

			
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
	background-image: url("../../assets/mine-top.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 7.5rem;
    display: flex;
    background-color: greenyellow;
    margin-bottom: .8rem;
    border-bottom: 1px solid #e1e1e1;
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
/*Banner*/
.mineBanner{
    position: relative;

}
ul.bar-con{
	display: flex;
    padding: 0;
}
.bar-con li{
	flex: 1;
    width: 40%;
    display: inline-block;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
}
.bar-con li.item1{
	border-right: 1px solid #e1e1e1;/*添加中间分割线*/
}
/*content*/

/*.itemCon{
	border-bottom: 1px solid #e1e1e1;
    padding: 0.9rem;
    text-align: left;
}
.mineCon span{
	padding-right: 1rem;
    color: yellow;
    font-size: .9rem;
}*/
</style>