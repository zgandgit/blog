<template>
  <!--heater-->

    <el-row>
      <div class="container">
        <el-row class="felx-main hh-6">
          <el-col :span="4" class="te-l conceal-hide">
            <img class="hh-4" src="../../../static/images/logo.png" alt="周光个人博客">
          </el-col>
          <el-col :span="10" class="nav-header">
            <el-menu :default-active="indexCode" class="el-menu-demo" mode="horizontal" :router="true">
              <el-menu-item index="/">技术帖</el-menu-item>
              <el-menu-item index="/about">技术教程</el-menu-item>
              <el-menu-item index="/activity">活动</el-menu-item>
              <el-menu-item index="/message">赞赏留言</el-menu-item>
            </el-menu>
          </el-col>


          <el-col :span="6" class="conceal-hide">
            <el-input
                      placeholder="请输入内容"
                      v-model="vueText"
                      clearable>
              <el-button slot="append" icon="el-icon-search" @click="textTitle"></el-button>
            </el-input>

          </el-col>

          <el-col :span="4" class="te-r nav-header-user" v-if="user === ''">

            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link el-dropdown-selfdefine">
                立即登录<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">QQ登录</el-dropdown-item>
                <el-dropdown-item command="2">微博登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </el-col>


          <el-col :span="4" class="te-r nav-header-user" v-if="user != ''">
            <ul class="user_info">
              <li>
                <!--<a href="" class="hover-1 cor-1 ml-2">-->
                  <!--{{user.nickname}}-->
                <!--</a>-->
              </li>
              <li>

                <el-dropdown @command="quit">
                  <span class="el-dropdown-link">
                    <img class="bor-cover ml-2" width="40" height="40" :src="user.portrait">
                     <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>登出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

              </li>

            </ul>
          </el-col>


        </el-row>
      </div>
    </el-row>


  <!--heater end-->

</template>

<script>
    export default {
        name: "Header",
        inject: ['reload'],
        props:["name"],
        data () {
          return {
            indexCode: '/',
            vueText: '',
            user:'',
          }
        },
      created(){
          let _this = this;
          //本地测试登录功能 正式环境请注释掉
          // _this.utils.setC('autho',1)
          // _this.utils.setC('autho_type',1)
          let code = this.name;
          console.log(code);
          _this.indexCode = code;
          //是否已经登录检测
          if(_this.utils.isLogin()){
              _this.userInfo();//调用个人信息接口 获取个人信息
          }
      },
      mounted(){

      },
        methods: {
          textTitle:function () {
            this.$emit('textTitle', this.vueText)
          },
          handleCommand:function (command) {
            let _this = this
            if(command == 1){
              _this.autho(command)//调用授权
            }else{
              this.$message('暂未开放微博登录，请使用QQ登录');
            }
          },
            handleClick:function(e){
              console.log(e);

            },
          quit:function(){
              let _this = this
              _this.utils.exitLogin()
              _this.user = ''
          },
          autho:function (type) {
            let _this = this
            let autho = window.open(
              "http://api.noahzhou.com/api/autho/autho?type="+type,
              '',
              'height=400,width=600,top=200,left=200,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no'
            );
            let loop = setInterval(function() {
              if(_this.utils.isLogin()){
                autho.close()
                clearInterval(loop)//停止循环执行
                _this.reload()//重载页面
              }
            }, 1000);
          },
          userInfo:function () {
            let _this = this
              let autho = _this.utils.getC('autho')
              let authoType = _this.utils.getC('autho_type')
              _this.$axios.post(_this.Configs.memberInfo,{
                  uid: autho,
                  type: authoType
              })
                  .then(function(res){
                      let code = res.data.code//状态
                      if(code === 200){
                          let record = res.data.data//接收的数据

                          _this.user = record
                          //保存到缓存一些个人会员信息
                          localStorage.setItem('nickname',record.nickname)
                          localStorage.setItem('portrait',record.portrait)
                      }else{
                          _this.$message('后台没有查到此会员请重新授权登录')
                          _this.quit()//退出登录 重新赋值状态

                      }


                  })

          }

       }

    }
</script>

<style scoped>
  .user_info{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }


</style>
