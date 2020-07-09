<template>
  <div class='container'>
    <!-- 顶部导航 -->
    <topnav></topnav>
    <!-- 轮播图 -->
    <lunbo></lunbo>
    <!-- 缴费信息表 -->
    <div class="cost">
      <h2>缴费信息登记表</h2>
     <div class="message">
      <Form :label-width="110" :model="data" ref="form" :rules="validRules" showErrorTip>
      <FormItem label="姓名" prop="name">
        <input type="text" v-model="data.name" />
      </FormItem>
      <FormItem label="手机号" prop="mobile">
        <input type="text" v-model="data.mobile" />
      </FormItem>
       <FormItem label="身份证号" prop="idnumber">
        <input type="text" v-model="data.idnumber" />
      </FormItem>
      <FormItem label="公司名称" prop="company">
        <input type="text" v-model="data.company" />
      </FormItem>
      <FormItem>
        <Button color="primary" @click="submit">提交</Button>
        <Button @click="reset">取消</Button>
      </FormItem>
      <div class="code" v-qr="options" v-if="options" />

      </Form>
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
import lunbo from '../components/lunbo.vue'
export default {
  data () {
    return {
      required: true,
      // 表单数据
      data: {
        name: null,
        mobile: null,
        number: null,
        company: null
      },
      // 匹配规则
      validRules: {
        rules: {
          name: {
            valid: {
              pattern: /^[a-zA-Z\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
              message: '姓名格式不正确'
            }
          },
          mobile: ['mobile'],
          idnumber: {
            valid: {
              pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
              message: '身份证格式不正确'
            }
          },
          company: {
            valid: {
              pattern: /^[a-zA-Z\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
              message: '公司名称格式不正确'
            }
          },
          required: ['name', 'mobile', 'idnumber', 'company']
        }
      },
      // 二维码配置
      options: null
    }
  },
  components: {
    lunbo,
    topnav,
    bottomnav
  },
  // 监听
  watch: {
    required () {
      this.$refs.form.resetValid()
    }
  },
  methods: {
    // 提交  生成二维码
    submit () {
      const validResult = this.$refs.form.valid()
      if (validResult.result) {
        this.$Message('验证成功,二维码生成')
        console.log(this.data.name)
        this.options = this.data.name
      }
    },
    // 取消 清除表单数据,二维码消失
    reset () {
      this.data.name = null
      this.data.mobile = null
      this.data.idnumber = null
      this.data.company = null
      this.options = ''
    }
  }
}
</script>

<style scoped lang='less'>
.cost{
  width: 100%;
  height: 600px;
  padding-top: 60px;
  h2{
    text-align: center;
    margin-bottom: 40px;
  }
  .message{
    width: 50%;
    height: 400px;
    margin: 0 auto;
    .code{
       width: 130px;
      height: 130px;
      margin: auto;
      /deep/canvas{
            width: 130px;
            height: 130px;
        }
      }
    }
}
</style>
