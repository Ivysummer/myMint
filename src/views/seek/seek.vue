<template>
	<div class="seek">
		<!-- 就医 -->
		<div class="headSearch">
			<div class="locate">
				<span>广州</span>
				<i class="fa fa-angle-down" aria-hidden="true"></i>
			</div>
			<mt-search :value.sync="value" cancel-text="取消" placeholder="疾病/医院/科室/医生等">
			</mt-search>					
		</div>
		<div class="con">
		    <!-- 轮播图 -->
			<div class="swipe_bar">
				<mt-swipe :auto="4000">
				  <mt-swipe-item><img src="../../assets/swipe1.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/swipe2.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../../assets/swipe3.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>
			<!-- 相关服务 -->
	    	<ul class="service_nav">
	    		<li v-for="item in serListsTypes">
	    			<figure>
	    				<img :src="item.image_url">
	    				<figcaption>{{ item.title }}</figcaption>
	    			</figure>
	    			
	    		</li>
	    	</ul>
	    	<!-- 资讯 -->
			<div class="news">
				<p>资讯</p>
				<div class="msg-tab">
					<mt-navbar v-model="msgSelected">
					  <mt-tab-item id="recommend">推荐</mt-tab-item>
					  <mt-tab-item id="health">保健</mt-tab-item>
					  <mt-tab-item id="diet">饮食</mt-tab-item>
					  <mt-tab-item id="doctor">中医</mt-tab-item>
					  <mt-tab-item id="old">老人</mt-tab-item>
					  <button><i class="fa fa-plus" aria-hidden="true"></i></button>
					</mt-navbar>

					<!-- tab-container -->
					<mt-tab-container v-model="msgSelected">
					<!-- 推荐 -->
					  <mt-tab-container-item id="recommend">
					    <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
					    <ul class="recommendList">
					    	<li v-for="item in recommendList">
					    		<hgroup>
					    			<p>{{ item.title }}</p>
					    			<span>{{ item.conut }}赞</span>
					    		</hgroup>
					    		<section>
					    			<img :src="item.image_url">
					    		</section>
					    		
					    	</li>
					    </ul>
					  </mt-tab-container-item>
					  <!-- 保健 -->
					  <mt-tab-container-item id="health">
					    <ul class="healthList">
					    	<li v-for="(item,index) in healthList">
					    		<div class="healthSpecial" v-if="index==0 ||index == 3">
					    			<hgroup>
					    				<p> {{ item.title }} </p>
					    				<img :src="item.image_url">	
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div>
					    		<div class="others" v-else>
					    			<hgroup>
					    				<p>{{ item.title }}</p>
					    				<span>{{ item.conut }}赞</span>
					    			</hgroup>
					    			<section>
					    				<img :src="item.image_url">
					    			</section>
					    		</div>
					    		
					    	</li>
					    </ul>
					  </mt-tab-container-item>
					  <!-- 饮食 -->
					  <mt-tab-container-item id="diet">
					    <ul class="dietList">
					    	<li v-for="item in dietList">
					    		<hgroup>
					    			<p>{{ item.title }}</p>
					    			<span>{{ item.conut }}赞</span>
					    		</hgroup>
					    		<section>
					    			<img :src="item.image_url">
					    		</section>
					    		
					    	</li>
					    </ul>
					  </mt-tab-container-item>
					  <!-- 中医 -->
					   <mt-tab-container-item id="doctor">
					    <ul class="doctorList">
					    	<li v-for="(item,index) in doctorList">
					    		<div class="doctorSpecial" v-if="index == 3">
					    			<hgroup>
					    				<p> {{ item.title }} </p>
					    				<img :src="item.image_url">	
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div>
					    		<!-- 展示一列图片（未实现） -->
					    		<!-- <div class="another" v-else-if="index == 1">
					    			<hgroup>
					    				<p> {{ item.title }} </p>
					    				<div class="groupImg" v-for="arr in doctorList.arrayImg">
					    					<img :src="item.arr.image_url">
					    				</div>
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div> -->
					    		<div class="others" v-else>
					    			<hgroup>
					    				<p>{{ item.title }}</p>
					    				<span>{{ item.conut }}赞</span>
					    			</hgroup>
					    			<section>
					    				<img :src="item.image_url">
					    			</section>
					    		</div>
					    		
					    	</li>
					    </ul>

					  </mt-tab-container-item>
					  <!-- 老人 -->
					   <mt-tab-container-item id="old">
					    <ul class="oldList">
					    	<li v-for="(item,index) in oldList">
					    		<div class="oldSpecial" v-if="index == 3 || index == 7">
					    			<hgroup>
					    				<p> {{ item.title }} </p>
					    				<img :src="item.image_url">	
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div>
					    		<!-- 展示一列图片（未实现） -->
					    		<!-- <div class="another" v-else-if="index == 1">
					    			<hgroup>
					    				<p> {{ item.title }} </p>
					    				<div class="groupImg" v-for="arr in doctorList.arrayImg">
					    					<img :src="item.arr.image_url">
					    				</div>
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div> -->
					    		<div class="noImg" v-else-if="index == 2" >
					    			<hgroup>
					    				<p>{{ item.title }}</p>
					    				
					    			</hgroup>
					    			<section>
					    				<span>{{ item.conut }}赞</span>
					    			</section>
					    		</div>
					    		<div class="others" v-else>
					    			<hgroup>
					    				<p>{{ item.title }}</p>
					    				<span>{{ item.conut }}赞</span>
					    			</hgroup>
					    			<section>
					    				<img :src="item.image_url">
					    			</section>
					    		</div>
					    		
					    	</li>
					    </ul>

					  </mt-tab-container-item>
					</mt-tab-container>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 相关服务
