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
				<li class="item1 cutoff">
					<span>0</span>
					<p>参与话题</p>
				</li>
				<li class="item1">
					<span>0</span>
					<p>加入圈子</p>
				</li>
			</ul>
		</div>
		<!-- content -->
		<div class="mineCon">
			<ul class="list">
				<li>
					<mt-cell title="预约记录" is-link>
						<section slot="icon" class="fa fa-medkit" style="color:#707038;" src=""></section>
					</mt-cell>
					<mt-cell title="咨询记录" is-link>
						<section slot="icon" class="fa fa-commenting-o" style="color:#0072E3;" src=""></section>
					</mt-cell>
					<mt-cell title="支付记录" is-link>
						<section slot="icon" class="fa fa-usd" style="color:#C6A300;" src=""></section>
					</mt-cell>
				</li>
				<div class="divider"></div>
				<li>
					<mt-cell title="就诊人管理" is-link>
						<section slot="icon" class="fa fa-book" style="color:#0072E3;" src=""></section>
					</mt-cell>
					<mt-cell title="我的收藏" is-link>
						<section slot="icon" class="fa fa-star-o" style="color:#C6A300;" src=""></section>
					</mt-cell>
					<!-- <mt-cell title="资讯推送" is-link>
						<section slot="icon" class="fa fa-paper-plane" src=""></section>
					</mt-cell> -->
					<!-- <mt-switch name="资讯推送" :value.sync="value">
						<section slot="icon" class="fa fa-paper-plane" src=""></section>
					</mt-switch> -->
					<mt-switch v-model="value" @change="turn">	
						<span class="pushNew"><i class="fa fa-paper-plane" style="color:#00DB00;" aria-hidden="true"></i>资讯推送</span>
						<!-- <section slot="icon" class="fa fa-paper-plane" src=""></section> -->
					</mt-switch>
				</li>
				<div class="divider"></div>
				<li>
					<mt-cell title="邀请注册" is-link>
					  <section slot="icon" class="fa fa-share-alt-square" style="color:#C6A300;" src=""></section>
					</mt-cell>
					<mt-cell title="更多" is-link>
					  <section slot="icon" class="fa fa-ellipsis-h" style="color:#00DB00;" src=""></section>
					</mt-cell>
				</li>

			</ul>

			
		</div>
	</div>
</template>

<script>


	export default {

		data(){
			return{
				value:false,
				// 中间 服务列表
				
				selected: "我的",
				
				
				

			}
		},
		methods:{
				turn: function(){
					console.log(this.value)
				}
		}

	}
	
</script>

<style>
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
ul.goldIcon li{
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
    margin:0;
}
.bar-con li.item1{
	flex: 1;
    width: 40%;
    display: inline-block;
    text-align: center;
    /*border-bottom: 1px solid #e1e1e1;*/
}
.bar-con li.cutoff{
	border-right: 1px solid #e1e1e1;/*添加中间分割线*/
}
.item1 span{

}
.item1 p{
	margin: 0;
	font-size: .8rem;

}
/*content*/
.mineCon{
	margin-top: -1rem;
	text-align: left;
}
ul.list{
	display: block;
	padding: 0;
}
.list li{
	width: 100%;
}
.list li section{
	padding-right: 1rem;
    color: #844200;
    font-size: .9rem;
	width: .8rem;
    height: .8rem;
}
.divider{
	margin-top: -5px;
    border-bottom: 1px solid #e1e1e1;/*分割线*/
}
/*资讯推送*/
label{
	border-top: 1px solid #e1e1e1;
    height: 2.4rem;
    width: 100%;
}
.mint-switch-core{
	position: absolute;
    top: 22%;
    left: 84%;
    width: 39px;
    height: 19px;
}
.mint-switch-core::before{
	width: 17px;
    height: 17px;
}
.mint-switch-core::after{
	width: 17px;
    height: 17px;
}
.pushNew{
    font-size: .8rem;
}
.pushNew i{
	padding-right: 1.1rem;
}

</style>