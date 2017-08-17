<template>
	<div class="index">
		<div class="page-tabbar ">  
		  <div class="page-wrap">  
		    <div class="page-title"></div>  
		    <div>  
		      <mt-cell class="page-part" title="当前选中" :value="selected" />  
		    </div>  
		
		  <!-- tabcontainer -->  
		    <mt-tab-container class="page-tabbar-container" v-model="selected">  
		    <!-- 就医 -->
		      <mt-tab-container-item id="就医">  
		        <!-- <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />  --> 
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
							  <mt-tab-item id="1">推荐</mt-tab-item>
							  <mt-tab-item id="2">保健</mt-tab-item>
							  <mt-tab-item id="3">饮食</mt-tab-item>
							  <mt-tab-item id="4"><i class="fa fa-plus" aria-hidden="true"></i></mt-tab-item>
							</mt-navbar>

							<!-- tab-container -->
							<mt-tab-container v-model="msgSelected">
							  <mt-tab-container-item id="1">
							    <mt-cell v-for="n in 10" :title="'content ' + n" />
							  </mt-tab-container-item>
							  <mt-tab-container-item id="2">
							    <mt-cell v-for="n in 4" :title="'content ' + n" />
							  </mt-tab-container-item>
							  <mt-tab-container-item id="3">
							    <mt-cell v-for="n in 6" :title="'content ' + n" />
							  </mt-tab-container-item>
							</mt-tab-container>
						</div>
					</div>
				</div>
		      </mt-tab-container-item>  
		       <!-- 健康 -->
		      <mt-tab-container-item id="健康">  
		        <mt-cell v-for="n in 5" :title="'订单 ' + n" />  
		      </mt-tab-container-item> 
		       <!-- 互动 -->
		      <mt-tab-container-item id="互动">  
		        <mt-cell v-for="n in 7" :title="'发现 ' + n" />  
		      </mt-tab-container-item>  
		      <!-- 我的 -->
		      <mt-tab-container-item id="我的">  
		        <div class="page-part">  
		         <!-- cell -->  
		          <mt-cell v-for="n in 12" :title="'我的 ' + n" />  
		        </div>  
		       <!--  <router-link to="/">  
		         
		          <mt-button type="danger" size="large">退出</mt-button>  
		        </router-link>   -->
		      </mt-tab-container-item>  
		    </mt-tab-container>  
		  </div>
          <!-- 尾部 -->
		  <div class="footer">
		  	<mt-tabbar v-model="selected">
		  	  <mt-tab-item id="就医">
		  	    <i class="fa fa-hospital-o" aria-hidden="true"></i>
		  	    <span>就医</span>
		  	  </mt-tab-item>
		  	  <mt-tab-item id="健康">
		  	    <i class="fa fa-heart-o" aria-hidden="true"></i>
		  	    <span>健康</span>
		  	  </mt-tab-item>
		  	  <mt-tab-item id="互动">
		  	    <i class="fa fa-comments-o" aria-hidden="true"></i>
		  	    <span>互动</span>
		  	  </mt-tab-item>
		  	  <mt-tab-item id="我的">
		  	    <i class="fa fa-user" aria-hidden="true"></i>
		  	    <span>我的</span>
		  	  </mt-tab-item>
		  	</mt-tabbar>
		  </div>

		</div> 


	</div>
</template>

<script>
import img1 from '../../assets/drguahao1.jpg' 
import img2 from '../../assets/guahao.png'
import img3 from '../../assets/zhifu.png'
import img4 from '../../assets/houzhen.jpg'
import img5 from '../../assets/jiankangcard.jpg'
import img6 from '../../assets/dangan.png'
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
				msgSelected: "1",

			}
		},
		methods:{

		}

	}
	
</script>

<style>
/*头部*/
.page-tabbar {  
    overflow: hidden;  
    /*height: 100vh;  */
  }  
  
  .page-wrap {  
    overflow: auto;  
    height: 100%;  
    padding-bottom: 100px;  
  } 
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
    border-radius: 10px;
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
	height: 200px;
	margin-bottom: 40px;
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
	overflow: hidden;
	
}
li{
	float: left;
	width: 33%;
	margin-bottom: 20px;
}
li img{
	width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #fff;
}
.news p {
    text-align: left;
    margin-left: 10px;
}
/*尾部*/
.footer{
	color: #fff;
	margin-top: 10px;
	display: fixed;
}
.footer i{
	display: block;
    margin-bottom: 15px;
    font-size: 24px;

}
/*.footer span{


}*/
.mint-tabbar{
	position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected{
	color: #3C3C3C;
	text-decoration: none;
}

.mint-tab-item-label{
	color: #3C3C3C;
}	

</style>