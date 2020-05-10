<template>
  <div class="details">
    <dm_header></dm_header>
    <total_header></total_header>
    <div class="details_box">
      <div class="details_box_l">
        <div class="dt_message">
          <div class="dt_message_l">
            <img :src="dt_data.imgUrl" alt />
          </div>
          <div class="dt_message_r">
            <ul class="dt_message_list">
              <li class="message_list_fir">
                <span>总票代</span>
                【{{dt_data.areaName}}】[ {{dt_data.abstractMessage}} ] {{dt_data.itemName}}
              </li>
              <li>时间：{{dt_data.startTime}}</li>
              <li>
                场馆：{{dt_data.adress}}
                <i class="el-icon-map-location"></i>
              </li>
              <li>
                <i class="el-icon-info"></i> 场次时间均为演出当地时间
              </li>
              <li>
                场次
                <div class="message_list_time">
                  <span>{{dt_data.startTime}}</span>
                </div>
              </li>
              <li>
                票档
                <div class="message_list_np">
                  <span>现场票{{dt_price_num}}元</span>
                </div>
                <span class="message_list_sp">
                  票{{dt_price_num+30}}元（限量），
                  <span v-if="dt_data.vip_Price0">缺货登记</span>
                </span>
              </li>
              <li>
                数量
                <el-input-number size="mini" v-model="num4" :max="6" :min="0"></el-input-number>
                <span class="message_list_sp7">每笔订单限购6张</span>
              </li>
              <li>
                合计
                <span class="message_list_sp8">￥ {{nu_total}}</span>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    下拉菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>普通票：{{num4}}张</el-dropdown-item>
                    <el-dropdown-item>vip票：0张</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <button class="message_list_but">立即购买</button>
              </li>
            </ul>
          </div>
        </div>
        <!-- 详细信息组件 -->
        <dt_message :dt_data1="dt_data"></dt_message>
      </div>
      <div class="details_box_r">
        <div class="service">
          <div class="service-note">
            <div class="service-note-name">
              <i class="el-icon-circle-close"></i>
              不支持退
            </div>
            <div class="service-note-desc">
              票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、
              稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理
            </div>
          </div>
          <div class="service-note">
            <div class="service-note-name">
              <i class="el-icon-circle-close"></i>
              不支持选座
            </div>
            <div class="service-note-desc">本项目不支持自主选座，同一个订单优先连座</div>
          </div>
          <div class="service-note">
            <div class="service-note-name">
              <i class="el-icon-circle-close"></i>
              电子票
            </div>
            <div class="service-note-desc">电子票：通过票夹中的二维码或身份证，可以直接验票入场（具体以下单后票夹信息为准）</div>
          </div>
          <div class="service-note">
            <div class="service-note-name">
              <i class="el-icon-circle-close"></i>
              纸质发票
            </div>
            <div class="service-note-desc">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</div>
          </div>
          <div class="service-qrcode">
            <div class="service-qrcode-text">
              <span>手机扫一扫</span>
              <span>下单更快捷</span>
            </div>
            <img
              src="https://damai-item.oss-cn-beijing.aliyuncs.com/projQcode/6083610780/2/608361078035.jpg"
              class="service-qrcode-img"
            />
          </div>
        </div>
        <div class="recommend">
          <div class="recommend_title">为你推荐</div>
          <div class="recommend_item">
            <img
              class="item-img"
              src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/
              2251059038/O1CN01RiTl972GdSE5ZrRKn_!!2251059038.png_q60.jpg_.webp"
            />
            <div class="item-info">
              <div class="item-info-main">
                <div class="item-info-name">果味VC 2020『拥抱之城』巡演 上海站</div>
                <div class="item-info-address">上海 | MAO Livehouse上海</div>
                <div class="item-info-address">2020.04.25 周六 20:30</div>
                <div class="item-info-tags"></div>
              </div>
              <div class="item-info-price">
                <span class="item-info-price-number" style="color: #ff1268;">¥99.0</span>
                <span style="font-size: 12px">起</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dm_footer></dm_footer>
  </div>
