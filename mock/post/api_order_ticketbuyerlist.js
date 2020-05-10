// 1. 根据当前用户返回当前用户常用购票人列表
module.exports = function () {
  // 用于返回当前用户常用购票人列表
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|3": [{
      // 联系人ID
      linkId: "@id()",
      // 用户姓名
      name: '@cname()',
      // 身份证号码
      idCard: "372892303849230398",
      // 	字符串	卡类型(0:身份证,1:军官证)
      tellphone: "17845621593",
      // 	字符串	卡类型(0:身份证,1:军官证)
      adress: "@county(true)"+"@csentence(5)",
      // 	字符串	卡类型(0:身份证,1:军官证)
      "cardType|1": true
    }]
  }
}
