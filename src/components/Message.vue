<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'/message'"></head-view>
    </el-header>

    <el-main>
      <div class="container">
        <el-row>
          <div class="bg-c1 menu-cx main-l">
            <el-card class="box-card">

              <p class="desc">
                如果您认为本网站的教程质量不错，读后觉得有很大收获，不妨小额赞助我一下，让我有活下去的勇气(┬＿┬)(┬＿┬)(┬＿┬)。
                网页最下方有所有赞助人员的记录感谢你们! 我觉得你们是最好的。。。啊我这该死的无处安放的魅力 (*^__^*)
              </p>
              <el-row :gutter="12">
                <el-col :span="8">
                  <el-card shadow="always">
                    <img class="img-w100" src="../../static/images/wxpay.png">
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card shadow="always">
                    <img class="img-w100" src="../../static/images/wxuser.png">
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card shadow="always">
                    <img class="img-w100" src="../../static/images/zfbpay.png">
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <!--nav 右边公用菜单-->
          <user-view></user-view>
        </el-row>
      </div>
    </el-main>

  </el-container>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        tableData: []
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .desc{
    font-size: 14px;
    line-height: 26px;
    color: #2e3135;
    padding: 20px 0 20px 0;
  }
  .img-w100{
    width: 100%;
  }

</style>
