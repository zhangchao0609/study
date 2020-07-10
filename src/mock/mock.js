// 导入mock.js模拟假数据
import Mock from 'mockjs'

// 轮播图的请求地址,方式,响应内容
Mock.mock('/getImg', 'get', () => {
  return [
    {
      title: 'Page 1',
      link: 'http://www.baidu.com',
      image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg'
    },
    {
      title: 'Page 2',
      link: 'http://www.baidu.com',
      image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg'
    },
    {
      title: 'Page 3',
      link: 'http://www.baidu.com',
      image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg'
    },
    {
      title: 'Page 4',
      link: 'http://www.baidu.com',
      image: 'https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg'
    }
  ]
})
// 下载页面的名称和文件类型
Mock.mock('/getName', 'get', () => {
  return [
    {
      id: 1,
      name: '高炉炼铁工 职业标准(1)',
      type: 'PDF类型'
    },
    {
      id: 2,
      name: '高炉炼铁工 职业标准(2)',
      type: 'PDF类型'
    },
    {
      id: 3,
      name: '高炉炼铁工 职业标准(3)',
      type: 'PDF类型'
    },
    {
      id: 4,
      name: '高炉炼铁工 职业标准(4)',
      type: 'PDF类型'
    },
    {
      id: 5,
      name: '高炉炼铁工 职业标准(5)',
      type: 'PDF类型'
    },
    {
      id: 6,
      name: '高炉炼铁工 职业标准(6)',
      type: 'PDF类型'
    }
  ]
})
// 申请须知内容
Mock.mock('/getAppiy', 'get', () => {
  return [
    {
      id: 1,
      title: '企业职员申请地点',
      content: '1 在本省市,济南市,淄博市,枣庄市,东营市,烟台市,廊坊市,济宁市泰安市,威海市,日照市临汾市,湖市,德州市,聊城市,滨州市,参加失业保险的员工, 登录参保地级人力资源社会保障部门门户网站或省级人力资资源社会保障厅门户网站.办理网上申请.2 青岛市参加失业保障的企业员工,登录青岛市人力资源社会保障部门门户网站,进行网站上申请'

    },
    {
      id: 2,
      title: '企业职员申请条件',
      content: '1 满1年工作者(不含实习期). 2 专科本科以上学历'
    },
    {
      id: 3,
      title: '企业职员申请注意事项',
      content: '个人信息请勿填错'

    }
  ]
})
