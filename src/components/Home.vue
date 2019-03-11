<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'/'" @textTitle="textTitle"></head-view>
    </el-header>

    <el-main>
      <div class="container">
        <el-row>
          <div class="bg-c1 menu-cx main-l">
            <el-menu :default-active="menuActive" mode="horizontal" @select="handleSelect">
              <el-menu-item index="popular"><span>最新</span></el-menu-item>
              <el-menu-item index="newest"><span>最热</span></el-menu-item>
              <el-menu-item index="comment"><span>评论</span></el-menu-item>
            </el-menu>
            <!--文章列表详情开始-->
            <div class="details">

              <div v-for="(v,i) in data" :key="i" class="items" v-if="data != 0">
                <div class="info-box">
                  <div class="meta-row">
                    <ul class="meta-list">
                      <li class="item hot" v-if="v.hot != ''">
                        {{v.hot}}
                      </li>
                      <li class="item post" v-if="v.recommend != '2'">
                        推荐
                      </li>
                      <li class="item cursor-p tag">
                        {{v.author}}
                      </li>
                      <li class="item cursor-p">
                        {{v.add_time}}
                      </li>
                      <li class="item cursor-p tag">
                        {{v.classify.name}}
                      </li>
                    </ul>

                  </div>
                  <div class="info-row">
                    <router-link :to="{ path: 'Essay',query:{id:v.id}}" target="_blank" class="title">
                      {{v.title}}
                    </router-link>
                  </div>
                  <div class="action-row">
                    <ul class="action-list">
                      <li class="item likeBtn">
                        <a href="" class="title-box">
                          <img src="../../static/images/zan.e9d7698.svg" class="icon">
                          <span class="count">{{v.praise}}</span>
                        </a>
                      </li>
                      <li class="item comment">
                        <a href="" class="title-box">
                          <img src="../../static/images/comment.4d5744f.svg" class="icon">
                          <span class="count">{{v.discuss}}</span>
                        </a>
                      </li>

                      <li class="item share cursor-p">
                        <img @click="openCenter(i)" src="../../static/images/share.1d55e69.svg" class="icon">
                        <!--分享-->
                        <div class="share-panel" v-if="v.share != '1'">
                          <div class="share-item weibo">

                            <a target="_blank" :href="'https://service.weibo.com/share/share.php?title='+v.title+'&url='+domainHost+'Essay?id='+v.id">
                            <img src="../../static/images/weibo.svg" class="icon" alt="微博">
                            微博
                            </a>
                          </div>
                          <div class="share-item wechat">
                            <img src="../../static/images/wechat.844402c.svg" class="icon" alt="微信扫一扫">
                            微信扫一扫
                            <div class="qr-code-box">
                              <vue-qr :text="domainHost+'Essay?id='+v.id" :margin="0" colorDark="#333333" colorLight="#fff" class="qr-code" :size="200"></vue-qr>
                            </div>
                          </div>
                        </div>


                      </li>

                    </ul>

                  </div>

                </div>
                <div class="thumb"
                     :style="{backgroundImage: 'url('+host+v.resource.url+')'}">

                </div>
              </div>

              <div v-if="data.length === 0" class="wu-data">
                <img src="../../static/images/wu.png" alt="">
                <p>暂无数据</p>
              </div>


            </div>

            <div class="page">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :page-size="num"
              layout="prev, pager, next"
              :current-page="page"
              :total="total">
            </el-pagination>
            </div>
            <!--文章列表详情结束-->

          </div>

          <!--nav 右边公用菜单-->
          <user-view @itemize="itemize"></user-view>

        </el-row>

      </div>
    </el-main>
  </el-container>
</template>

<script>
  import VueQr from 'vue-qr'
  export default {
    components: { VueQr },
    name: 'Home',
    data() {
      return {
        domainHost:this.Configs.domainHost,
        host:this.Configs.host,
        menuActive: 'popular',//热度
        fid:'',//默认标签 就是帖子的二级分类
        page:1,//调用页数
        total:0,//总条目数
        num:10,
        title:'',
        data:[]
      }
    },
    created: function() {
      this.invitationList();//帖子列表
    },
    methods: {
      handleSelect: function (key, keyPath) {
        var _this = this;
        _this.initialize();//初始化
        _this.page = 1;
        _this.menuActive = key;
        this.invitationList();//帖子列表

      },
      invitationList: function () {
        var _this = this
        let menuCode = _this.menuActive
        let loading = _this.$loading();
        setTimeout(function () {
          loading.close()
        },600)

        // console.log(menuCode);

        _this.$axios.post(_this.Configs.homeList,{
          sort: menuCode,
          fid: _this.fid,
          num:_this.num,
          page:_this.page,
          title:_this.title
        })
          .then(function(res){
            let code = res.data.code;//状态
            if(code === 200){
              let record = res.data.data;//接收的数据
                _this.data = record.data
                _this.page = record.current_page
                _this.total = record.total
              console.log(record);
            }
          })

      },
      openCenter:function (e) {
        let _this = this;

        let share = _this.data[e].share;
        if(share == 1){
          _this.data[e].share = 2;
        }else{
          _this.data[e].share = 1;
        }

      },
      itemize:function (e) {
        let _this = this;
        _this.initialize();//初始化
        _this.fid = e;
        _this.invitationList();//帖子列表
      },
      textTitle:function (e) {
        let _this = this;
        if(e === ''){
          _this.$message({
            message: '请输入要筛选的帖子名称',
            type: 'warning'
          });
        }else{
          _this.initialize();//初始化
          _this.title = e;
          _this.invitationList();//帖子列表
        }
      },
      handleCurrentChange:function (val) {
        let _this = this
        _this.page = val
        _this.invitationList();//帖子列表
      },
      initialize:function () {
        let _this = this;
        _this.fid = ''
        _this.page = 1
        _this.menuActive = 'popular'
        _this.title = '';
      }

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page{
    padding: 10px 0;
    text-align: center;
  }
  .menu-cx {

  }

  .menu-cx .el-menu.el-menu--horizontal {

  }

  .menu-cx .el-menu--horizontal > .el-menu-item.is-active {
    height: 46px;
    line-height: 46px;
    border-bottom: none;
  }

  .menu-cx .el-menu--horizontal > .el-menu-item {
    height: 46px;
    line-height: 46px;
    border-bottom: none;
    padding: 0;
  }

  .menu-cx .el-menu--horizontal > .el-menu-item span {
    padding: 0 16px 0 16px;
    border-right: 1px solid hsla(0, 0%, 59.2%, .2);
  }

  .menu-cx .el-menu--horizontal > .el-menu-item:last-child a {
    border: none;
  }

  .menu-cx .el-menu--horizontal > .el-menu-item.is-active {
    color: #409EFF;
  }
</style>
