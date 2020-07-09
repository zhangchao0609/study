<template>
  <div class="layout-demo-1-vue">
    <Layout>
      <HHeader>
      <div class="nav-a">
        <img src="../assets/avatar.jpg" alt="">
        <Menu :datas="data" mode="horizontal"></Menu>
      </div>
      </HHeader>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          title: '首页',
          href: '/home',
          key: 'shouye',
          icon: 'h-icon-home',
          nativeLink: true

        },
        {
          title: '报考条件',
          href: '/condition',
          key: 'baokao',
          icon: 'h-icon-users',
          nativeLink: true
        },
        {
          title: '下载链接',
          href: '/xiazai',
          key: 'xiazai',
          icon: 'h-icon-inbox',
          nativeLink: true
        },
        {
          title: '缴费',
          key: 'jiaofei',
          href: '/jiaofei',
          icon: 'h-icon-user',
          nativeLink: true
        }
      ]
    }
  },
  methods: {
    to (data) {
      this.$router.push(data.href)
    }
  }
}
</script>
<style lang="less">
.layout-demo-1-vue {
  .h-layout-header{
     background:#333;
     color: #fff;
     line-height: 64px;
     height: 64px;
     text-align: center;
       img{
        display: block;
        float: left;
        margin-left: -48px;

        }
      .nav-a{
        width: 1200px;
        height: 64px;
        padding-top:10px;
        margin: auto;
        /deep/.h-menu-li{
          margin:0  94px;
              }
          }
  }
}
</style>
