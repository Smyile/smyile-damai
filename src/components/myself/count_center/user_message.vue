<template>
  <div class="user_center">
    <div class="count_center_title">账号设置</div>
    <div class="count_center_box">
      <ul class="title_message">
        <li>
          <a class="on_message" href="#">账号设置</a>
        </li>
        <li class="right_message">
          <span></span>
        </li>
      </ul>
      <ul class="info_safety">
        <li>
          <!-- <img src="./img/right2.png" alt /> -->
          <span class="info_lab">登录密码</span>
          <span class="info_word"></span>
          <a href="#">修改</a>
        </li>
        <li>
          <span class="info_lab"  style="background: url(//dui.damai.cn/damai_v2/passport/images/sec2.png) no-repeat;">邮箱验证</span>
          <span class="info_word">验证邮箱可帮助您快速找回密码，并可接收订单、演出通知、促销活动等提醒</span>
          <button class="info_but">立即绑定</button>
        </li>
        <li>
          <!-- <img src="./img/right2.png" alt /> -->
          <span class="info_lab">手机验证</span>
          <span class="info_word">您验证的手机：176****6696</span>
          <a href="#">更改</a>
        </li>
        <li>
          <span class="info_lab" style="background: url(//dui.damai.cn/damai_v2/passport/images/sec2.png) no-repeat;">邮箱验证</span>
          <span class="info_word">认证您的实名信息，提高安全等级</span>
          <button class="info_but">立即验证</button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.info_but {
  background: url(//dui.damai.cn/damai_v2/passport/images/b.png) no-repeat
    scroll 0 -234px;
  width: 72px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  color: #ed0a75;
  display: inline-block;
  border: none;
}
.info_word {
  width: 445px;
  padding: 0 10px;
  color: #999;
  display: inline-block;
}
.info_lab {
  width: 90px;
  border-right: 1px solid #eef1f3;
  height: 30px;
  line-height: 30px;
  background: url(//dui.damai.cn/damai_v2/passport/images/right2.png) no-repeat;
  padding-left: 55px;
  padding-right: 15px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 22px;
  font-family: "Microsoft YaHei";
}
.info_safety li {
  list-style: none;
  border: 1px solid #eef1f3;
  padding: 25px 20px 25px 25px;
  overflow: hidden;
  zoom: 1;
  margin-top: 15px;
}
</style>
