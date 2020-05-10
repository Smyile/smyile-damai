// 首页今日推荐接口
module.exports = function () {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    'data|6': [{
      'id': '@id',
      'itemName': '@csentence',
      'minPrice|100-1000': 123,
      'imgUrl|+1': [
        '/static/img/t6.jpg',
        '/static/img/t5.jpg',
        '/static/img/t4.jpg',
        '/static/img/t3.jpg',
        '/static/img/t2.jpg',
        '/static/img/t1.jpg',
      ]
    }]
  }
}
