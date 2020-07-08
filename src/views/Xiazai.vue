<template>
  <div class='container'>
    <!-- 顶部导航+轮播图 -->
    <topnav></topnav>
    <!-- 资料下载内容 -->
    <div class="z">
      <div class="zl">
        <div class="zl-top">
          <span>资料下载</span>
          <span>点击文件即可自行下载</span>
        </div>
        <div class="zl-content">
          <div class="mh">
              <div class="mh-a">
                <span >名称</span>
                <span>文件类型</span>
              </div>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
              <p>
                <span>高炉炼铁工 职业标准</span>
                <span>PDF类型</span>
              </p>
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
.z{
  width: 100%;
  height: 700px;
  background:rgba(0, 0, 0, 0.1);
  padding-top: 80px;
  .zl{
    width: 1200px;
    height: 500px;
    background-color: white;
    margin: auto;
    .zl-top{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border: 1px solid gainsboro;
      box-sizing: border-box;
      span:first-child{
    margin: 0 30px;
    font-size: 20px;
      }
      span:last-child{
        color: gainsboro;
      }
    }
    .zl-content{
      width: 1200px;
      height: 500px;
      // border: 1px solid gainsboro;
      border-top:0;
      margin: auto;
      border-bottom: 0;
      .mh{
        width: 1140px;
        height: 450px;
        margin: auto;
        margin-top: 40px;
        .mh-a{
          height: 50px;
          line-height: 50px;
          padding: 0 30px;
          background-color: gainsboro;
          span:last-child{
            margin-left: 700px;
          }
        }
        p{
          height: 50px;
          line-height: 50px;
          border: 1px solid gainsboro;
          margin: 0;
          border-top: 0;
          span:first-child{
            padding-left: 30px;
          }
          span:last-child{
            margin-left: 600px;
          }
        }
      }
    }
  }
}

</style>
