// 首页商品分类接口
module.exports = function (param) {
  return {
    success: '0000',
    errorCode: '0000',
    msg: '',
    time: ['今天', '明天', '本周末', '一个月内'],
    'data|8': [{
      'id': '@id',
      'itemType|+1': ['演唱会', '音乐会', '歌剧话剧', '曲苑杂坛', '体育比赛', '儿童亲子', '舞蹈芭蕾', '二次元'],
      'level': 1,
      'parent': 0,
      'aliasName|+1': ['戏剧', '体育', '亲子', '摇滚', '舞蹈古典'],
      'children|0-4': [{
        'id': '@id',
        'itemType|+1': ['子类1', '子类2', '子类3', '子类4', '子类5', '子类6'],
        'level': 2,
        'parent': 1,
        'ttName|+1': [{
        'i_Name|+1': ['展会', '特色体验', '风景区', '声乐及合唱', '室内乐及古乐', '独奏管弦乐'],
          
        }]
      }],
      'hotItems|7': [{
        'id': '@id',
        // 'itemType': 'this.itemType',
        'itemName': '@csentence',
        'minPrice|100-1000': 123,
        "itemName": '@csentence(5)',
        "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
        "areaName|1": [ "北京", "上海","深圳", "杭州","广州","成都","西安","石家庄"],
        "address": '@county(true)',
        "startDate": '@datetime("yyyy-MM-dd")',
        "endDate": '@datetime("yyyy-MM-dd")',
        'imgUrl|+1': ['/static/img/cardimg1.jpg',
          '/static/img/cardimg2.jpg',
          '/static/img/cardimg3.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg5.jpg'
        ]
      }]
    }]
  }
}
