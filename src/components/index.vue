<template>
  <div class="hello">
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger" @click="toast(1,2)">danger</mt-button>
  </div>
</template>

<script>

import { Toast } from 'mint-ui';
export default {
  name: 'hello',
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
