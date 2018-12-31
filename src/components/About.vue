<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'2'"></head-view>
    </el-header>

    <el-main>
      <div class="container bg-c1 bor-6 about">



        <div>
          <el-steps direction="vertical" space="60px" :align-center="true">
            <el-step  icon="el-icon-document" title="我的信息" description="姓名:周光·年历:24·性别:男·电话:1876588****"></el-step>
            <el-step icon="el-icon-rank" title="我的大学" description="“山东协和学院” 哼哼不怎么样"></el-step>
            <h2 class="title">我的工作经历</h2>
            <el-step title="2015年6月份" description="山东济南一家培训机构 培训了4个月的JAVA"></el-step>
            <el-step title="2016年初" description="在济南一家营销策划公司做网站web"></el-step>
            <el-step title="2016年10月份" description="“在上海一家营销策划公司做php 和 web 恩 就是什么都做"></el-step>
            <el-step title="2018年7月份" description="杭州一家网络公司做php web "></el-step>
            <el-step title="......." description="........"></el-step>
          </el-steps>
        </div>

      </div>
    </el-main>

  </el-container>
</template>

<script>
  export default {
    name: 'About'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
    padding: 20px;
  }
  .title{
    float: 16px;
    color: #409EFF;
    line-height: 60px;
  }

</style>
