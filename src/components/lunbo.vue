<template>
    <!-- 轮播图 -->
    <div class="image">
     <Carousel  :datas="params" :height="400"   pageTheme="circle" ></Carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style scoped lang='less'></style>
