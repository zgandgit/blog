<template>
      <div class="bg-c1 menu-cx main-l" v-wechat-title="$route.meta.title">

        <div class="article-suspended-panel">
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('../../static/images/zan.b4bb964.svg')">
            <span>666</span>
          </div>
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('../../static/images/comment.4d5744f.svg')">
            <span>666</span>
          </div>
          <div class="share-title">分享</div>
          <a target="_blank" :href="'https://service.weibo.com/share/share.php?title='+data.title+'&url='+domainHost+'Essay?id='+id">
            <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('../../static/images/weibo.2076a57.svg')">
            </div>
          </a>
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('../../static/images/wechat.svg')">
            <vue-qr :text="domainHost+'Essay?id='+id" :margin="0" colorDark="#333333" colorLight="#fff" class="ewms" :size="200"></vue-qr>
          </div>

        </div>

        <div class="detail">
          <div class="top">
            <h5 class="title">{{data.title}}</h5>
            <ul class="desc">
              <li class="item hot" v-if="data.hot != ''">
                热
              </li>
              <li class="item post" v-if="data.recommend == 1">
                推荐
              </li>
              <li class="item cursor-p tag" v-if="data.place != ''">
                {{data.place}}
              </li>
              <li class="item cursor-p tag" v-if="data.author != ''">
                {{data.author}}
              </li>
              <li class="item cursor-p tag">
                {{data.add_time}}
              </li>
            </ul>

          </div>
          <div class="article-content" id="content">
            <vue-markdown :source="content"></vue-markdown>
          </div>

          <!--这里调用评论组件-->
          <discuss :id="id" ref="changesDiscuss"></discuss>


        </div>
      </div>

</template>

<script>
  import VueQr from 'vue-qr'
   import VueMarkdown from 'vue-markdown'//编辑器组件
   import hljs from 'highlight.js'//代码高亮js
   import 'highlight.js/styles/monokai-sublime.css' //样式文件
   import discuss from './Discuss'
   export default {
        name: "Detail",
        data(){
            return{
              domainHost:this.Configs.domainHost,
              content: '',
              data:[],
              id:''
          }
        },
       components:{
           VueMarkdown,
           discuss,
           VueQr
       },
      created: function () {
          let _this = this
          _this.id = this.$route.query.id
          _this.detail()

      },
     mounted: function (){
       // this.hldm()
     },
      methods: {
        detail:function () {
          let _this = this;
          _this.$axios.post(_this.Configs.articleDetails,{
            id: _this.id
          })
            .then(function(res){
              let code = res.data.code;//状态
              if(code === 200){
                let record = res.data.data;//接收的数据
                _this.$route.meta.title = record.title
                _this.data = record;
                _this.content = record.details;
                _this.hldm()
              }
            })

        },
        hldm:function () {
          setTimeout(function () {
            let blocks = document.getElementById('content').querySelectorAll('pre code')
            blocks.forEach((block)=>{
              hljs.highlightBlock(block)
            })
          },600)
        },
          parentArticle(aid) {
             let _this = this
              _this.id = aid
              _this.detail()//更改文章详情
              _this.$refs.changesDiscuss.parentDiscuss(aid)//更改评论列表
              _this.hldm()
          }


      }
    }
</script>

<style scoped>

  .detail{
    padding: 20px;
  }
  .detail .top{
   text-align: center;
  }
  .detail .top .title{
    font-size: 22px;
    text-align: center;
  }
  .detail .top .desc{
    display: inline-block;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    white-space: nowrap;
    margin-top: 12px;
  }
  .detail .top .desc .item {
    font-size: 12px;
    color: #b2bac2;
    float: left;
  }
  .detail .top .desc .item.hot {
    font-weight: 500;
    color: red;
  }
  .detail .top .desc .item.post {
    font-weight: 500;
    color: #b71ed7;
  }
  .detail .top .desc .item:not(:last-child)::after {
    content: "\B7";
    color: rgb(178, 186, 194);
    margin: 0px 0.4em;
  }
  .article-content{
    line-height: 1.75;
    font-weight: 400;
    font-size: 15px;
    overflow-x: hidden;
    padding-top: 30px;
  }
  .ewms{
    position: relative;
    width: 38px;
    height: 50px;
  }

</style>
