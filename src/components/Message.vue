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
              <p>
                <el-badge :value="12" class="item">
                  <el-button size="small">赞赏</el-button>
                </el-badge>
              </p>
              <p class="desc">
                我是技术菜鸟，对于深奥的技术不太了解，做这个博客一方面是想记录自己的技术笔记，第二各方面也是希望对广大技术人员有些帮助。
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
              <p class="desc">
                <el-badge :value="12" class="item">
                  <el-button size="small">留言</el-button>
                </el-badge>
              </p>

              <el-row :gutter="12">
                <el-form ref="form" :model="form">
                  <el-form-item>
                    <el-input type="textarea" placeholder="你想对我说什么？ 回车提交"></el-input>
                  </el-form-item>
                </el-form>
              </el-row>

              <el-row :gutter="12">
                <el-col :span="12">
                  <el-table
                    :data="tableData"
                    border
                    max-height="600">
                    <el-table-column
                      prop="name"
                      label="昵称/姓名"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="desc"
                      label="打赏"
                     >
                    </el-table-column>
                  </el-table>


                </el-col>
                <el-col :span="12">

                  <el-table
                    :data="tableData"
                    border
                    max-height="600">
                    <el-table-column
                      prop="name"
                      label="昵称/姓名"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="desc"
                      label="评论"
                    >
                    </el-table-column>
                  </el-table>

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
        tableData: [{
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }, {
          name: '王小虎',
          desc: '打赏20元'
        }]
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
