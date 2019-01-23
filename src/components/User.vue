<template>
  <div class="sidebar main-r">

    <div class="profile-box bg-c1">
      <div class="profile">
        <div class="avatar" :style="{backgroundImage: 'url('+user.portrait+')',backgroundSize:'cover'}"> </div>
        <div class="user-info">
          <div class="username">{{user.name}}</div>
          <div class="position">{{user.introduce}}</div>
        </div>
      </div>
      <ul class="stat-list">
        <li class="item">
          <a :href="user.weibo" target="_blank">
            <img class="img" src="../../static/images/ico1.png" alt="">
            <div class="count">微博</div>
          </a>

        </li>
        <li class="item">
          <a :href="user.github" target="_blank">
            <img class="img" src="../../static/images/ico2.png" alt="">
            <div class="count">GitHub</div>
          </a>
        </li>
        <li class="item">
          <a :href="user.qq" target="_blank">
            <img class="img" src="../../static/images/ico3.png" alt="">
            <div class="count">Qq群</div>
          </a>
        </li>
      </ul>

    </div>

    <div class="banner-block">
        <a href="">
          <div class="banner" :style="{backgroundImage: 'url('+advertising.cover+')'}"></div>
        </a>
        <a :href="advertising.url" target="_blank" class="label">
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
        name: "User",
        data() {
          return {
            user: '',//个人信息
            advertising: '',//广告
            label: '',//标签
            books: '',//书籍
            deploy:'',//配置
            blogroll: ''//友情链接

          }
        },
        created: function() {
          this.siteinfo()
        },
        methods: {
          siteinfo: function () {
            var _this = this
            _this.$axios.post(_this.Configs.userInfo,{

            })
              .then(function(res){
                let code = res.data.code;//状态
                if(code === 200){
                  let record = res.data.data;//接收的数据
                    _this.user = record.user
                    _this.advertising = record.advertising
                    _this.label = record.label
                    _this.books = record.books
                    _this.deploy = record.deploy
                    _this.blogroll = record.blogroll
                }
              })


          }

        }
    }
</script>

<style scoped>

</style>
