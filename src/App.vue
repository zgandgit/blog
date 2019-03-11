<template>
  <div id="app">
    <router-view v-if="isRouterAlive" v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
      return {
          reload: this.reload
      }
  },
  data () {
      return {
          isRouterAlive: true
      }
  },
  mounted(){
    // console.log(this.$route.path)
    // let urlPath = this.$route.path;
    // let isDkCode = this.utils.wapIs(urlPath);
    // let isPc = this.utils.isEquipment();
    // if(!isPc){
    //   //移动端访问电脑站
    //   if(!isDkCode){
    //     this.$router.push({path: '/wap_home'});
    //   }
    // }else{
    //   //pc端访问手机站
    //   if(isDkCode){
    //     this.$router.push({path: '/'});
    //   }
    // }

  },
    methods: {
        // 刷新方法
        reload: function () {
            this.isRouterAlive = false;
            // 该方法会在dom更新后执行
            this.$nextTick(function () { this.isRouterAlive = true })
        }
    }
}
</script>

<style>

</style>