import img1 from '../../assets/drguahao.jpg' 
import img2 from '../../assets/guahao.png'
import img3 from '../../assets/zhifu.png'
import img4 from '../../assets/houzhen.jpg'
import img5 from '../../assets/jiankangcard.jpg'
import img6 from '../../assets/dangan.png'
// 推荐列表
import recomImg1 from '../../assets/recom1.jpg'
import recomImg2 from '../../assets/recom2.jpg'
import recomImg3 from '../../assets/recom3.jpg'
import recomImg4 from '../../assets/recom4.jpg'
// 保健列表
import healthImg1 from '../../assets/health1.jpg'
import healthImg2 from '../../assets/health2.jpg'
import healthImg3 from '../../assets/health3.jpg'
import healthImg4 from '../../assets/health4.jpg'
import healthImg5 from '../../assets/health5.jpg'
import healthImg6 from '../../assets/health5.jpg'

// 饮食列表
import dietImg1 from '../../assets/diet1.jpg'
import dietImg2 from '../../assets/diet2.jpg'
import dietImg3 from '../../assets/diet3.jpg'
import dietImg4 from '../../assets/diet4.jpg'
import dietImg5 from '../../assets/diet5.jpg'
// 中医列表
import doctorImg1 from '../../assets/diet1.jpg'
import doctorImg2 from '../../assets/diet1.jpg'
import doctorImg3 from '../../assets/diet1.jpg'
import doctorImg4 from '../../assets/diet1.jpg'
import doctorImg5 from '../../assets/diet1.jpg'
// 老人列表
import oldImg1 from '../../assets/diet1.jpg'
import oldImg2 from '../../assets/diet1.jpg'
import oldImg3 from '../../assets/diet1.jpg'
import oldImg4 from '../../assets/diet1.jpg'
import oldImg5 from '../../assets/diet1.jpg'
import oldImg6 from '../../assets/diet1.jpg'



	const arrayImg = ["dietImg2","dietImg3","dietImg4"];
	export default {

		data(){
			return{
				value:'',
				// 中间 服务列表
				serListsTypes:[
					{
						id:1,
						title:"当日挂号",
						image_url:img1

					},
					{
						id:2,
						title:"预约挂号",
						image_url:img2

					},
					{
						id:3,
						title:"医疗缴费",
						image_url:img3

					},
					{
						id:4,
						title:"候诊查询",
						image_url:img4

					},
					{
						id:5,
						title:"绑定健康卡",
						image_url:img5

					},
					{
						id:6,
						title:"健康档案",
						image_url:img6
					}

				],
				selected: "就医",
				//资讯
				msgSelected: "recommend",
				// 推荐列表
				recommendList: [
					{
						title:"营养专家怎么'管不住嘴'？一道菜不超过三筷子",
						conut:360,
						image_url:recomImg1
					},
					{
						title:"健康不是‘不生病’！中医眼中的健康标准有10个，看看你有多健康？",
						conut:376,
						image_url:recomImg2
					},
					{
						title:"秋天这五种瓜超养人，错过要再等一年！",
						conut:541,
						image_url:recomImg3
					},
					{
						title:"孕期出现问题怎么办？这些都是你要知道的",
						conut:412,
						image_url:recomImg4
					}

				],
				//保健列表
				healthList:[
					{
						title:"长时间玩手机眼睛疼怎么办？",
						conut:350,
						image_url:healthImg1
					},
					{
						title:"水果蔬菜放冰箱保鲜？这些生活常识错误你中了几个？",
						conut:346,
						image_url:healthImg2
					},
					{
						title:"流鼻血的时候头要向上仰还是举手呢？",
						conut:312,
						image_url:healthImg5
					},
					{
						title:"被蚊子叮咬后千万别做这三件事",
						conut:632,
						image_url:healthImg3
					},
					{
						title:"长时间玩手机眼睛疼怎么办？",
						conut:350,
						image_url:healthImg1
					},
					{
						title:"水果蔬菜放冰箱保鲜？这些生活常识错误你中了几个？",
						conut:346,
						image_url:healthImg2
					},
					{
						title:"儿童睡眠不好怎么办？几招轻松搞定！",
						conut:537,
						image_url:healthImg4
					},
					{
						title:"半夜小腿抽筋不仅仅是缺钙啊...",
						conut:322,
						image_url:healthImg6
					}
				],
				//饮食列表
				dietList:[
					{
						title:"吃货注意！盛夏吃鱼生吃进这条虫...",
						conut:486,
						image_url:dietImg1
					},
					{
						title:"常吃蓝莓的这些好处你知道吗？",
						conut:552,
						image_url:dietImg2
					},
					{
						title:"榴莲味道虽独特，但营养价值很高哦！",
						conut:565,
						image_url:dietImg3
					},
					{
						title:"多吃4种菜，你比同龄人更容易长寿。餐桌上很常见！",
						conut:533,
						image_url:dietImg4
					},
					{
						title:"不能让味精变'害人精',用的时候别犯4个错！",
						conut:518,
						image_url:dietImg5
					}
				],
				// 中医列表
				doctorList:[
					{
						title:"用了20年的祛湿方：一粥一水",
						conut:586,
						image_url:doctorImg1
					},
					{
						title:"中医：护好四根更长寿 ",
						conut:552,
						image_url:doctorImg2
					},
					{
						title:"不开心也会引起感冒，这个你一定不知道",
						conut:565,
						image_url:doctorImg3
					},
					{
						title:"中医补血就是治 ‘贫血’",
						conut:533,
						image_url:doctorImg4
					},
					{
						title:"这些穴位对心脏好，越按越健康",
						conut:518,
						image_url:doctorImg5
					}
				],
				//老人列表
				oldList:[
					{
						title:"老年人腰疼怎么办？三招可自疗",
						conut:457,
						image_url:oldImg1
					},
					{
						title:"老年痴呆不不止记忆力减退，爸妈出现这种症状要留意！",
						conut:311,
						image_url:oldImg2
					},
					{
						title:"''三不'，'三坚持'收获身心健康",
						conut:548,
						
					},
					{
						title:"老年人消化不好怎么办？",
						conut:630,
						image_url:oldImg3
					},
					{
						title:"老人改善体质注意日常饮食",
						conut:351,
						image_url:oldImg4
					},
					{
						title:"老年人睡眠质量不好怎么办？",
						conut:396,
						image_url:oldImg5
					},
					{
						title:"这几种老人常见的用药坏习惯要避免",
						conut:347,
						image_url:oldImg1
					},
					{
						title:"老年人提高免疫力可以多吃鸡肉鸡蛋",
						conut:482,
						image_url:oldImg6
					}
				],

			}
		},
		methods:{

		}

	}
	
