<template>
  <el-container>

    <el-header class="bg-c1">
      <head-view v-bind:name="'/activity'"></head-view>
    </el-header>

    <el-main>
      <div class="container bor-6 activity">
        <el-row :gutter="12"  v-if="true">
          <el-carousel :interval="4000" type="card" height="200px" class="conceal-hide">
            <el-carousel-item v-for="item in 6" :key="item">
              <div class="imgs" style="background-color: #cccccc">
                <!--<h3>{{ item }}</h3>-->
              </div>
            </el-carousel-item>
          </el-carousel>


          <div>

            <el-col v-for="i in 20" class="main div-block">
              <el-card shadow="hover">
                <div class="cover" style="background-image: url('https://user-gold-cdn.xitu.io/154459366704059850a004eff275d4cf807154b3da2ce.jpg')"></div>
                <div class="desc">
                  <div class="title">三天蜕变，攻坚 CKA 集训营</div>
                  <div class="date">
                    <span class="icon"></span>
                    <span>01-04 周五</span>
                  </div>
                  <div class="bottom">
                    <div class="address">
                      <span class="icon"></span>
                      <span>杭州</span>
                    </div>
                    <div class="btn-join">
                      查看详情
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>

          <el-col :span="6" v-for="i in 20" class="main conceal-hide">
            <el-card shadow="hover">
              <div class="cover" style="background-image: url('https://user-gold-cdn.xitu.io/154459366704059850a004eff275d4cf807154b3da2ce.jpg')"></div>
              <div class="desc">
                <div class="title">三天蜕变，攻坚 CKA 集训营</div>
                <div class="date">
                  <span class="icon"></span>
                  <span>01-04 周五</span>
                </div>
                <div class="bottom">
                  <div class="address">
                    <span class="icon"></span>
                    <span>杭州</span>
                  </div>
                  <div class="btn-join">
                    查看详情
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>


          </div>

        </el-row>

      </div>
    </el-main>

  </el-container>
</template>

<script>
  export default {
    name: 'Activity'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    height: 40px;
    font-size: 14px;
    font-weight: 700;
  }
  .activity .desc .date{
    margin-top: 6px;
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
    background-image: url('../../static/images/time.png');
  }
  .activity .desc span{
    vertical-align: middle;
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
    background-image: url('../../static/images/sign.png');
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
