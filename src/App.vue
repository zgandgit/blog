<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log(this.$route.path)
    let urlPath = this.$route.path;
    let isDkCode = this.utils.wapIs(urlPath);
    let isPc = this.utils.isEquipment();
    if(!isPc){
      //移动端访问电脑站
      if(!isDkCode){
        this.$router.push({path: '/wap_home'});
      }
    }else{
      //pc端访问手机站
      if(isDkCode){
        this.$router.push({path: '/'});
      }
    }

  }
}
</script>

<style>

</style>