</script>

<style>
/*头部*/
.headSearch{
	position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: inline-block;
    z-index: 1;
}
.locate{
	position: absolute;
	display: inline-block;
	top: 50%;
    left: 3%;
    font-size: 0.8rem;
}
.mint-searchbar-cancel{
	font-size: 0.8rem;
}
.mint-search{
	height: 100%;
	margin: 10px 0px 10px 50px;
}
.mint-searchbar{
    border-radius: 30px;
    background-color: #E0E0E0;
    margin-left: 20px;
}
.mint-searchbar-inner{
    border-radius: 20px;
}
.mint-searchbar-inner input{
    margin-left: 5px;	
}
/*中间*/
.con{
	position: relative;
}
.swipe_bar{
	position: relative;
    width: 100%;
    height: 10rem;
    margin-bottom: .3rem;
}
.swipe_bar img{
	width: 24rem;
    height: 10rem;
}
ul.service_nav{
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
	overflow: hidden;
	font-size: 0.5rem;
}
li{
	float: left;
    width: 33%;
    display: flex;
    justify-content: center;
    padding: .4rem 0;
}
li img{
	width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-bottom: .3rem;
}
.figcaption{
	color: #5B5B5B;
}
/*资讯*/
.news > p {
    text-align: left;
    margin-left: .8rem;
    margin: .5rem auto;
    font-size: .8rem;
}
.mint-navbar{
	border-bottom: 1px solid #e1e1e1;
}
.mint-navbar button{
	background-color: #fff;
    border-width: 0;
    border-color: #fff;
    outline-color: #fff;
    color:#2894FF;
}
.msg-tab .mint-navbar > .mint-tab-item.is-selected{
	color: #26a2ff;
}
/*推荐*/
 ul.recommendList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
