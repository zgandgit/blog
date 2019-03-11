<template>
  <el-container>
    <el-header class="bg-c1">
      <head-view v-bind:name="'/about'"></head-view>
    </el-header>
    <el-main>
      <div class="container">
        <el-row>
          <detail-view ref="changesArticle"></detail-view>

          <!--nav 右边公用菜单-->
          <div class="sidebar main-r">
            <div class="profile-box bg-c1">
              <div class="pdc-16">
                <h3>目录</h3>
                <!--这里是树形控件  诶好复杂好烦人-->
                <el-tree :data="menu" :props="defaultProps" accordion :default-expand-all="true" :expand-on-click-node="false" @node-click="handleNodeClick">
                </el-tree>
              </div>
            </div>
          </div>

        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Course",
    data() {
      return {
        menu: [],
        defaultProps: {
          children: 'child',
          label: 'title'
        },
        cid:0,//教程id
      }
    },
    created: function () {
        let _this = this
        _this.cid = this.$route.query.cid
    },
    mounted: function (){
        //获取教程列表
        this.courseArticeList()
    },
    methods: {
      handleNodeClick(data) {
        this.$router.push({ path: 'Course',query:{id:data.aid,cid:data.cid}});
        this.$refs.changesArticle.parentArticle(data.aid);

      },
        courseArticeList:function () {
          let _this = this
            _this.$axios.post(_this.Configs.courseArticeList, {
                cid:_this.cid//教程id
            })
                .then(function (res) {
                    let code = res.data.code//状态
                    if (code === 200) {
                        let record = res.data.data//接收的数据
                        _this.menu = record
                      console.log(record);
                    } else {
                        _this.$message(res.data.msg)
                    }
                })




        }
    }
  }
</script>

<style scoped>

</style>
