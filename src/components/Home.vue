<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'/'"></head-view>
    </el-header>

    <el-main>
      <div class="container">
        <el-row>
          <div class="bg-c1 menu-cx main-l">
            <el-menu :default-active="menuActive" mode="horizontal" @select="museSelect">
              <el-menu-item :index="index" v-for="(item,index) in muses"><a href="javascript:void(0);">{{item.title}}</a></el-menu-item>
            </el-menu>
            <!--文章列表详情开始-->
            <div class="details" v-if="index === menuActive" v-for="(item,index) in muses">

              <div v-for="(v,i) in item.data" :key="i" class="items" v-if="item.data != ''">
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
                        {{v.time}}
                      </li>
                      <li class="item cursor-p tag">
                        {{v.skill}}
                      </li>
                    </ul>

                  </div>
                  <div class="info-row">
                    <router-link :to="{ path: 'Essay',query:{id:1}}" target="_blank" class="title">
                      {{v.title}}
                    </router-link>
                  </div>
                  <div class="action-row">
                    <ul class="action-list">
                      <li class="item likeBtn">
                        <a href="" class="title-box">
                          <img :src="v.cover" class="icon">
                          <span class="count">{{v.like}}</span>
                        </a>
                      </li>
                      <li class="item comment">
                        <a href="" class="title-box">
                          <img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" class="icon">
                          <span class="count">{{v.discuss}}</span>
                        </a>
                      </li>

                      <li class="item share cursor-p">
                        <img @click="openCenter(i)" src="https://b-gold-cdn.xitu.io/v3/static/img/share.1d55e69.svg" class="icon">
                        <!--分享-->
                        <div class="share-panel" v-if="v.share != '1'">
                          <div class="share-item weibo">
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.8e2f5d6.svg" class="icon" alt="微博">
                            微博
                          </div>
                          <div class="share-item wechat">
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.844402c.svg" class="icon" alt="微信扫一扫">
                            微信扫一扫
                            <div class="qr-code-box">
                              <img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.844402c.svg" class="qr-code" alt="">
                            </div>
                          </div>
                        </div>


                      </li>


                    </ul>

                  </div>

                </div>
                <div class="thumb"
                     :style="{backgroundImage: 'url('+'https://user-gold-cdn.xitu.io/2018/12/25/167e14942f2dcf44?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1'+')'}">

                </div>
              </div>

              <div v-if="item.data === ''" class="wu-data">
                <img src="../../static/images/wu.png" alt="">
                <p>暂无数据</p>
              </div>


            </div>
            <!--文章列表详情结束-->

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
    name: 'Home',
    data() {
      return {
        menuActive: 'popular',
        visible: false,
        muses: {
          'popular' :{
            'title':'最新',
            'data': ''
          },
          'newest'  : {
            'title':'最热',
            'data': ''
          },
          'comment' : {
            'title':'评论',
            'data':''
          }
        }
      }
    },
    created: function() {
      this.invitationList();//默认按照热度排序
    },
    methods: {
      museSelect: function (key, keyPath) {
        var _this = this;
        _this.menuActive = key;
        const loading = this.$loading();
        _this.invitationList();
      },
      invitationList: function () {
        var _this = this
        let menuCode = _this.menuActive
        _this.$axios.post(_this.Configs.homeList,{
          sort:menuCode
        })
          .then(function(res){
            let code = res.data.code;//状态
            if(code === 200){
              let record = res.data.data;//接收的数据
               _this.muses[menuCode].data = record
               _this.$loading().close()
            }
          })


          },
      openCenter:function (e) {
        let _this = this;
        let actice = _this.menuActive;
        let share = _this.muses[actice]['data'][e]['share'];
        if(share == 1){
          _this.muses[actice]['data'][e]['share'] = 2;
        }else{
          _this.muses[actice]['data'][e]['share'] = 1;
        }
        console.log(_this.muses[actice]['data'][e]['share']);


      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .menu-cx .el-menu--horizontal > .el-menu-item a {
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
