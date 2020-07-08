<template>
  <div class='container'>
    <!-- 顶部导航+轮播图 -->
    <topnav></topnav>

  <!--  -->
  <div class="aaa">
  <!-- 数据图 -->
    <div class="data">
      <h-circle class="circle" :percent="25" :stroke-width="18" :size="150">
        <p class="gray-color" v-font="20">122,332,98</p>
          <p class="dark-color" v-font="13">目前达成比例</p>
          <p class="gray-color"><span class="primary-color" v-font="10">25</span>/<span>123</span></p>
      </h-circle>
      <h-circle class="circle" :percent="50" :stroke-width="18" :size="150">
        <p class="gray-color" v-font="22">122,332,98</p>
        <p class="dark-color" v-font="13">目前达成比例</p>
          <p class="gray-color"><span class="primary-color" v-font="10">50</span>/<span>123</span></p>
      </h-circle>
      <h-circle class="circle" :percent="75" :stroke-width="18" :size="150">
        <p class="gray-color" v-font="22">122,332,98</p>
        <p class="dark-color" v-font="13">目前达成比例</p>
          <p class="gray-color"><span class="primary-color" v-font="10">75</span>/<span>123</span></p>
      </h-circle>
      <h-circle class="circle" :percent="100" :stroke-width="18" :size="150">
        <p class="gray-color" v-font="22">122,332,98</p>
        <p class="dark-color" v-font="13">目前达成比例</p>
        <p class="gray-color"><span class="primary-color" v-font="10">100</span>/<span>123</span></p>
      </h-circle>

  </div>
  <!-- 证书价值 -->
  <div class="certificate">
    <p class="c-top">证书价值</p>
    <hr>
    <div class="c-content">
      <div class="box">
        <div class="box-top">
          <i class="h-icon-star"></i>
        </div>
        <p>范围广泛</p>
      </div>
      <div class="box">
        <div class="box-top">
          <i class="h-icon-task"></i>
        </div>
        <p>竞争力强</p>
      </div>
      <div class="box">
        <div class="box-top">
          <i class="h-icon-upload"></i>
        </div>
        <p>待遇高</p>
      </div>
      <div class="box">
        <div class="box-top">
          <i class="h-icon-star"></i>
        </div>
        <p>机会多</p>
      </div>
    </div>
  </div>
   <!-- 机构优势 -->
  <div class="footer">
    <p class="f-top">机构优势</p>
    <hr>
     <div class="f-content">
      <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
        <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
        <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
        <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
        <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
        <div class="f-a">
        <i class="h-icon-complete"></i>
        <p>资深经验</p>
        <p class="zt">八年沉淀专注电商专业</p>
      </div>
     </div>
  </div>
  </div>
<!-- 底部导航 -->
<bottomnav></bottomnav>

</div>
</template>

<script>
// 导入组件
import topnav from '../components/topnav'
import bottomnav from '../components/bottom.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    topnav,
    bottomnav
  }
}
</script>

<style scoped lang='less'>
.aaa{
  width: 100%;
  height: 1400px;
  background:rgba(0, 0, 0, 0.1);
padding-top: 35px;
// 数据图
.data{
  display: flex;
  width: 1200px;
  height: 350px;
  padding-top: 100px;
  text-align: center;
    background-color:white;
    margin: 0 auto;
    .circle{
      flex:1;
    }
}
// 证书价值
 .certificate{
      width: 1200px;
      height: 400px;
      margin: 50px auto;

    .c-top{
      width: 150px;
      height: 30px;
      font-size: 24px;
      font-weight: 700;
      margin: 0 auto;
    }
    hr{
      width: 50px;
      height: 3px;
      margin-right: 600px;
      background-color: blue;
    }
    .c-content{
      width: 1200px;
      height: 400px;
      margin-top: 20px;
      .box{
      float: left;
      width: 290px;
      height: 400px;
      background-color:white;
      box-sizing: border-box;
      margin-right: 13px;
        .box-top{
        width: 70%;
        height: 280px;
         line-height: 280px;
         text-align: center;
        border-bottom: 3px solid blue;
        margin: 0 auto;
        padding-top: 30px;
        box-sizing: border-box;
        i{
          width: 100px;
          height: 108px;
          line-height: 100px;
          border-radius: 50%;
          border: 5px solid blue;
          text-align: center;
          font-size: 60px;
          color: blue;

        }
      }
      p{
        width: 100%;
        height: 120px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding-top: 15px;
      }
    }
    .box:nth-child(4){
      margin-right:0px;
    }
  }
}
// 机构优势
.footer{
  width: 100%;
  height: 300px;
  padding-top: 70px;
  .f-top{
     width: 150px;
      height: 30px;
      font-size: 24px;
      font-weight: 700;
      margin: 0 auto;
  }
   hr{
      width: 50px;
      height: 3px;
      margin-right: 948px;
      background-color: blue;
    }
    .f-content{
      width: 1200px;
      height: 350px;
      margin: auto;
      .f-a{
        float: left;
        width: 400px;
        height: 150px;
        margin: auto auto;
        padding-top: 20px;
        i{
          width: 50px;
          height: 52px;
          line-height: 52px;
          border-radius: 50%;
          border: 1px solid #cccccc;
          text-align: center;
          margin-left: 150px;
        }
        p{
          font-size: 20px;
          font-weight: 500;
          margin:10px 0;
          text-align: center;
          margin-left: -42px;
        }
        .zt{
          font-weight: 0;
          font-size:16px;
          color:#ccc;
        }
      }
    }
}
}

</style>
