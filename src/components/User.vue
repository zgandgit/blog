<template>
  <div class="sidebar main-r">

    <div class="profile-box bg-c1">
      <div class="profile">
        <div class="avatar" :style="{backgroundImage: 'url('+'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9Wf73uXyCyAvO4wbs3pib8RZuReSSOvZBysWQlSiaZHpFJJh4qbM7D0WP8xtr5NyJdoRDKbpVdicEA/132'+')',backgroundSize:'cover'}"> </div>
        <div class="user-info">
          <div class="username">夏日里的一把阳光</div>
          <div class="position">一个逗比程序员</div>
        </div>
      </div>
      <ul class="stat-list">
        <li class="item">
          <a href="">
            <img class="img" src="../../static/images/ico1.png" alt="">
            <div class="count">微博</div>
          </a>

        </li>
        <li class="item">
          <a href="">
            <img class="img" src="../../static/images/ico2.png" alt="">
            <div class="count">GitHub</div>
          </a>
        </li>
        <li class="item">
          <a href="">
            <img class="img" src="../../static/images/ico3.png" alt="">
            <div class="count">Qq群</div>
          </a>
        </li>
      </ul>

    </div>

    <div class="banner-block">
      <a href="">
        <div class="banner" :style="{backgroundImage: 'url('+'https://user-gold-cdn.xitu.io/1545907481431729ddf7a12b4e58e4c4dfeee4286b83f.jpg?imageView2/1/q/85/interlace/1'+')'}"></div>
      </a>
      <a href="" class="label">
        <span>广告</span>
      </a>


    </div>





    <div class="profile-box bg-c1">
      <div class="user-recommend-header">
        <span>我的标签</span>
      </div>
      <div class="tag-list">
        <el-tag size="medium">php</el-tag>
        <el-tag size="medium" type="success">linux</el-tag>
        <el-tag size="medium" type="info">mysql</el-tag>
        <el-tag size="medium" type="warning">vue</el-tag>
        <el-tag size="medium" type="danger">js</el-tag>

      </div>

    </div>

    <div class="profile-box bg-c1">
      <div class="user-recommend-header">
        <span>推荐文档</span>
      </div>
      <ul class="link-list">
        <li class="item">
          <a href="" class="link">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" class="icon" alt="">
            <span class="title">开源库</span>
          </a>
        </li>
        <li class="item">
          <a href="" class="link">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" class="icon" alt="">
            <span class="title">开源库</span>
          </a>
        </li>
        <li class="item">
          <a href="" class="link">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" class="icon" alt="">
            <span class="title">开源库</span>
          </a>
        </li>
        <li class="item">
          <a href="" class="link">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" class="icon" alt="">
            <span class="title">开源库</span>
          </a>
        </li>
        <li class="item">
          <a href="" class="link">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png" class="icon" alt="">
            <span class="title">开源库</span>
          </a>
        </li>

      </ul>

    </div>


    <div class="profile-box bg-none">
      <ul class="more-list">
        <li class="item">
          <a href="" class="lawLink">
            关于我
          </a>
          <a href="" class="lawLink">
            商务合作
          </a>
          <a href="" class="lawLink">
            留言
          </a>
        </li>
        <li class="item">
          <a href="" class="lawLink">
            接口注册
          </a>
        </li>

        <li class="item">
          <a href="" class="lawLink">
            友情链接:
          </a>
          <a href="" class="lawLink">
            唤醒
          </a>
          <a href="" class="lawLink">
            掘金
          </a>
          <a href="" class="lawLink">
            csdn
          </a>
          <a href="" class="lawLink">
            thinkphp
          </a>
        </li>




      </ul>



    </div>






  </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
