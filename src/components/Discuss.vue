<template>
    <div class="discuss">
        <!--评论开始-->
        <div class="comment-list-box">
            <div class="title">评论</div>
            <div class="comment-form">
                <div class="avatar-box">
                    <div class="avatar" :style="{backgroundImage:'url(' + portrait + ')'}"></div>
                </div>
                <div class="form-box">
                    <div class="input-box">
                        <!--<div class="rich-input empty" id="empty" contenteditable="true" v-html="textarea" @focus="focusD" @input="changeD" spellcheck="true"></div>-->
                        <el-input
                                type="textarea"
                                v-model="textarea"
                                placeholder="请输入内容"
                                clearable
                                :autosize="{ minRows: 2, maxRows: 10}"
                                @focus="focusD">
                        </el-input>
                    </div>



                    <div class="action-box" v-if="isShow">
                        <div class="emoji emoji-btn">
                            <div class="emoji-box">
                                <el-popover
                                        placement="bottom-start"
                                        trigger="click">
                                        <div class="emoji-list">
                                            <ul class="category">
                                                <li class="item" v-for="(v,i) in emojisList">
                                                    <img class="emoj" @click="setEmoje(v.sign)" :src="v.url" :alt="v.sign">
                                                </li>
                                            </ul>
                                        </div>

                                    <div class="emojic" slot="reference"><div class="icon" style="background-image: url('../../static/images/emoji.svg')"></div>表情</div>

                                </el-popover>
                            </div>
                        </div>
                    </div>



                    <div class="submit" v-if="isShow">
                        <span>Ctrl or ⌘ + Enter</span>
                        <button class="submit-btn" @click="present(0)">评论</button>
                    </div>



                </div>


            </div>

            <div class="comment-list">
                <!--一块评论-->
                <div class="item" v-for="(v,i) in discussList" v-if="discussList != ''">
                    <div class="comment">
                        <div class="user-popover-box popover">
                            <div class="avatar" :style="{backgroundImage:'url(' + v.user.portrait + ')'}"></div>
                        </div>
                        <div class="content-box comment-divider-line">
                            <div class="meta-box">
                                <div class="user-popover-box username">{{v.user.nickname}}</div>
                            </div>
                            <div class="content" v-html='v.content'>
                            </div>
                            <div class="reply-stat">
                                <span class="time">{{v.hour}}</span>
                                <div class="action-boxs">

                                    <el-popover
                                            placement="top"
                                            width="260"
                                            >
                                        <el-input style="margin-bottom: 10px"
                                                placeholder="回复的内容"
                                                v-model="replys"
                                                clearable>
                                        </el-input>
                                        <div>
                                            <el-button type="primary" size="mini" @click="present(v.id)">确定</el-button>
                                        </div>
                                        <div class="comment-action" slot="reference">
                                            <img width="16" src="../../static/images/reply.svg">
                                            <span class="action-title">回复</span>
                                        </div>
                                    </el-popover>

                                </div>
                            </div>
                            <!--回复列表-->
                            <div class="sub-comment-list">
                                <div class="item" v-for="(rv,iv) in v.reply">
                                    <div class="sub-comment">
                                        <div class="sub-comment-content-row">
                                            <div class="user-popover-box popover">
                                                <div class="avatar" :style="{backgroundImage:'url(' + rv.user.portrait + ')'}"></div>
                                            </div>
                                            <div class="user-content-box">
                                                <div class="profie">{{rv.user.nickname}}</div>
                                                <div class="content-box">{{rv.content}}</div>
                                                <div class="sub-comment-stat-box">{{rv.hour}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--结束-->
            </div>
        </div>
        <!--评论结束-->
    </div>
</template>

<script>
    import emojis from '../assets/js/emojis'//表情图像集合
    export default {
        name: "Discuss",
        inject: ['reload'],
        props:['id'],
        data(){
            return{
                aid:this.id,
                portrait:'../../static/images/portrait.svg',
                discussList:'',
                isShow:false,
                emojisList:emojis.emojis,
                textarea:'',
                replys:''
            }
        },
        created: function () {
            let _this = this
            //是否已经登录检测
            if(_this.utils.isLogin()){
                _this.portrait = localStorage.getItem('portrait')
            }
            //在这里请求接口获取文章的评论
            this.comment()

        },
        mounted: function (){

        },
        methods: {
            comment:function () {
                let _this = this
                _this.$axios.post(_this.Configs.discussList,{
                    aid: _this.aid
                })
                .then(function(res){
                    let code = res.data.code//状态
                    if(code === 200){
                        let record = res.data.data//接收的数据
                        _this.discussList = record
                    }else{
                        _this.$message(res.data.msg)
                    }
                })
            },
            focusD:function (e) {
                this.isShow = true
            },
            setEmoje:function (sign) {
                let emojeHtml = "{em_"+sign+"}"
                let _this = this
                _this.textarea = _this.textarea+emojeHtml
                // console.log(this.reaplceIMG(_this.textarea))
            },
            reaplceIMG:function(s) {
                // this.reaplceIMG(_this.textarea) //这么调用
                var reg = /\{.*?\}/g
                return s.replace(reg, function(tmp) {
                    var tmp = tmp.substr(1, tmp.length - 2).split('_')
                    var url = tmp[1]
                    var type = tmp[0]
                    var img = ''
                    if (type === 'em') {
                        img = "<img src='"+emojis.host+"" + url + ".svg' class='emojib'>"
                    }
                    return img
                })
            },
            present:function (openId) {

                let _this = this
                //是否已经登录检测
                if(!_this.utils.isLogin()){
                    _this.$message('先登录在评论')
                    return false
                }else if(openId === 0){
                    if(_this.textarea.trim() == ''){
                        _this.$message('评论必须要填写内容')
                        return false
                    }else{
                        _this.discuss(openId)
                    }


                }else if(openId != 0){
                    if(_this.replys.trim() == ''){
                        _this.$message('回复必须要填写内容')
                        return false
                    }else{
                        _this.discuss(openId)
                    }

                }else{
                    _this.discuss(openId)
                }

            },
            discuss:function (openId) {
                let _this = this
                let datas = ''
                if(openId != 0){
                    datas = _this.replys
                }else{
                    datas = _this.reaplceIMG(_this.textarea)
                }
                _this.$axios.post(_this.Configs.discussPresent,{
                    aid: _this.aid,
                    uid: _this.utils.getC('autho'),//会员ID
                    oneId: openId,//上级评论ID
                    content: datas,//上级评论ID
                })
                    .then(function(res){
                        let code = res.data.code//状态
                        if(code === 200){
                            // _this.reload()//重载页面
                            _this.comment()//重新请求评论区内容
                        }else{
                            _this.$message(res.data.msg)
                        }
                    })

                _this.replys = ''
                _this.textarea = ''

            },
            parentDiscuss:function (aid) {
                let _this = this
                _this.aid = aid
                _this.comment()


            }

        }
    }
</script>

<style scoped>
    /*表情包集合*/
    .emoji-list{

    }
    .emoji-list .category{
        max-width: 280px;
        max-height: 225px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }
    .emoji-list .category .item{
        font-size: 1.4rem;
        padding: 5px 4.5px;
        cursor: pointer;
    }
    .emoji-list .category .item .emoj{
        width: 22px;
        height: 22px;
        display: block;
    }
    /*评论*/
    .emojic{
        display: flex;
    }
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
    .form-box {
        flex: 1 1 auto;
        position: relative;
    }
    .input-box.artcle{
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
        padding: .6rem 1rem;
        font-size: 1.083rem;
        line-height: 1.7;
        color: #17181a;
        outline: none;
        min-height: 1.3em;
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
        margin-right: 4px;
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
