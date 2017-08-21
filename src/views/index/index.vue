<template>
	<div class="seek">
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
						<Seek></Seek>
			        </mt-tab-container-item>  
			      <!-- 健康 -->
			        <mt-tab-container-item id="健康">  
						<Health></Health>
			        </mt-tab-container-item> 
			       <!-- 互动 -->
				    <mt-tab-container-item id="互动">  
						<Help></Help>
				    </mt-tab-container-item>  
			      <!-- 我的 -->
				    <mt-tab-container-item id="我的">  
				       <Mine></Mine>
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
// 相关服务
import img1 from '../../assets/drguahao.jpg' 
import img2 from '../../assets/guahao.png'
import img3 from '../../assets/zhifu.png'
import img4 from '../../assets/houzhen.jpg'
import img5 from '../../assets/jiankangcard.jpg'
import img6 from '../../assets/dangan.png'


import Seek from './../seek/seek'
import Health from './../health/health'
import Help from './../help/help'
import Mine from './../mine/mine'

	const arrayImg = ["dietImg2","dietImg3","dietImg4"];
	export default {
		components:{
			Seek,
			Health,
			Help,
			Mine

		},
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