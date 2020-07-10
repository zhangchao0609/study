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
            <div class="title">
            <Row v-height="50">
              <Cell>
                <p :class="{'active':currentSort==index}"  v-for="(item,index) in appiy"  :key="index" @click="conTent(item)">{{item.title}}</p>
              </Cell>
            </Row>
            </div>
            <Row  v-height="300">
                <Cell class="cell" width='24' v-show="showIndex===item.id" v-for="item in appiy" :key="item.id">
                  {{item.content}}
                  </Cell>
            </Row>

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
      showIndex: 1,
      // 高亮效果
      currentSort: 0,
      // 申请数据
      appiy: []
    }
  },
  components: {
    topnav,
    bottomnav,
    lunbo
  },
  created () {
    this.appIy()
  },
  methods: {
    // 获取企业申请数据
    appIy () {
      this.$axios.get('/getAppiy').then((res) => {
        console.log(res)
        this.appiy = res.data
      })
    },
    // 点击切换
    conTent (item) {
      console.log(item)
      this.currentSort = item.id - 1
      this.showIndex = item.id
    }
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
    height: 500px;
    margin:auto;
    margin-top: 40px;
    box-sizing: border-box;
    .title{
      width: 1200px;
       box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
       height: 50px;
       line-height: 50px;
       box-sizing: border-box;
         .h-col{
         display: flex;
         font-size: 18px;
         text-align: center;
         .active{
          background-color: black;
          color: white;
        }
         p{
           flex: 1;
           margin: 0;
         }
       }
    }
    .h-row{
        background-color: white;
        margin-top: 50px;
        .cell{
          line-height: 50px;
          text-align: center;
       padding: 60px 30px 0;
       font-size: 16px;

        }
        }
    }
  }
</style>
