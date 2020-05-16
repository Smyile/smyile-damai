//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  let baseDesc = '<div class="mess-box">' +
    '  <hr>' +
    '  <div class="title">基本信息</div>' +
    '  <div class="body ">' +
    '      <table>' +
    '          <tr class="row">' +
    '              <td class="column">演出时间</td>' +
    '              <td class="column">2018.01.06-01.14</td>' +
    '              <td class="column">演出场馆</td>' +
    '              <td class="column">光华路5号国际会展中心三楼湖西岛音乐厅</td>' +
    '          </tr>' +
    '          <tr class="row">' +
    '              <td class="column">演出时间</td>' +
    '              <td class="column">2018.01.06-01.14</td>' +
    '              <td class="column">演出场馆</td>' +
    '              <td class="column">光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅</td>' +
    '          </tr>' +
    '      </table>' +
    '  </div>' +
    '</div>';
  let projectDesc =
    '<div class="form_floor_title">活动介绍</div>'+
    '<div class="form_floor_word">'+
    '<p>[ 乐海方舟 x 刺猬现场 ] 联合呈现：</p>'+
    '<p>"我有点紧张"新秀（中国新说唱2019殿军）全国巡演</p>'+
    '<p>'+
    ' <img width="600" height="800" src="//img.alicdn.com/imgextra/i1/2251059038/O1CN0145DbsY2GdSDLhOIIG_!!2251059038.jpg_q60.jpg_.webp" />'+
    ' </p>'+
    ' <p>票价：预售票160元（限量）现场票200元 VIP票220元（限量）</p>'+
    ' <p>'+
    '   <strong>VIP票可享受演出前优先入场和演出后合影待遇</strong>'+
    ' </p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀巡演 长沙站</p>'+
    ' <p>时间：2019年12月27日（周五）20:30</p>'+
    ' <p>场地：长沙 46LIVEHOUSE</p>'+
    ' <p>地址：长沙市岳麓区新民路52号负一楼</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀巡演 宁波站</p>'+
    ' <p>时间：2019年12月28日（周六）20:30</p>'+
    ' <p>场地：宁波 CMK Live-House（城门口艺术空间）</p>'+
    ' <p>地址：宁波市海曙区战船街2号宁波影都旁（地铁一号线A出口和义方向）</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀巡演 合肥站</p>'+
    ' <p>时间：2019年12月29日（周日）20:30</p>'+
    ' <p>场地：合肥 ON THE WAY LIVEHOUSE</p>'+
    ' <p>地址：合肥市包河区罍街二期15号楼安徽原创音乐基地3楼</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀巡演 重庆站</p>'+
    ' <p>时间：2020年1月3日（周五）20:30</p>'+
    ' <p>场地：重庆 坚果LIVEHOUSE</p>'+
    ' <p>地址：重庆市渝中区较场口90号负一楼B1-21</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀巡演 成都站</p>'+
    ' <p>时间：2020年1月4日（周六）20:30</p>'+
    ' <p>场地：MAO Livehouse成都</p>'+
    ' <p>地址：成都市成华区杉板桥路天荟·万科城市广场</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 深圳站</p>'+
    ' <p>时间：2020年3月6日（周五）20:30</p>'+
    ' <p>场地：深圳 HOU LIVE</p>'+
    ' <p>地址：深圳市福田区滨河大道9289号KK ONE购物中心负一层B112a</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 广州站</p>'+
    ' <p>时间：2020年3月7日（周六）20:30</p>'+
    ' <p>场地：MAO Livehouse广州</p>'+
    ' <p>地址：广州市海珠区新港东路1088号会展南五路3号一楼</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 西安站</p>'+
    ' <p>时间：2020年3月8日（周日）20:30</p>'+
    ' <p>场地：MAO Livehouse西安</p>'+
    ' <p>地址：陕西省西安市曲江新区雁翔路3369号曲江创意谷LG-76、78、79号</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 北京站</p>'+
    ' <p>时间：2020年4月3日（周五）20:30</p>'+
    ' <p>场地：MAO Livehouse北京</p>'+
    ' <p>地址：北京海淀区复兴路69号院2号136、G23室</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 上海站</p>'+
    ' <p>时间：2020年5月16日（周六）20:30</p>'+
    ' <p>场地：MAO Livehouse上海</p>'+
    ' <p>地址：上海市黄浦区重庆南路308号3楼</p>'+
    ' <p>[ 乐海方舟 x 刺猬现场 ] 联合呈现："我有点紧张"新秀全国巡演 杭州站</p>'+
    ' <p>时间：2020年5月17日（周日）20:30</p>'+
    ' <p>场地：MAO Livehouse杭州</p>'+
    ' <p>地址：杭州市上城区中山南路77号尚城1157·利星三楼</p>'+
    ' <p>'+
    '   <img width="600" height="300" src="//img.alicdn.com/imgextra/i2/2251059038/O1CN01XvnCaE2GdSDKidmZA_!!2251059038.jpg_q60.jpg_.webp" />'+
    ' </p>'+
    ' <h3>购票须知</h3>'+
    ' <p>票品售出概不退换（因不可抗力因素导致演出取消或延期除外），请您在购买时务必仔细核对您的订单信息并审慎下单。</p>'+
    '<p>演出凭订单姓名和手机号在场地的入口处核验入场，无须邮寄实体票。</p>'+
    ' <p>演出场地内不设座位，站立观看（部分场地有少量吧台座位或卡座）。</p>'+
    ' <p>如购票后因故无法观看演出，请自行处理门票，严禁在此发布任何形式的转票、求票等信息。</p>'+
    '</div>';
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      id: 161,
      itemName: "联合呈现：“我有点紧张”新秀全国巡演 上海站",
      abstractMessage: "乐海方舟 x 刺猬现场",
      itemType1Id: "1",
      itemType1Name: "电影",
      itemType2Id: "101",
      itemType2Name: "演唱会",
      areaId: "1",
      areaName: "上海",
      state: 2,
      basicDescription: baseDesc,
      projectDescription: projectDesc,
      reminderDescription: "",
      imgUrl: "/static/img/www.webp",
      cinemaId: 123,
      adress: "上海市 | MAO Livehouse上海",
      latitude: 125.55,
      longitude: 156.77,
      n_Price: 200,
      vip_Price:220,
      vip_Price0:true,
      avgScore: 4.6,
      commentCount: 3000,
      startTime: "2020.05.16 周六 20:30",
      endTime: "2020.05.16 周六 22:30"
    }
  }
}