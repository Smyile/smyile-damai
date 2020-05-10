<template>
  <div class="login">
    <lgi_header></lgi_header>
    <div class="lgi_content">
      <div class="lgi_content_n">
        <img class="dm_lgi_t" src="./img/dm_lgi_t.png" alt />
        <div class="lgi_box">
          <el-tabs type="border-card">
            <el-tab-pane label="密码登录">
              <ul class="wc_list">
                <el-tooltip :content="ip_user_tooltip" placement="right">
                  <li>
                    <el-input
                      :class="{'dm_login_cha':dm_ck_css}"
                      placeholder="请输入手机号或邮箱"
                      @blur="lg_user_chk"
                      v-model="ip_user"
                    >
                      <template slot="prepend">
                        <i class="el-icon-user"></i>
                      </template>
                    </el-input>
                  </li>
                </el-tooltip>
                <el-tooltip :content="ip_psd_tooltip" placement="right">
                  <li>
                    <el-input
                      placeholder="请输入密码"
                      :class="{'dm_login_cha':dm_ck_css1}"
                      @blur="lg_psd_chk"
                      v-model="ip_psd"
                      show-password
                    >
                      <template slot="prepend">
                        <i class="el-icon-lock"></i>
                      </template>
                    </el-input>
                  </li>
                </el-tooltip>
                <li>
                  <button class="lgi_dl" @click="p_login">登录</button>
                </li>
                <li style="text-align: left;" class="lgi_lj">
                  <img src="./img/dm_qq.svg" alt />
                  <img src="./img/dm_wb.svg" alt />
                  <img src="./img/dm_wx.svg" alt />
                  <img src="./img/dm_tb.png" alt />
                  <img src="./img/dm_zfb.svg" alt />
                </li>
                <li style="text-align: right;">
                  <a href="#">忘记密码</a>
                  <router-link to="login_post">免费注册</router-link>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="短信登录">
              <ul class="wc_list">
                <el-tooltip :content="dx_user_tooltip" placement="right">
                  <li class="list_fir" :class="{'dm_login_cha':dx_user_css}">
                    <div class="icon_ph">
                      <i class="el-icon-mobile-phone icon_ph"></i>
                    </div>
                    <el-select v-model="value" filterable placeholder="+86">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label+item.value"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                    <input
                      class="list_fir_ip"
                      placeholder="请输入手机号"
                      @blur="dx_psd_chk"
                      type="text"
                      v-model="dx_user"
                    />
                  </li>
                </el-tooltip>
                <el-tooltip :content="dx_ver_tooltip" placement="right">
                  <li class="list_fir" :class="{'dm_login_cha':dx_ver_css}">
                    <div class="icon_ph">
                      <i class="el-icon-edit icon_ph"></i>
                    </div>
                    <input
                      class="list_fir_ip"
                      type="text"
                      @blur="check_verificton"
                      v-model="dx_verifiction_num"
                    />

                    <button class="list_fir_bt" @click="dx_verificton">
                      <a href="#">获取验证码</a>
                    </button>
                  </li>
                </el-tooltip>

                <li>
                  <button class="lgi_dl" @click="dx_login">登录</button>
                </li>
                <li style="margin-bottom: 67px;"></li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="扫码登录">
              <div class="sm_box">
                <div class="sm_box_fir">请升级至大麦最新版本</div>
                <div class="sm_box_sec">
                  <img src="static\img\erwei.png" alt />
                </div>
                <div class="sm_box_third">
                  <i class="el-icon-full-screen third_i"></i>
                  <p class="third_word">
                    打开
                    <a href="#">大麦手机客户端</a>
                    <br />扫一扫登录
                  </p>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lgi_header from "../lgi_header/lgi_header";
