// 首页楼层接口
module.exports = function () {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    'data|4': [{
      'index|+1': 1,
      // 'itemTypeName': function () {
      //   return '楼层' + this.index
      // },
      'itemTypeName|+1': ['演唱会', '歌剧话剧','体育比赛', '儿童亲子'],
      itemTypeId: '@id',
      'imgUrl|+1': [
        '/static/img/big4.jpg',
        '/static/img/big1.jpg',
        '/static/img/big2.jpg',
        '/static/img/big3.jpg',
      ],
      'items|15': [{
        id: '@id',
        itemName: '@csentence',
        areaId: 100,
        areaName: '@city',
        address: '@city(true)',
        startDate: '@date',
        endDate: '@date',
        'imgUrl|+1': [
          '/static/img/cardimg1.jpg',
          '/static/img/cardimg3.jpg',
          '/static/img/cardimg6.jpg',
          '/static/img/cardimg2.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg6.jpg',
          '/static/img/cardimg3.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg1.jpg',
          '/static/img/cardimg6.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg2.jpg',
          '/static/img/cardimg1.jpg',
          '/static/img/cardimg6.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg2.jpg',
          '/static/img/cardimg3.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg4.jpg',
          '/static/img/cardimg6.jpg',
          '/static/img/cardimg1.jpg',
          '/static/img/cardimg5.jpg',
          '/static/img/cardimg1.jpg',
          '/static/img/cardimg6.jpg'
        ],
        'minPrice|100-1000': 123
      }]
    }]
  }
}
