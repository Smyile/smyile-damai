<template>
  <div class="myself">
    <dm_header></dm_header>
    <total_header></total_header>
    <div class="self_box">
      <div class="self_box_l">
        <div class="self_menu_header">
          <div class="coupon_title">我的大麦</div>
        </div>
        <div class="self_menu">
          <div class="menu_user">
            <p class="menu_user_title">用户中心</p>
            <div class="menu_user_list">
              <p><router-link to='/myself/user_center'>订单管理</router-link></p>
              <p><router-link to='/myself/coute'>我的优惠劵</router-link></p>
            </div>
          </div>
          <div class="menu_user">
            <p class="menu_user_title">账户中心</p>
            <div class="menu_user_list">
              <p><router-link to='/myself/get_adress'>收货地址</router-link></p>
              <p><router-link to='/myself/user_message'>账号设置</router-link></p>
              <p><router-link to='/myself/count_center'>个人信息</router-link></p>
              <p><router-link to='/myself/user_news'>常用购票人管理</router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="self_box_r"><router-view></router-view></div>
    </div>
    <dm_footer></dm_footer>
  </div>
</template>
<script>
import dm_footer from "../footer/footer.vue";
import dm_header from "../header/header";
import total_header from "../total_header/total_header";

export default {
  name: "HelloWorld",
  components: {
    dm_footer,
    dm_header,
    total_header
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$http
      .postRequest({
        type: "getlineNav",
        data: {}
      })
      .then(res => {
        // console.log(res);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.menu_user_list p {
  font-size: 14px;
  color: #333;
  padding-top: 15px;
}
.menu_user_title {
  width: 100px;
  font-size: 20px;
  color: #000;
  margin: 30px 0 15px 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  box-shadow: 2px 2px 2px rgba(73, 68, 73, 0.568);
  background-color: #b97890;
}
.self_menu {
  padding-bottom: 15px;
}
.coupon_title {
  width: 122px;
  height: 33px;
  padding-left: 11px;
  line-height: 30px;
  font-size: 25px;
  color: #fff;
  font-weight: 700;
  margin-bottom: -3px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(119, 63, 116, 0.185);
  background-color: #ff1268;
}
.self_menu_header {
  font-size: 22px;
  color: #ff1268;
  margin-top: 40px;
}
.self_menu {
  padding-bottom: 15px;
}

.self_box_l {
  padding-bottom: 15px;
  width: 169px;
}
.self_box_r {
  margin:40px 0;
  padding-bottom: 15px;
  /* background-color: #741; */
  flex: 1;
}
.self_box {
  width: 1000px;
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  /* background-color: #147; */
}
</style>
