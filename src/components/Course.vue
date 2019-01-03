<template>
  <el-container>
    <el-header class="bg-c1">
      <head-view v-bind:name="'/'"></head-view>
    </el-header>
    <el-main>
      <div class="container">
        <el-row>
          <detail-view></detail-view>

          <!--nav 右边公用菜单-->
          <div class="sidebar main-r">
            <div class="profile-box bg-c1">
              <div class="pdc-16">
                <h3>目录</h3>
                <!--这里是树形控件  诶好复杂好烦人-->
                <el-tree :data="data" :props="defaultProps" :default-expand-all="true" :expand-on-click-node="false" @node-click="handleNodeClick"></el-tree>
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
        data: [{
          label: 'es6语法树',
          children: [{
            label: '第一章',
            children: [{
              label: '第二章'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped>

</style>
