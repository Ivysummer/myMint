<template>
  <div class="index">
      <div class="btn">
          <mt-button type="default">default</mt-button>
          <mt-button type="primary">primary</mt-button>
          <mt-button type="danger" @click="toast(1,2)">danger</mt-button>
      </div>
      <div>
          <mt-search :value.sync="value" cancel-text="取消" placeholder="疾病/医院/科室/医生等"></mt-search>
      </div>
  </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      toast:function(a,b){
          // this.$toast('Upload Complete');
          Toast('这是弹框信息！要全局引入哦！');

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
