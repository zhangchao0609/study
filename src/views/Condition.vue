<template>
  <div class='container'>
    <!--  顶部导航 -->
    <topnav></topnav>
    <!-- 轮播 -->
    <lunbo></lunbo>
    <!-- 内容 -->
    <div class="content">
        <h2>职工技能提升补助申请须知</h2>
        <div class="qy">
          <p class="active">企业职员申请地点</p>
          <p>企业职员申请条件</p>
          <p>企业职员申请注意事项</p>
        </div>
        <div class="qy-content">
          <p>1 在本省市,济南市,淄博市,枣庄市,东营市,烟台市,廊坊市,济宁市泰安市,威海市,日照市临汾市,湖市,德州市,聊城市,滨州市,参加失业保险的员工,登录参保地级人力资源社会保障部门门户网站或省级人力资资源社会保障厅门户网站.办理网上申请.</p>
          <p>2 青岛市参加失业保障的企业员工,登录青岛市人力资源社会保障部门门户网站,进行网站上申请</p>
        </div>
    </div>
    <!-- 底部导航 -->
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import topnav from '../components/topnav'
import bottomnav from '../components/bottom.vue'
import lunbo from '../components/lunbo.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    topnav,
    bottomnav,
    lunbo
  }
}
</script>

<style scoped lang='less'>
// 内容
.content{
  width: 100%;
  height: 678px;
  background:rgba(0, 0, 0, 0.1);
  padding-top: 60px;
  h2 {
    width: 1200px;
    margin: auto;
    text-align: center;
  }
  .qy{
    width: 1200px;
    display: flex;
    height: 45px;
    line-height: 45px;
    margin:auto;
    margin-top: 40px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .active{
      background-color: black;
      color: white;
    }
    p{
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      margin: 0 auto;
    }
  }
  .qy-content{
    width: 1200px;
    height: 250px;

    margin: 90px auto 0;
    background-color: white;
    padding-top: 40px;
    p{
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      text-align: center;
      padding: 25px;
      box-sizing: border-box;
    }
  }
}
</style>
