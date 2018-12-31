<template>
  <!--heater-->

    <el-row>
      <div class="container">
        <el-row>
          <el-col :span="6" class="te-l">
            <img class="hh-4 mt-1" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">
          </el-col>
          <el-col :span="8">
            <el-menu :default-active="indexCode" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">关于我</el-menu-item>
              <el-menu-item index="3">留言</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6">
            <el-input class="mt-1"
                      placeholder="请输入内容"
                      v-model="vueText">
              <i slot="prefix" class="el-input__icon el-icon-search hover-1 cursor-p"></i>
            </el-input>
          </el-col>
          <el-col :span="4" class="te-r">

            <ul class="lh-6">

              <li class="float-r">
                <a href="">
                  <img class="bor-cover mt-1 ml-2" width="40" height="40" src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9Wf73uXyCyAvO4wbs3pib8RZuReSSOvZBysWQlSiaZHpFJJh4qbM7D0WP8xtr5NyJdoRDKbpVdicEA/132" alt="夏日阳光">
                </a>
              </li>
              <li class="float-r hover-1 cursor-p"> <i class="el-icon-share"></i></li>
            </ul>



          </el-col>
        </el-row>
      </div>
    </el-row>


  <!--heater end-->

</template>

<script>
    export default {
        name: "Header",
        props:["name"],
        data () {
          return {
            indexCode: '1',
            vueText: ''
          }
        },
      created(){
          let code = this.name;
          this.indexCode = code;
      },
        methods: {
          handleSelect(key, keyPath) {
            if(key == '1'){
              //首页
              this.$router.push({
                path: '/'
              })

              }else if(key == '2'){
              //关于我
              this.$router.push({
                path: '/about'
              })

            }else if(key == '3'){
              //给我留言
              this.$router.push({
                path: '/message'
              })
            }else{
              //默认首页
              this.$router.push({
                path: '/'
              })
            }

          }
      }

    }
</script>

<style scoped>


</style>