export default {
  name: "HelloWorld",
  components: {
    lgi_header
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      ip_psd: "",
      ip_user: "",
      dx_user: "",
      dx_psd: "",
      dx_verifiction_num: "",
      dx_verifiction: "",
      ip_user_tooltip: "输入为空",
      ip_psd_tooltip: "输入为空",
      dx_user_tooltip: "输入为空",
      dx_ver_tooltip: "输入为空",
      ip_user_result: true,
      ip_psd_result: true,
      dx_user_result: true,
      dx_ver_result: true,
      dm_ck_css: false,
      dm_ck_css1: false,
      dx_user_css: true,
      dx_ver_css: false,
      phone_code_options: 1,
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
          value: "+886",
          label: "中国台湾"
        },
        {
          value: "+883",
          label: "中国澳门"
        }
      ],
      value: ""
    };
  },
  methods: {
    succ_alert(res) {
      this.$notify({
        title: "正确",
        message: res,
        type: "success"
      });
    },
    fail_alert(res) {
      this.$notify.error({
        title: "错误",
        message: res
      });
    },
    message(res) {
      this.$notify.info({
        title: "消息",
        message: "获得的验证码为：" + res
      });
    },
    clear(str) {
      str = str.replace(/,/g, ""); //取消字符串中出现的所有逗号
      return str;
    },
    dx_verificton() {
      //获取验证码
      let verfi_arr = [];
      let str_arr = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (let i = 0; i < 4; i++) {
        let shu = Math.round(Math.random() * str_arr.length);
        verfi_arr[i] = str_arr[shu];
      }
      let str = verfi_arr.toString();
      let c_str = this.clear(str);
      this.dx_verifiction = c_str;
      this.message(c_str);
    },
    // 校验手机验证码输入是否符合要求
    check_verificton() {
      if (!this.dx_verifiction) {
        this.dx_ver_tooltip = "请先获取验证码";
        this.fail_alert("请先获取验证码");
        this.dx_ver_result = false;
        this.dx_ver_css = false;
      } else if (
        this.dx_verifiction != this.dx_verifiction_num ||
        !this.dx_verifiction_num
      ) {
        this.dx_ver_tooltip = "输入有误或为空";
        this.fail_alert("输入有误或为空");
        this.dx_ver_result = false;
        this.dx_ver_css = false;
      }  else {
        this.dx_ver_tooltip = "正确";
        this.succ_alert("正确");
        this.dx_ver_result = true;
        this.dx_ver_css = true;
      }
    },
    // 校验手机号或者邮箱输入是否符合要求
    lg_user_chk() {
      if (
        !/^1[3|4|5|6|7|9|8][0-9]\d{4,8}$/.test(this.ip_user) &&
        !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(this.ip_user)
      ) {
        this.ip_user_tooltip = "输入有误";
        this.fail_alert("输入有误");
        this.ip_user_result = false;
        this.dm_ck_css = false;
      } else {
        this.ip_user_tooltip = "正确";
        this.succ_alert("正确");
        this.ip_user_result = true;
        this.dm_ck_css = true;
      }
    },
    // 校验密码输入是否符合要求
    lg_psd_chk() {
      var ppassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/;
      if (!ppassword.test(this.ip_psd)) {
        this.ip_psd_tooltip = "输入有误";
        this.fail_alert("输入有误");
        this.ip_psd_result = false;
        this.dm_ck_css1 = false;
      } else {
        this.ip_psd_tooltip = "正确";
        this.succ_alert("正确");
        this.ip_psd_result = true;
        this.dm_ck_css1 = true;
      }
    },
    // 手机号或者邮箱账号登陆
    p_login() {
      if (!this.ip_user_result || !this.ip_psd_result) {
        this.fail_alert("请正确填写信息！");
        return;
      } else if (!this.ip_psd || !this.ip_user) {
        this.fail_alert("信息不能为空！");
        return;
      } else {
        this.succ_alert("登陆成功");
        let users=this.$store.state.user_list;
        let user_id=999999;
        users.forEach((element) => {
          if(element.user==this.ip_user&&element.psd==this.ip_psd){
            user_id=element.id;
          }
        });
        if(user_id==999999){
        this.fail_alert("密码或用户名错误");
        return
        };
        this.$store.commit('countIncrease',user_id);
        this.$router.replace("/");
      }
    },
    // 手机号验证码登陆
    dx_login() {
      if (!this.dx_user_result || !this.dx_ver_result) {
        this.fail_alert("请正确填写信息！");
        return;
      }else if (!this.dx_user || !this.dx_verifiction_num) {
        this.fail_alert("信息不能为空！");
        return;
      } else {
        this.succ_alert("登陆成功");
        this.$router.replace("/");
      }
    },
    // 校验密码输入是否符合要求_短信
    dx_psd_chk() {
      if (!/^1[3|4|5|6|7|9|8][0-9]\d{4,8}$/.test(this.dx_user)) {
        this.dx_user_tooltip = "输入有误";
        this.fail_alert("输入有误");
        this.dx_user_result = false;
        this.dx_user_css = false;
      } else {
        this.dx_user_tooltip = "正确";
        this.succ_alert("正确");
        this.dx_user_result = true;
        this.dx_user_css = true;
      }
    }
  },
  mounted() {
    this.$http
      .postRequest({
        type: "listGuessLike",
        data: {
          itemTypeId: "1"
        }
      })
      .then(res => {
        // console.log(res);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dm_login_cha {
  border: 1px solid rgb(19, 202, 65) !important;
}
.third_i {
  float: left;
  font-size: 34px;
  color: #ff1268;
}

.sm_box_third {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.sm_box_sec {
  margin: 10px 0;
}
.sm_box_fir {
  margin: 8px 0;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  zoom: 1;
}
.list_fir_bt {
  border: none;
  outline: none;
  background: none;
}
.list_fir_ip {
  width: 150px;
  border: none;
  outline: none;
}

.list_fir .el-input__inner {
  border: none;
  
}
.list_fir .el-select {
  width: 75px;
  /* padding-left: 10px; */
  border: none;
  height: 38px;
  line-height: 38px;
  border-right: 1px solid #ccc;
  cursor: pointer;
  border-bottom: 0;
}
.list_fir {
  display: flex;
  border: 1px solid #ccc;
}
.dx_select {
  width: 70px;
  padding-left: 10px;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #ccc;
  position: relative;
  cursor: pointer;
}
.icon_ph {
  font-size: 25px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #ccc;
}
.lgi_lj img {
  width: 22px;
  height: 22px;
  display: inline-block;
  margin-right: 10px;
}
.lgi_dl {
  border: 1px solid #ff9000;
  border-radius: 3px;
  font-size: 20px;
  height: 42px;
  line-height: 42px;
  outline: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
  background-color: #ff1268;
}
.wc_list {
  box-sizing: border-box;
  padding: 0 15px;
}
.wc_list li {
  list-style: none;
  margin: 15px 0;
}
.lgi_box {
  padding: 0;
  overflow: hidden;
  float: right;
  width: 350px;
  min-height: 310px;
  background: #fff;
  text-align: center;
}
.dm_lgi_t {
  width: 720px;
  height: 400px;
}
.lgi_content_n {
  height: 600px;
  margin: 0 auto;
  width: 1200px;
  overflow: hidden;
  padding-top: 90px;
  box-sizing: border-box;
  /* background-color: #753; */
}
.lgi_content {
  background: linear-gradient(to right, #17073d, #17073d, #17073d);
}
</style>
