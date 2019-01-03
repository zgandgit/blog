<template>
      <div class="bg-c1 menu-cx main-l">

        <div class="article-suspended-panel">
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg')">
            <span>666</span>
          </div>
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/comment.7fc22c2.svg')">
            <span>666</span>
          </div>
          <div class="share-title">分享</div>
          <div class="like-btn panel-btn like-adjust with-badge" style="background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/weibo.2076a57.svg')">
          </div>
        </div>

        <div class="detail">
          <div class="top">
            <h5 class="title">{{data.title}}</h5>
            <ul class="desc">
              <li class="item hot">
                热
              </li>
              <li class="item post">
                专栏
              </li>
              <li class="item cursor-p tag">
                得瑟得瑟
              </li>
              <li class="item cursor-p">
                但是当时的
              </li>
              <li class="item cursor-p tag">
                但是当时的
              </li>
              <li class="item cursor-p tag">
                2018年6月23日
              </li>
            </ul>

          </div>
          <div class="article-content">

            在npm、yarn等包管理工具的帮助下，前端工程化模块化的进程日益加快，项目的依赖包也日益增大，特别是若项目采用webpack来构建用到许多webpack的插件、一些辅助开发如（eslint、postcss、dev-server之类的库）以及一些单元测试(jest、mocha、enzyme)可能需要用到的插件，项目中的node_module就会变的十分庞大。
            如图：

            如果搭配这种情况是不是很绝望：

            因此团队开发者每次重新初始化项目进行npm install会十分缓慢，并且若占用大量空间，更进一步来说项目中往往很多前端团队会用到一台构建服务器，对前端项目的代码获取、打包、构建、部署进行管理（例如笔者自己所在的团队就在使用jenkins对前端项目的打包、构建、部署进行自动化托管）。npm这样的项目级依赖管理的特性就会造成大量的时间以及资源的消耗。
            同时笔者也想在文章开始之前表明一个态度，npm本身portable的模块化设计，使每个项目互不干系，也是一种它设计的精华所在，本文仅是针对实际使用中遇到的一些小困扰进行解读，希望提供一个新的思路。
            补充一下，实际yarn已经有了解决方案 - workspaces：
            Workspaces in Yarn
            本文暂不把yarn容纳到讨论范围内。
            此本篇文章就在这样的背景下诞生了。纯粹是笔者在项目中积累的一些经验，若有不足望指出。
            二、先来说说示例
            github仓库地址：github.com/Roxyhuang/n…
            通常现代前端的标准工程往往具备以下功能，为了让这个讨论更贴近实际开发，并且更直观，因此规定示例项目基本具备以下这些能力：
            (1) 提供dev-server
            (2) 提供语法转译（babel）
            (3) 能够解析样式
            (4) js代码风格插件以及样式风格检查
            (5) 单元测试
            (6) 提供样式兼容处理
            当然以上部分只体现的依赖层面。因此可能有些依赖的引入可能出现错误或者不合理。
            并假设目前团队使用了webpack和parcel两套前端构建方案，团队项目中有使用了React和Vue。
            三、问题的总结
            若不对项目做任何优化以及设置正常项目的依赖的结构应该是这样的：
            如图：

            作者：Neo_Huang
            链接：https://juejin.im/post/5c277dec6fb9a049a62caa99
            来源：掘金
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

          </div>

          <div class="comment-list-box">
            <div class="title">评论</div>
            <div class="comment-form">
              <div class="avatar-box">
                <div class="avatar" style="background-image: url('https://avatars0.githubusercontent.com/u/16717068?v=3')"></div>
              </div>
              <div class="form-box">
                <div class="input-box">
                  <div class="rich-input empty" contenteditable="true" spellcheck="true" placeholder="输入评论...">

                  </div>
                </div>
                <div class="action-box">
                  <div class="emoji emoji-btn">
                    <div class="emoji-box">
                      <div class="icon" style="background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg')"></div>
                      <span>表情</span>
                    </div>
                  </div>


                </div>
                <div class="submit">
                  <span>Ctrl or ⌘ + Enter</span>
                  <button class="submit-btn">评论</button>

                </div>

              </div>


            </div>

            <div class="comment-list">
              <div class="item">
                <div class="comment">
                  <div class="user-popover-box popover">
                    <div class="avatar" style="background-image: url('https://b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg')"></div>
                  </div>
                  <div class="content-box comment-divider-line">
                    <div class="meta-box">
                      <div class="user-popover-box username">夏日里的一把阳光</div>
                    </div>
                    <div class="content">
                      撒打扫打扫打扫打扫打扫大
                    </div>
                    <div class="reply-stat">
                      <span class="time">2分钟前</span>
                      <div class="action-boxs">
                        <div class="comment-action">

                          <svg data-v-6bbbea0a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon comment-icon"><g data-v-6bbbea0a="" fill="none" fill-rule="evenodd"><path data-v-6bbbea0a="" d="M0 0h20v20H0z"></path> <path data-v-6bbbea0a="" stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"></path></g></svg>
                          <span class="action-title">回复</span>
                        </div>


                      </div>

                    </div>
                    <div class="sub-comment-list">
                      <div class="item">
                        <div class="sub-comment">
                          <div class="sub-comment-content-row">
                            <div class="user-popover-box popover">
                              <div class="avatar" style="background-image: url('https://avatars0.githubusercontent.com/u/16717068?v=3')"></div>
                            </div>
                            <div class="user-content-box">
                              <div class="profie">夏日里的一把阳光</div>
                              <div class="content-box">撒打扫打扫打扫打扫打扫大所多岁的</div>
                              <div class="sub-comment-stat-box">2分钟前</div>

                            </div>


                          </div>


                        </div>


                      </div>


                    </div>


                  </div>



                </div>
              </div>


            </div>









          </div>


        </div>
      </div>

