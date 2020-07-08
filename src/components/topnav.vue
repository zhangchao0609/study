<template>
  <div class="layout-demo-1-vue">
    <Layout>
      <HHeader>
        <img src="../assets/avatar.jpg" alt="">
      <div class="nav-a" style="width:1200px;height:64px;margin:auto; padding-top:10px">
        <Menu className="caidan" :datas="data" mode="horizontal"></Menu>
      </div>
      </HHeader>
          <!-- 轮播图 -->
    <div class="image">
     <Carousel  :datas="params" :height="400"   pageTheme="circle" @click=to ></Carousel>
    </div>
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
      ],
      // 轮播图
      params: [
        {
          title: 'Page 1',
          link: true,
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg'
        },
        {
          title: 'Page 2',
          link: 'http://www.baidu.com',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg'
        },
        {
          title: 'Page 3',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg'
        },
        {
          title: 'Page 4',
          image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg'
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
    margin-top: 10px;
    margin-left: 380px;
    }
  }
}
</style>