ul.recommendList li{
	width: 100%;
	border-bottom: 1px solid #e1e1e1;
}
hgroup{
    text-align: left;
    width: 70%;
}
hgroup p{
    font-size: .7rem;
    color: #272727;
    font-weight: 600;
    font-family: inherit;
    margin: 5px 0;
}
hgroup span{
	font-size: .2rem;
}
section{
    margin-left: 2rem;

}
section img {
    width: 4.2rem;
    height: 3.5rem;
    border-radius: 30%;
}
/*保健*/
 ul.healthList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
ul.healthList li{
	width: 100%;
	border-bottom: 1px solid #e1e1e1;
}
ul.healthList li section img {
    width: 4.2rem;
    height: 3.5rem;
    border-radius: 0;
}
.others{
	display: inherit;
    width: 100%;
}
/*保健 v-if 样式*/
.healthSpecial{
	width: 100%;
    margin-bottom: 0.8rem;
}
.healthList .healthSpecial hgroup {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.healthSpecial hgroup img {
    border-radius: 0;
    width: 100%;
    height: 100%;
}
.healthSpecial section{
	margin-left: 0;
    overflow: hidden;
    
}
.healthSpecial section span {
    font-size: .2rem;
    float: left;
}
/*饮食*/
ul.dietList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
ul.dietList li{
	width: 100%;
	border-bottom: 1px solid #e1e1e1;
}
/*中医*/
 ul.doctorList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
ul.doctorList li{
	width: 100%;
	border-bottom: 1px solid #e1e1e1;
}
ul.doctorList li section img {
    width: 4.2rem;
    height: 3.5rem;
    border-radius: 0;
}
.others{
	display: inherit;
    width: 100%;
}
/*中医 v-if 样式*/
.doctorSpecial{
	width: 100%;
    margin-bottom: 0.8rem;
}
.doctorList .doctorSpecial hgroup {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.doctorSpecial hgroup img {
    border-radius: 0;
    width: 100%;
    height: 100%;
}
.doctorSpecial section{
	margin-left: 0;
    overflow: hidden;
    
}
.doctorSpecial section span {
    font-size: .2rem;
    float: left;
}

/*中医 v-else-if 样式*/
.another{
	width: 100%;
    margin-bottom: 0.8rem;
}
.doctorList .another hgroup {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.another hgroup img {
    border-radius: 0;
    width: 100%;
    height: 100%;
}
.another section{
	margin-left: 0;
    overflow: hidden;
    
}
.another section span {
    font-size: .2rem;
    float: left;
}
/*老人*/
 ul.oldList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
ul.oldList li{
	width: 100%;
	border-bottom: 1px solid #e1e1e1;
}
ul.oldList li section img {
    width: 4.2rem;
    height: 3.5rem;
    border-radius: 0;
}
.others{
	display: inherit;
    width: 100%;
}
/*老人 v-if 样式*/
.oldSpecial{
	width: 100%;
    margin-bottom: 0.8rem;
}
.oldList .oldSpecial hgroup {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.oldSpecial hgroup img {
    border-radius: 0;
    width: 100%;
    height: 100%;
}
.oldSpecial section{
	margin-left: 0;
    overflow: hidden;
    
}
.oldSpecial section span {
    font-size: .2rem;
    float: left;
}
/*老人 v-else-if 样式*/
.another{
	width: 100%;
    margin-bottom: 0.8rem;
}
.oldList .another hgroup {
    width: 100%;
    height: 12rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.another hgroup img {
    border-radius: 0;
    width: 100%;
    height: 100%;
}
.another section{
	margin-left: 0;
    overflow: hidden;
    
}
.another section span {
    font-size: .2rem;
    float: left;
}
/*老人 v-else-if 样式*/
.noImg{
	width: 100%;
    margin-bottom: 0.8rem;
}
.oldList .noImg hgroup {
    margin-bottom: 2rem;
}
.noImg section{
	margin: 0;
    overflow: hidden;
    
}
.noImg section span {
    float: left;
    font-size: .2rem;
}

/*尾部*/
.footer{
	height: 4rem;
    margin-top: .9rem;
    position: relative;
}
.mint-tabbar{
	position: fixed;
}
.footer i{
	display: block;
    margin-bottom: .9rem;
    font-size: 1.3rem;

}
/*.footer span{
}*/
.footer .mint-tabbar > .mint-tab-item.is-selected{
	
	text-decoration: none;
}

.footer .mint-tab-item-label{
	
}	

</style>