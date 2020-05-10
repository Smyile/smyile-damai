<template>
  <div class="dt_dt_message" id="dt_dt_message" ref="menuScroll">
    <div class="dt_dt_button_box">
      <el-button-group>
        <el-button @click="floor_click(629)">项目详情</el-button>
        <el-button @click="floor_click(3519)">购票须知</el-button>
        <el-button @click="floor_click(4119)">观演须知</el-button>
      </el-button-group>
      <div class="bt_nav_fex" v-show="bt_nav_fex">
        <div class="nav_fex_box">
          <span @click="floor_click(629)" :class="{'floor_range':r_floorshow}">
            项目详情
            <p v-if="r_floorshow"></p>
          </span>
          <span @click="floor_click(3519)" :class="{'floor_range':r_floorshow1}">
            购票须知
            <p v-if="r_floorshow1"></p>
          </span>
          <span @click="floor_click(4119)" :class="{'floor_range':r_floorshow2}">
            观演须知
            <p v-if="r_floorshow2"></p>
          </span>
        </div>
      </div>
    </div>
    <div class="dt_dt_form_box">
      <div class="form_floor" v-html="dt_data1.projectDescription"></div>
    </div>
    <div class="form_floor">
      <div class="form_floor_title">购票须知</div>
      <div class="form_floor_word">
        <div class="words">
          <div>
            <p class="item_title">我最多可以购买几张？</p>
            <ul>
              <li data-spm-anchor-id="a2oeg.project.detail-info.i6.5b5c670eCDXboo">每笔订单最多购买6张</li>
            </ul>
          </div>
          <div>
            <p class="item_title">需要实名购买吗？</p>
            <ul>
              <li data-spm-anchor-id="a2oeg.project.detail-info.i0.5b5c670eCDXboo">无需实名购票</li>
            </ul>
          </div>
          <div>
            <p class="item_title">下单成功后，是否允许修改配送信息？</p>
            <ul>
              <li>本项目不支持修改配送地址，请务必在下单前检查好您的收货地址</li>
            </ul>
          </div>
          <div>
            <p class="item_title">婴幼儿及儿童需要买票吗？</p>
            <ul>
              <li>1.2米以上凭成人票入场，1.2米以下谢绝入场</li>
            </ul>
          </div>
          <div>
            <p class="item_title">我要怎么开发票？</p>
            <ul>
              <li>如需发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由开具方提供</li>
            </ul>
          </div>
          <div>
            <p class="item_title">我购买后是否可以退换票？</p>
            <ul>
              <li>票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理</li>
            </ul>
          </div>
          <div>
            <p class="item_title">活动时长</p>
            <ul>
              <li>活动时长以现场为准</li>
            </ul>
          </div>
          <div>
            <p class="item_title">异常排单说明</p>
            <ul>
              <li>
                对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：
                （1）通过同一ID订购超出限购张数的订单。
                （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="form_floor">
      <div class="form_floor_title">观演须知</div>
      <div class="form_floor_word">
        <div class="words">
          <div>
            <p class="item_title">入场时间</p>
            <ul>
              <li>活动前约30分钟</li>
            </ul>
          </div>
          <div>
            <p class="item_title">禁止携带物品</p>
            <ul>
              <li>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合</li>
            </ul>
          </div>
          <div>
            <p class="item_title">寄存说明</p>
            <ul>
              <li>无寄存处，请自行保管携带物品</li>
            </ul>
          </div>
          <div>
            <p class="item_title">主要演员（团体）</p>
            <ul>
              <li>新秀</li>
            </ul>
          </div>
          <div>
            <p class="item_title">最低演出时长</p>
            <ul>
              <li>80min</li>
            </ul>
          </div>
          <div>
            <p class="item_title">最低演出曲目数</p>
            <ul>
              <li>8</li>
            </ul>
          </div>
          <div>
            <p class="item_title">大麦网初始开售时全场可售门票总张数</p>
            <ul>
              <li>70张</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <dm_footer></dm_footer>
  </div>
</template>


<script>
import dm_footer from "../../dt_side/dt_side";
export default {
  name: "HelloWorld",
  components: {
    dm_footer
  },
  data() {
    return {
      bt_nav_fex: false,
      top_scrool: 0,
      r_floorshow: false,
      r_floorshow1: false,
      r_floorshow2: false
    };
  },
  props: {
    dt_data1: {
      type: Object,
      default: {}
    }
  },
  methods: {
    floor_click(number) {
      window.scrollTo(0, number+1);

      // this.index=true;
    
    }
  },
  mounted() {
    document.addEventListener("scroll", res => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      this.top_scrool = scrollTop;
      if (scrollTop >= 629) {
        this.bt_nav_fex = true;
      }else{
        this.bt_nav_fex = false;

      }
      if ( this.top_scrool >= 629 &&  this.top_scrool <= 3519) {
        this.r_floorshow = true;
        this.r_floorshow1 = false;
        this.r_floorshow2 = false;
      } else if ( this.top_scrool >= 3519 &&  this.top_scrool <= 4119) {
        this.r_floorshow = false;
        this.r_floorshow1 = true;
        this.r_floorshow2 = false;
      } else if ( this.top_scrool >= 4119) {
        this.r_floorshow = false;
        this.r_floorshow1 = false;
        this.r_floorshow2 = true;
      }
      console.log(scrollTop);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.floor_range {
  font-size: 20px!important;
  color: #000!important;
}
.nav_fex_box p {
  position: absolute;
  height: 4px;
  width: 18px;
  bottom: 16px;
  left: 32px;
  right: 22px;
  background: #ff2869;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  border-radius: 40px;
}
.nav_fex_box span {
  position: relative;
  font-size: 16px;
  color: #9c9ca5;
  margin-right: 60px;
  cursor: pointer;
}
.nav_fex_box {
  box-sizing: border-box;
  width: 1200px;
  height: 90px;
  padding: 0 30px;
  line-height: 90px;
  margin: 0 auto;
  font-size: 0;
  display: flex;
}
.bt_nav_fex {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
}
.words li {
  list-style: none;
}
.form_floor {
  /* margin-bottom: 50px; */
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 50px;
}
.form_floor_word .item_title {
  color: #999;
  font-size: 13px;
}
.form_floor_word p {
  font-size: 16px;
  color: #4a4a4a;
  line-height: 30px;
}
.form_floor_title {
  padding-bottom: 14px;
  margin-bottom: 23px;
  font-size: 20px;
  color: #000;
  border-bottom: 1px solid #e2e2e2;
}
.el-button {
  padding: 12px 53px;
}
.dt_dt_button_box {
  height: 54px;
  line-height: 54px;
  padding-left: 30px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
}
.dt_dt_message {
  width: 100%;
}
</style>