</template>
<script>
import dm_footer from "../footer/footer.vue";
import dm_header from "../header/header";
import dt_message from "./dt_message/dt_message";
import total_header from "../total_header/total_header";
export default {
  name: "HelloWorld",
  components: {
    dm_footer,
    dm_header,
    dt_message,
    total_header
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num4: 2,
      dt_data: {},
      dt_price_num: 0
    };
  },
  computed: {
    nu_total() {
      return this.num4 * this.dt_price_num * 1;
    }
  },
  mounted() {
    this.$http
      .postRequest({
        type: "getItemData",
        data: {}
      })
      .then(res => {
        console.log(res);
        this.dt_data = res.data;
      });
    this.$http
      .postRequest({
        type: "getPrice",
        data: {}
      })
      .then(pos => {
        pos.data.forEach(res => {
          if (res.id == 2) {
            console.log(res);
            this.dt_price_num = res.price;
          }
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.item-info-price {
  margin-top: 28px;
}
.item-info-address {
  font-size: 12px;
  color: #9b9b9b;
  margin-top: 12px;
}
.item-info {
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 15px;
  font-size: 12px;
}
.item-img {
  width: 120px;
  height: 100%;
}
.recommend_item {
  display: flex;
  height: 160px;
  margin-bottom: 30px;
  cursor: pointer;
}
.recommend_title {
  margin-bottom: 24px;
  font-size: 20px;
  color: #000;
  line-height: 28px;
}
.recommend {
  margin-top: 60px;
}
.service-qrcode-text {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.service-qrcode {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 30px;
  border: 0.5px solid #e2e2e2;
  background: #fff;
}
.service-note {
  margin-bottom: 18px;
}
.service-note-desc {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
.service-note-name i {
  color: #ff1268;
}
.service {
  padding: 24px 15px;
  background: #fafafa;
  border: 1px solid #ebebeb;
}
.details_box_r {
  box-sizing: border-box;
  width: 320px;
  height: 320px;
  border-left: 1px solid #ebebeb;
  padding: 40px 18px 0;
}

.dt_message_list li {
  list-style: none;
  margin-bottom: 20px;
}
.dt_message_list li:first-child {
  font-size: 22px;
  color: #000;
}
.message_list_fir span {
  display: inline-block;
  width: 60px;
  height: 24px;
  position: relative;
  top: -3px;
  text-align: center;
  line-height: 24px;
  background: -webkit-linear-gradient(135deg, #ff1268, #ff5593);
  background: -moz-linear-gradient(135deg, #ff1268 0, #ff5593 100%);
  background: -o-linear-gradient(135deg, #ff1268 0, #ff5593 100%);
  background: linear-gradient(-45deg, #ff1268, #ff5593);
  z-index: 10;
  font-size: 14px;
  color: #fff;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius-bottomright: 10px;
  border-bottom-right-radius: 10px;
  -webkit-border-top-left-radius: 3px;
  -moz-border-radius-topleft: 3px;
  border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topright: 3px;
  border-top-right-radius: 3px;
}
.dt_message_list li:nth-child(2) {
  font-size: 16px;
  color: #4a4a4a;
}
.dt_message_list li:nth-child(3) {
  font-size: 16px;
  color: #4a4a4a;
}
.dt_message_list li:nth-child(4) {
  color: #999;
  font-size: 12px;
  margin: 24px 0 9px;
}
.message_list_time {
  border: 1px solid #ff1268;
  color: #ff1268;
  background: #fff;
  font-size: 12px;
  color: #000;
  padding: 10px 24px;
  margin: 0 6px 6px 0;
  position: relative;
  cursor: pointer;
  margin-left: 20px;
}
.message_list_time span {
  color: #ff1268;
  font-size: 12px;
  cursor: pointer;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.dt_message_list li:nth-child(5) {
  font-size: 22px;
  color: #000;
  display: flex;
}
.el-input-number--mini {
  margin-left: 15px;
}
.message_list_sp span {
  display: inline-block;
  border: 1px solid #6a7a99;
  color: #6a7a99;
  text-align: center;
  padding: 0 4px;
  font-size: 8px;
  border-radius: 5px;
  background-color: transparent;
}
.message_list_sp {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  font-size: 12px;
  color: #000;
  padding: 10px 24px;
  margin: 0 6px 6px 0;
  cursor: pointer;
  text-align: center;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #f6f7f8;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;
}
.message_list_np span {
  color: #ff1268;
  font-size: 12px;
  cursor: pointer;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.message_list_np {
  border: 1px solid #ff1268;
  color: #ff1268;
  background: #fff;
  font-size: 12px;
  color: #000;
  padding: 10px 24px;
  margin: 0 6px 6px 0;
  position: relative;
  cursor: pointer;
  margin-left: 20px;
}
.dt_message_list li:nth-child(6) {
  font-size: 22px;
  color: #000;
  display: flex;
}
.dt_message_list li:nth-child(7) {
  font-size: 22px;
  color: #000;
  display: flex;
}
.message_list_sp7 {
  margin-top: 12px;
  margin-left: 15px;
  font-size: 12px;
  color: #999;
  line-height: 22px;
  vertical-align: text-top;
}
.dt_message_list li:nth-child(8) {
  font-size: 22px;
  color: #000;
  display: flex;
}
.message_list_sp8 {
  font-size: 21px;
  color: #ff1268;
  margin-left: 15px;
}
.dt_message_list li:nth-child(9) {
  font-size: 22px;
  color: #000;
  display: flex;
}
.message_list_but {
  margin-top: 25px;
  margin-left: 50px;
  width: 210px;
  height: 40px;
  line-height: 40px;
  background-color: #ff2d79;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  outline: none;
  border: none;
}
.el-dropdown {
  margin-left: 15px;
  margin-top: 5px;
}
.dt_message img {
  width: 270px;
  height: 360px;
  margin-left: 30px;
}
.dt_message_r {
  margin: 0 30px;
}
.dt_message {
  padding: 40px 0 30px;
  min-height: 360px;
  background-color: #fff;
  display: flex;
}
.details_box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.details_box_l {
  flex: 1;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.details {
  box-shadow: 2px 2px -2px black;
}
</style>