</template>

<script>
    export default {
        name: "Detail",
      data(){
          return{
            data:{
              'hot': '热',
              'type':'专栏',
              'author':'小逛逛还是',
              'time': '1小时前',
              'skill': 'PHP',
              'title': '教你从零开始搭建一款前端脚手架工具',
              'cover': 'https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg',
              'like': 126,
              'discuss': 52,
              'share': 1
            }
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
  /*评论*/
  .comment-list-box{
    position: relative;
    background-color: #fff;
  }
  .comment-list-box .title{
    color: #8a9aa9;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 1.67rem 0 5px;
  }
  .comment-list-box .comment-form{
    margin: 13px 0;
    display: flex;
    position: relative;
    padding: 10px 13px;
    background-color: #fafbfc;
    border-radius: 3px;
  }
  .comment-list-box .comment-form .avatar-box{
    flex: 0 0 auto;
  }
  .comment-list-box .comment-form .avatar-box .avatar {
    margin: 0 16px 0 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-top: 6px;
  }
  .comment-list-box .comment-form .avatar-box .avatar {
    display: inline-block;
    position: relative;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #eee;
  }
  .rich-input:before {
    content: attr(placeholder);
    position: absolute;
    opacity: .4;
    pointer-events: none;
    user-select: none;
  }
  .form-box {
    flex: 1 1 auto;
    position: relative;
  }
  .form-box .input-box {
    border-color: #007fff;
  }
  .input-box {
    font-size: 0;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 3px;
  }
  .rich-input {
    position: relative;
    padding: 6px 16px;
    font-size: 12px;
    line-height: 1.7;
    color: #17181a;
    outline: none;
    min-height: 26px;
    line-height: 26px;
  }
  .action-box{
    display: flex;
    align-items: center;
    margin: 10px 0 0;
    float: left;

  }
  .emoji {
    position: relative;
  }
  .emoji .emoji-box{
    display: flex;
    align-items: center;
    position: relative;
    color: #027fff;
    cursor: pointer;
    font-size: 12rem;
  }
  .emoji .emoji-box .icon {
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .emoji .emoji-box span {
    padding: .166rem;
    font-size: 13px;
  }
  .submit {
    flex: 0 0 auto;
    float: right;
    margin: 10px 0 0;
  }
  .submit span{
    color: #c2c2c2;
    margin-right: 8px;
    font-size: 13px;
  }
  .submit .submit-btn{
    flex: 0 0 auto;
    /*padding: 10px 13px;*/
    font-size: 13px;
    color: #fff;
    background-color: #027fff;
    border-radius: 2px;
    cursor: pointer;

  }
  .comment-list{
    margin: 0 16px 0 56px;
  }
  .comment-list .item:not(:last-child) {
    margin-bottom: 13px;
  }
  .comment{
    display: flex;
  }
  .popover {
    height: 33px;
  }
  .user-popover-box{
    display: inline;
  }
  .comment-list .item:not(:last-child) .comment-divider-line {
    border-bottom: 1px solid #f1f1f1;
  }
  .content-box {
    margin-left: 8px;
    flex: 1 1 auto;
  }
  .meta-box{
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
  }
  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .avatar {
    display: inline-block;
    position: relative;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #eee;
  }
  .username {
    flex: 1 1 auto;
    width: 0;
    color: #333;
  }
  .content {
    margin-top: 6px;
    font-size: 12px;
    line-height:18px;
    color: #505050;
  }
  .reply-stat{
    display: flex;
    margin: 10px 0;
    font-weight: 400;
    line-height: 16px;
  }
  .reply-stat .time{
    font-size: 12px;
    color: #8a9aa9;
    cursor: default;
  }
  .reply-stat .action-boxs{
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    min-width: 90px;
    color: #8a93a0;
    user-select: none;
  }
  .reply-stat .comment-action{
    display: flex;
    align-items: center;
    margin-left: 6px;
    cursor: pointer;
  }
  .reply-stat .comment-action span {
    margin-left: 6px;
  }
  .sub-comment-list{
    margin: 10px 0;
    padding: 0 0 0 10px;
    background-color: #fafbfc;
    border-radius: 3px;
  }
  .sub-comment-list .item{

  }
  .sub-comment {
    position: relative;
    padding: 1rem 0 0;
  }
  .sub-comment-content-row{
    display: flex;
    align-items: start;
  }
  .sub-comment-list .item:not(:last-child) .user-content-box {
    border-bottom: 1px solid #f1f1f1;
  }
  .user-content-box{
    margin-left: 10px;
    margin-right: 6px;
    padding-bottom: 12px;
    font-size: 12px;
    color: #17181a;
    width: 100%;
  }
  .user-content-box .profie{
    display: flex;
  }
  .user-content-box .content-box{
    display: inline-block;
    margin-top: .5rem;
    white-space: pre-wrap;
    color: #505050;
    line-height: 1.833rem;
    margin-left: 0;
  }
  .sub-comment-stat-box{
    display: flex;
    margin-top: 7px;
    font-size: 13px;
    color: #8a93a0;
  }
</style>
