<template>
  <!--heater-->

    <el-row>
      <div class="container">
        <el-row>
          <el-col :span="4" class="te-l">
            <img class="hh-4 mt-1" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">
          </el-col>
          <el-col :span="10">
            <el-menu :default-active="indexCode" class="el-menu-demo" mode="horizontal" :router="true">
              <el-menu-item index="/">技术帖</el-menu-item>
              <el-menu-item index="/about">技术教程</el-menu-item>
              <el-menu-item index="/activity">活动</el-menu-item>
              <el-menu-item index="/message">赞赏留言</el-menu-item>

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
                  <img class="bor-cover mt-1 ml-2" width="40" height="40" src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9Wf73uXyCyAvO4wbs3pib8RZuReSSOvZBysWQlSiaZHpFJJh4qbM7D0WP8xtr5NyJdoRDKbpVdicEA/132" alt="夏日阳光">
              </li>
              <li class="float-r cursor-p pdlr-2 fz-14">
                <a href="" class="hover-1 cor-1">

                </a>
              </li>
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
            indexCode: '/',
            vueText: ''
          }
        },
      created(){
          let code = this.name;
          this.indexCode = code;
      },
        methods: {

      }

    }
</script>

<style scoped>


</style>
