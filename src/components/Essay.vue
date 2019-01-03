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
          <user-view></user-view>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Essay"
  }
</script>

<style scoped>

</style>
