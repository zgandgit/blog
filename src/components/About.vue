<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'/about'"></head-view>
    </el-header>

    <el-main>
      <div class="container bor-6 activity">



        <el-row :gutter="12">
          <el-carousel :interval="4000" type="card" height="200px" class="conceal-hide">
            <el-carousel-item v-for="item in 6" :key="item">
              <div class="imgs" style="background-color: #cccccc">
              </div>
            </el-carousel-item>
          </el-carousel>

          <div>
            <el-col :span="6" v-for="(v,i) in courseList" class="main about-min">
              <el-card shadow="hover">
                <div class="cover" :style="{backgroundImage: 'url(' +host+v.resource.url + ')' }"></div>
                <div class="desc">
                  <div class="title">{{v.title}}</div>
                  <div class="date">
                    <span class="icon"></span>
                    <span>{{v.intro}}</span>
                  </div>
                  <div class="date">
                    <span class="icon sction"></span>
                    <span>{{v.num}}章</span>
                  </div>
                  <div class="bottom">
                    <div class="address">
                      <span class="icon"></span>
                      <span>{{v.page_view}}</span>
                    </div>

                    <router-link v-if="v.artice != null" :to="{ path: 'Course',query:{id:v.artice.aid,cid:v.id}}" target="_blank">
                      <div class="btn-join">
                        查看
                      </div>
                    </router-link>



                  </div>
                </div>
              </el-card>
            </el-col>
          </div>



        </el-row>
        <el-row :gutter="12">
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
        </el-row>

      </div>
    </el-main>

  </el-container>
</template>

<script>
  export default {
    name: 'About',
      data(){
          return{
              host:this.Configs.host,
              courseList:'',
              num: 10,//每页查询的条数
              page: 1,//当前页数
              total:0//总条数
          }
      },
      created: function () {
          let _this = this
      },
      mounted: function (){
          //获取教程列表
          this.courses()
      },
      methods: {
          courses: function () {
              let _this = this
              _this.$axios.post(_this.Configs.courseList, {
                  num   :  _this.num,//每页查询的条数
                  page  :  _this.page//第几页
              })
                  .then(function (res) {

                      let code = res.data.code//状态
                      if (code === 200) {
                          let record = res.data.data//接收的数据
                          _this.courseList = record.data
                          _this.page = record.current_page
                          _this.total = record.total
                      } else {
                          _this.$message(res.data.msg)
                      }
                  })
          },
          handleCurrentChange:function (val) {
              let _this = this
              _this.page = val
              _this.courses();//教程列表
          },
      }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page{text-align: center}
  .activity .cover{
    height: 160px;
    margin:-20px -20px 0px -20px;
    background-size: cover;
    cursor: pointer;
  }
  .activity .desc{
    padding-top: 20px;
    cursor: pointer;
  }
  .activity .desc .title{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 30px;
    font-size: 14px;
    font-weight: 700;
  }
  .activity .desc .date{
    margin-top: 6px;
    display: flex;
  }
  .activity .desc .icon{
    width: 16px;
    height: 16px;
    margin-right: 5px;
    display: inline-block;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;


  }
  .activity .desc .date .icon{
    background-image: url('../../static/images/class.png');
  }
  .activity .desc .date .sction{
    background-image: url('../../static/images/section.png');
  }
  .activity .desc span{
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .activity .desc .bottom{
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
  }
  .activity .bottom .address{
    display: flex;
    align-items: center;
  }
  .activity .bottom .btn-join{
    width: 100px;
    height: 25px;
    border-radius: 30px;
    background-color: #4d91fd;
    line-height: 25px;
    color: #fff;
    text-align: center;
  }
  .activity .desc .bottom .icon{
    background-image: url('../../static/images/browse.png');
  }

  .activity .main{
    margin-bottom: 20px;
  }

  /*幻灯片*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .imgs{width: 100%;height: 100%;background-size: cover}
</style>
