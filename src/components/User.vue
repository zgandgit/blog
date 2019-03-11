<template>
  <div class="sidebar main-r" v-if="isUser">

    <div class="profile-box bg-c1">
      <div class="profile">
        <div class="avatar" :style="{backgroundImage: 'url('+host+user[0]['cove_url']+')',backgroundSize:'cover'}"></div>
        <div class="user-info">
          <div class="username">{{user[1].details}}</div>
          <div class="position">{{user[2].details}}</div>
        </div>
      </div>
      <ul class="stat-list">
        <li class="item">
          <a :href="user[3].details" target="_blank">
            <img class="img" src="../../static/images/ico1.png" alt="">
            <div class="count">微博</div>
          </a>
        </li>
        <li class="item">
          <a :href="user[4].details" target="_blank">
            <img class="img" src="../../static/images/ico2.png" alt="">
            <div class="count">GitHub</div>
          </a>
        </li>
        <li class="item">
          <a :href="user[5].details" target="_blank">
            <img class="img" src="../../static/images/ico3.png" alt="">
            <div class="count">QQ</div>
          </a>
        </li>
      </ul>
    </div>

    <div class="banner-block">
      <a :href="advertising[0].link" target="_blank">
        <div class="banner" :style="{backgroundImage: 'url('+host+advertising[0]['cove_url']+')'}"></div>
        <span class="label">广告</span>
      </a>
    </div>

    <div class="profile-box bg-c1">
      <div class="user-recommend-header">
        <span>我的标签</span>
      </div>
      <div class="tag-list">
        <el-tag v-for="(item,index) in label" :type="item.type"><a @click="itemize(item.id)">{{item.name}}</a></el-tag>
      </div>
    </div>
    <div class="profile-box bg-c1">
      <div class="user-recommend-header">
        <span>我推荐的小册</span>
      </div>
      <ul class="link-list">

        <li class="item" v-for="(item,index) in books">
          <router-link v-if="item.artice != null" :to="{ path: 'Course',query:{id:item.artice.aid,cid:item.id}}" target="_blank">
          <div class="link books">
            <div class="poster" :style="{backgroundImage: 'url(' +host+item.resource.url + ')' }"></div>
            <div class="info">
              <div class="title">{{item.title}}</div>
              <div class="bought">
                <span class="num">{{item.page_view}}人阅读</span>
                <span class="try-read">阅读</span>
              </div>
            </div>
          </div>
          </router-link>


        </li>

      </ul>
    </div>

    <div class="profile-box bg-c1">
      <ul class="link-list">
        <li class="item" v-for="(item,index) in openSource">
          <a :href="item.link" target="_blank" class="link">
            <img :src="host+item['cove_url']" class="icon" alt="">
            <span class="title">{{item.title}}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="profile-box bg-none">
      <ul class="more-list">
        <li class="item">
          <a v-for="(item,index) in blogroll" :href="item.link" target="_blank" class="lawLink">
            {{item.title}}
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
        host:this.Configs.host,
        isUser:false,
        user: [],//个人信息
        advertising: [],//广告
        label: [],//标签
        books: [],//书籍
        deploy: [],//配置
        blogroll:[],//友情链接
        openSource:[]//开源推荐

      }
    },
    created: function () {
      this.aggregate()//个人信息 广告信息 网站配置 友情链接 开源库 推荐书籍
    },
    methods: {
      aggregate:function () {
        var _this = this
        _this.$axios.all([_this.siteinfo(), _this.labels(),_this.book()])
          .then(_this.$axios.spread(function (siteinfo, labels,book) {
            // 两个请求现在都执行完成
            let siteinfoCode = siteinfo.data.code;//状态
            let labelsCode = labels.data.code;//状态
            let bookCode = book.data.code;//状态
            if(siteinfoCode === 200){
                  let record = siteinfo.data.data;//接收的数据
                  _this.user = record.user.data
                  _this.advertising = record.advertising.data
                  _this.deploy = record.deploy.data
                  _this.openSource = record.openSource.data
                  _this.blogroll = record.blogroll.data
            }
            if(labelsCode === 200){
                  let record = labels.data.data;//接收的数据
                  _this.label = record
            }
            if(bookCode === 200){
              let record = book.data.data;//接收的数据
              _this.books = record.data
            }
            _this.isUser = true;
            //
            // console.log(siteinfo);
            // console.log(labels);
            // console.log(book);
          }));
      },
      siteinfo: function () {
        var _this = this
        return _this.$axios.post(_this.Configs.userInfo)
      },
      labels: function () {
        var _this = this
        return _this.$axios.post(_this.Configs.labels)
      },
      book: function () {
        var _this = this
        return _this.$axios.post(_this.Configs.books)
      },
      itemize: function (e) {
        this.$emit('itemize', e)
      }

    }
  }
</script>

<style scoped>

</style>
