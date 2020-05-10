<template>
  <div class="g_adress">
    <div class="count_center_title">收货地址</div>
    <div class="count_center_box">
      <ul class="title_message">
        <li>
          <a class="on_message" href="#">收货地址</a>
        </li>
        <li class="right_message">
          <span></span>
        </li>
      </ul>
      <button class="dm_newadress" @click="teg_message_box">创建新地址</button>
      <div class="message_box_r" v-show="message_box">
        <ul class="message_box_from">
          <li>
            <label class="message_box_from_lb">
              <span class="starrr">*</span> 收件人：
            </label>
            <input
              @blur="dm_Addressee"
              class="message_box_from_ip"
              type="text"
              v-model="adress_message.name"
            />
          </li>
          <div class="g_ad_alert">
            <el-alert :title="mis_message" type="error" v-show="user_ck_result" show-icon></el-alert>
          </div>
          <li>
            <label class="message_box_from_lb">
              <span class="starrr">*</span> 手机：
            </label>
            <input
              class="message_box_from_ip"
              @blur="dm_telephone"
              type="text"
              v-model="adress_message.telephone"
            />
            <el-select v-model="adress_message.value" placeholder="中国大陆 +86" :span="4">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label+' '+item.value"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <div class="g_ad_alert">
            <el-alert :title="mis_message_phone" type="error" v-show="phone_ck_result" show-icon></el-alert>
          </div>
          <li class="dm_distpicker">
            <label class="message_box_from_lb">
              <span class="starrr">*</span> 配送地址：
            </label>
            <v-distpicker
              :placeholders="placeholders"
              @area="onChangearea"
              @city="onChangeCity"
              @province="onChangeProvince"
            ></v-distpicker>
          </li>
          <li class="dm_distpicker">
            <label class="message_box_from_lb">你的选择：</label>
            省份：{{placeholders.province}}/ 城市：{{placeholders.city}}/ 地区：{{placeholders.area}}
          </li>
          <li class="dm_distpicker">
            <label class="message_box_from_lb">
              <span class="starrr">*</span> 详细地址：
            </label>
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="adress_message.adress"></el-input>
          </li>
          <li class="list_button">
            <label class="message_box_from_lb"></label>
            <button class="success_button" @click="save_message_box">保存地址</button>
            <button class="success_button1" @click="teg_message_box">取消</button>
          </li>
        </ul>
      </div>
      <div class="message_box" v-for="(ge_adress,index) in ge_adress" :key="index">
        <div class="message_box_group">
          <button class="message_box_btn">
            <a href="#">修改</a>
          </button> |
          <button class="message_box_btn">
            <a href="#">删除</a>
          </button>
        </div>
        <div class="message_box_l">
          <p>
            姓名：
            <span>{{ge_adress.name}}</span>
            手机号：
            <span>{{ge_adress.tellphone}}</span>
          </p>
          <p>
            籍贯：
            <span>石家庄</span>
            详细地址：
            <span>{{ge_adress.adress}}</span>
          </p>
        </div>
      </div>
      <div class="message_box" v-if="tog_zeng">
        <div class="message_box_group">
          <button class="message_box_btn">
            <a href="#">修改</a>
          </button> |
          <button class="message_box_btn">
            <a href="#">删除</a>
          </button>
        </div>
        <div class="message_box_l">
          <p>
            姓名：
            <span>{{adress_message.name}}</span>
            手机号：
            <span>{{adress_message.telephone}}</span>
          </p>
          <p>
            籍贯：
            <span>{{placeholders.city}}</span>
            详细地址：
            <span>{{adress_all}}{{adress_message.adress}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VDistpicker from "v-distpicker";
export default {
  name: "HelloWorld",
  components: {
    VDistpicker
  },
  data() {
    return {
      user_ck_result: false,
      phone_ck_result: false,
      ge_adress: [],
      mis_message: "",
      mis_message_phone: "",
      message_box: false,
      tog_zeng: false,
      textarea1: "",
      realname: "",
      placeholders: {
        province: "------- 省 --------",
        city: "--- 市 ---",
        area: "--- 区 ---"
      },
      adress_message: {
        name: "",
        telephone: "",
        adress: "",
        value: "",
      },
      options: [
        {
          value: "+86",
          label: "中国大陆"
        },
        {
          value: "+852",
          label: "中国香港"
        },
        {
          value: "+853",
          label: "中国澳门"
        },
        {
          value: "+886",
          label: "中国台湾"
        }
      ],
      value: ""
    };
  },
  computed:{
    adress_all(){
      return this.placeholders.province+this.placeholders.city+this.placeholders.area
    }
  },
  methods: {
    // 校验手机号码输入是否符合要求
    dm_telephone() {
      if (
        !/^1[3|4|5|6|7|9|8][0-9]\d{4,8}$/.test(this.adress_message.telephone)
      ) {
        this.mis_message_phone = "手机号格式不正确";
        this.phone_ck_result = true;
      } else {
        this.mis_message_phone = "";
        this.phone_ck_result = false;
      }
    },
    dm_Addressee() {
      if (/^[\u4e00-\u9fa5]{2,6}$/.test(this.adress_message.name)) {
        this.user_ck_result = false;
        this.mis_message = "";
      } else {
        this.user_ck_result = true;
        this.mis_message = "姓名输入有误！";
      }
    },
    save_message_box() {
      if (
        this.user_ck_result ||
        this.phone_ck_result ||
        !this.adress_message.adress
      ) {
        this.$notify.error({
          title: "错误",
          message: "输入有误"
        });
        return;
      } else {
        this.message_box = !this.message_box;

        this.tog_zeng = !this.tog_zeng;
      }
    },
    teg_message_box() {
      this.message_box = !this.message_box;
    },
    onChangeProvince(res) {
      this.placeholders.province = res.value;
    },
    onChangeCity(res) {
      this.placeholders.city = res.value;
    },
    onChangearea(res) {
      this.placeholders.area = res.value;
    }
  },
  mounted() {
    this.$http
      .postRequest({
        type: "ticketBuyerList",
        data: {
          itemTypeId: "1"
        }
      })
      .then(res => {
        console.log(res);
        this.ge_adress = res.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.g_ad_alert {
  width: 200px;
  margin-left: 105px;
}
.success_button {
  background-position: -243px -93px;
  width: 94px;
  height: 32px;
  background-image: url(.\img\b.png);
  border: none;
  outline: none;
}
.success_button1 {
  width: 50px;
  height: 32px;
  border: none;
  outline: none;
  margin-left: 50px;
  box-shadow: 2px 2px 2px #745;
}
.message_box_from_ip {
  height: 35px;
  line-height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.message_box_from li {
  /* font-size: 25px; */
  margin: 15px 0;
}
.dm_distpicker {
  display: flex;
}
.message_box_from_lb {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.message_box_from li {
  list-style: none;
}
.message_box_r {
  padding: 25px;
  background-color: #ccc;
  box-sizing: border-box;
  margin: 25px 15px;
  clear: both;
}
.message_box_group {
  float: right;
}
.message_box_l span {
  margin: 5px 10px;
}
.message_box_l {
  clear: both;
}
.message_box_l p {
  padding: 5px;
}
.message_box_btn {
  background: none;
  outline: none;
  border: none;
}
.message_box {
  width: 100%;
  font-size: 10px;
  color: #999;
  border: 1px solid #ccc;
  margin: 15px 0;
  clear: both;
}
.dm_newadress {
  margin: 10px;
  float: right;
  width: 90px;
  clear: both;
}
.right_message {
  font-size: 8px;
}
.right_message span {
  color: #ed0a75;
  font-size: 28px;
  font-weight: 700;
  line-height: 25px;
}
.title_message {
  border-bottom: 2px solid #ed0a75;
  height: 29px;
  display: flex;
  justify-content: space-between;
}
.title_message li {
  list-style: none;
  color: #333;
  font-size: 14px;
  width: 180px;
  text-align: right;
  line-height: 20px;
}
.on_message:hover {
  color: #fff;
}
.on_message {
  display: block;
  line-height: 29px;
  text-align: center;
  color: #fff;
  background-color: #ed0a75;
  font-size: 12px;
  margin: 0 15px;
  border-radius: 2px;
}
.count_center_title {
  border: 1px solid #efefef;
  height: 38px;
  overflow: hidden;
  padding: 0 15px;
  line-height: 38px;
  color: #999;
  margin-bottom: 15px;
}
.count_center_box {
  width: 790px;
}
</style>
